import express from 'express';
import { getPosts, getPostById, createPost, updatePost, deletePost } from '../controllers/postController';

const router = express.Router();

router.get('/api/posts', getPosts);
router.get('/api/posts/:id', getPostById);
router.post('/api/posts', createPost);
router.put('/api/posts/:id', updatePost);
router.delete('/api/posts/:id', deletePost);

export default router;
