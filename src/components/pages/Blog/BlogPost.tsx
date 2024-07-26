import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css';
import { BlogPost as IBlogPost } from '../../../types/types';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<IBlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/posts/${id}`);
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
