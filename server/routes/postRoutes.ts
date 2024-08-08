import express from 'express';
import { getPosts, getPostById, createPost, updatePost, deletePost } from '../controllers/postController';

const postRoutes = express.Router();

postRoutes.get('/api/posts', getPosts);
postRoutes.get('/api/posts/:id', getPostById);
postRoutes.post('/api/posts', createPost);
postRoutes.put('/api/posts/:id', updatePost);
postRoutes.delete('/api/posts/:id', deletePost);

export default postRoutes;
