import { useContext } from 'react';
import { BlogContext } from '../services/BlogContext'; 
import { BlogContextType } from '../types/types';

export const useBlog = (): BlogContextType => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};
