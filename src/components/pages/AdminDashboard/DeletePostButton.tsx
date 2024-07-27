import React from 'react';

interface DeletePostButtonProps {
  postId: string;
  onPostDeleted: () => void;
}

const DeletePostButton: React.FC<DeletePostButtonProps> = ({ postId, onPostDeleted }) => {

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;

    const API_BASE_URL = 'http://localhost:5000';
    try {
      const response = await fetch(`http://localhost:5000/api/posts/${postId}`, {
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
    <button type="button" onClick={handleDelete}>Delete Post</button>
  );
};

export default DeletePostButton;
