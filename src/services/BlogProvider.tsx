import React, { useState, useEffect } from 'react';
import { BlogContext } from './BlogContext';
import { BlogPost } from '../types/types';

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_BASE_URL = 'http://localhost:5000'; 
    fetchBlogPosts(API_BASE_URL);
  }, []);

  const fetchBlogPosts = async (API_BASE_URL: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/posts`);
      const data: BlogPost[] = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch blog posts:', error);
      setLoading(false);
    }
  };

  return (
    <BlogContext.Provider value={{ posts, loading }}>
      {children}
    </BlogContext.Provider>
  );
};
