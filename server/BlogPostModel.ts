import mongoose, { Document, Schema } from 'mongoose';

interface BlogPost {
    _id: string;
    title: string;
    date: string;
    excerpt: string;
    link: string;
}
  
const blogPostSchema = new mongoose.Schema<BlogPost>({
    title: { type: String, required: true },
    date: { type: String, required: true },
    excerpt: { type: String, required: true },
    link: { type: String, required: true },
});

const BlogPostModel = mongoose.model<BlogPost>('BlogPost', blogPostSchema);
  
export default BlogPostModel;