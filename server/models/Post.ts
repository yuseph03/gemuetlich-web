import mongoose, { Document } from 'mongoose';

interface BlogPost extends Document {
    _id: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    imageUrl?: string;
}
  
const blogPostSchema = new mongoose.Schema<BlogPost>({
    title: { type: String, required: true },
    date: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String, required: false},
});

const Post = mongoose.model<BlogPost>('BlogPost', blogPostSchema);
  
export default Post;