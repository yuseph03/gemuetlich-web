import { Request, Response } from 'express';
import BlogPostModel from '../models/BlogPostModel';

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await BlogPostModel.find();
    res.json(posts);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getPostById = async (req: Request, res: Response) => {
  try {
    const post = await BlogPostModel.findById(req.params.id);
    if (!post) {
      return res.status(404).send('Post not found');
    }
    res.json(post);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {
    const newPost = new BlogPostModel(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const updatedPost = await BlogPostModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPost) {
      return res.status(404).send('Post not found');
    }
    res.json(updatedPost);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const deletedPost = await BlogPostModel.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).send('Post not found');
    }
    res.json(deletedPost);
  } catch (err) {
    res.status(400).send(err);
  }
};
