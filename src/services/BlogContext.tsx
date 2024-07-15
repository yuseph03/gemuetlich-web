import React, { createContext, useContext, useState, useEffect } from 'react';

export interface BlogPost {
  _id: string;
  title: string;
  date: string;
  excerpt: string;
  link: string;
}

interface BlogContextType {
  posts: BlogPost[];
  loading: boolean;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

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

export const useBlog = (): BlogContextType => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};
