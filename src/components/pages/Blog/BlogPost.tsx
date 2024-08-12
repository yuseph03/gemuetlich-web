import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlogPost as IBlogPost } from '../../../types/types';
import './BlogPost.css';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<IBlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/posts/${id}`);
        if (!response.ok) {
          throw new Error('Post not found');
        }
        const data: IBlogPost = await response.json();
        setPost(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch blog post:', error);
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p className="blog-date">📅 {new Date(post.date).toLocaleDateString()}</p>
      {post.imageUrl && <img src={`http://localhost:5000${post.imageUrl}`} alt={post.title} />}
      <div className="blog-content">
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
