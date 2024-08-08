import React, { useState, useEffect, useCallback } from 'react';
import DeletePostButton from './DeletePostButton';
import EditPostForm from './EditPostForm'; 
import { BlogPost } from '../../../types/types';

const EditPostSection: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

  const fetchPosts = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/posts`);
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch posts', error);
    }
  }, [API_BASE_URL]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const deselectPost = useCallback(() => {
    setSelectedPost(null);
  }, []);

  const handleAction = useCallback(() => {
    fetchPosts();
    deselectPost();
  }, [fetchPosts, deselectPost]);
  
  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <br />
      <h1>Current blog posts</h1>
      {selectedPost ? (
        <EditPostForm post={selectedPost} onPostUpdated={handleAction} onCancel={handleAction}/>
      ) : (
        <div className="post-list">
          {posts.map((post) => (
            <div key={post._id} className="post-item">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <button onClick={() => setSelectedPost(post)}>Edit</button>
              <DeletePostButton postId={post._id} onPostDeleted={handleAction} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EditPostSection;
