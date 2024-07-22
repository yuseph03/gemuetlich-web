import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import multer from 'multer'
import BlogPostModel from './models/BlogPostModel';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const mongoURI = 'mongodb://127.0.0.1:27017/blog';
mongoose.connect(mongoURI).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.json({ filePath: `/uploads/${req.file.filename}` });
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await BlogPostModel.find();
    res.json(posts);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/api/posts', async (req, res) => {
  try {
    const newPost = new BlogPostModel(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get('/api/posts/:id', async (req, res) => {
  try {
    const post = await BlogPostModel.findById(req.params.id);
    if (!post) {
      return res.status(404).send('Post not found');
    }
    res.json(post);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put('/api/posts/:id', async (req, res) => {
  try {
    const updatedPost = await BlogPostModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPost) {
      return res.status(404).send('Post not found');
    }
    res.json(updatedPost);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.delete('/api/posts/:id', async (req, res) => {
  try {
    const deletedPost = await BlogPostModel.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).send('Post not found');
    }
    res.json(deletedPost);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the Blog API');
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
