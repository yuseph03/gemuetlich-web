import express,{ Request, Response, ErrorRequestHandler } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import dbConnect from './utils/dbConnect';
import postRoutes from './routes/postRoutes';
import authRoutes from './routes/authRoutes';
import { authenticateToken } from './middleware/authMiddleware';
import { upload } from './middleware/uploadMiddleware';
import { serveStaticFiles } from './middleware/staticMiddleware';

dotenv.config();
const app = express();
app.use(bodyParser.json());

const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173', 
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));

app.use(helmet());
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", "data:", process.env.CORS_ORIGIN || 'http://localhost:5000'], 
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'", "https:"],
      objectSrc: ["'none'"],
      frameSrc: ["'none'"],
    },
  },
  hidePoweredBy: true,
}));

app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
  next();
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

serveStaticFiles(app);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.json({ filePath: `/uploads/${req.file.filename}` });
});

app.use('/api/auth', authRoutes);

app.use('/api/admin', authenticateToken, (req, res) => {
  res.send('Protected route accessed!');
});

app.use(postRoutes);

dbConnect();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const errorHandler: ErrorRequestHandler = (err, req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
};

app.use(errorHandler);


