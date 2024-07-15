import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose, { Document, Schema, Model } from 'mongoose';

interface BlogPost extends Document {
  title: string;
  date: string;
  excerpt: string;
  link: string;
}

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const mongoUri = 'mongodb://localhost:27017/blog';
const mongoOptions = {
  useNewUrlParser: true,    
  useUnifiedTopology: true,  
  useCreateIndex: true,      
  useFindAndModify: false, 
  autoIndex: false,        
};
mongoose.connect(mongoUri, mongoOptions)
  .then(() => {
    console.log('MongoDB database connection established successfully');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

const blogPostSchema = new Schema<BlogPost>({
  title: String,
  date: String,
  excerpt: String,
  link: String,
}, {
  timestamps: true,
});
const BlogPostModel: Model<BlogPost> = mongoose.model('BlogPost', blogPostSchema);

app.get('/api/posts', async (req: Request, res: Response) => {
  try {
    const posts = await BlogPostModel.find();
    res.json(posts);
  } catch (err) {
    res.status(400).send('Failed to retrieve blog posts');
  }
});

app.post('/api/posts', async (req: Request, res: Response) => {
  const { title, date, excerpt, link } = req.body;
  const newPost = new BlogPostModel({ title, date, excerpt, link });

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).send('Failed to create new blog post');
  }
});

app.put('/api/posts/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, date, excerpt, link } = req.body;

  try {
    const updatedPost = await BlogPostModel.findByIdAndUpdate(id, { title, date, excerpt, link }, { new: true });
    res.json(updatedPost);
  } catch (err) {
    res.status(400).send(`Failed to update blog post with id ${id}`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
