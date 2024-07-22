import React from 'react';
import Blog from './Blog';
import { BlogProvider } from '../../services/BlogContext';

const BlogPage: React.FC = () => {
  return (
    <BlogProvider>
      <Blog />
    </BlogProvider>
  );
};

export default BlogPage;
