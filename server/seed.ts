
import mongoose from 'mongoose';
import BlogPostModel from './BlogPostModel';

const mongoURI = 'mongodb://127.0.0.1:27017/blog';

mongoose.connect(mongoURI).then(async () => {
  console.log('Connected to MongoDB');

  const initialBlogPosts = [
    {
      title: 'First Post',
      date: new Date().toISOString(),
      excerpt: 'This is the first blog post.',
      link: 'http://example.com/first-post',
    },
    {
      title: 'Second Post',
      date: new Date().toISOString(),
      excerpt: 'This is the second blog post.',
      link: 'http://example.com/second-post',
    },
  ];

  try {
    await BlogPostModel.insertMany(initialBlogPosts);
    console.log('Initial blog posts added successfully');
  } catch (error) {
    console.error('Error adding initial blog posts:', error);
  } finally {
    mongoose.connection.close();
  }
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
