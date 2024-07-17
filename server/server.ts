import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import BlogPostModel from './BlogPostModel';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const mongoURI = 'mongodb://127.0.0.1:27017/blog';
mongoose.connect(mongoURI).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

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
