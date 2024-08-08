import React from 'react';

interface DeletePostButtonProps {
  postId: string;
  onPostDeleted: () => void;
}

const DeletePostButton: React.FC<DeletePostButtonProps> = ({ postId, onPostDeleted }) => {

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/posts/${postId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete blog post');
      alert('Blog post deleted successfully!');
      onPostDeleted();
    } catch (error) {
      console.error('Error deleting blog post:', error);
      alert('Error deleting blog post');
    }
  };

  return (
    <button
     className="delete"
     type="button" 
     onClick={handleDelete}
     >Delete Post</button>
  );
};

export default DeletePostButton;
