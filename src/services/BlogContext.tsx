import { createContext } from 'react';
import { BlogContextType } from '../types/types';

export const BlogContext = createContext<BlogContextType | undefined>(undefined);
