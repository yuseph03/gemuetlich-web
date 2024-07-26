import React from 'react';
import Blog from './Blog';
import { BlogProvider } from '../../../services/BlogProvider';

const BlogPage: React.FC = () => {
  return (
    <BlogProvider>
      <Blog />
    </BlogProvider>
  );
};

export default BlogPage;
