import React, { useState, useRef } from 'react';
import { BlogPost } from '../../../types/types';

export interface EditPostFormProps {
  post: BlogPost;
  onPostUpdated: () => void;
  onCancel: () => void;
}

const EditPostForm: React.FC<EditPostFormProps> = ({ post, onPostUpdated, onCancel }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [imageUrl, setImageUrl] = useState(post.imageUrl);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      const reader = new FileReader();
      reader.onload = (event) => setImageUrl(event.target?.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleUpdate = async () => {
    setLoading(true);
    const API_BASE_URL = 'http://localhost:5000';
    let uploadedImageUrl = imageUrl;

    if (imageFile) {
      const formData = new FormData();
      formData.append('file', imageFile);
      try {
        const response = await fetch(`${API_BASE_URL}/api/upload`, { method: 'POST', body: formData });
        const data = await response.json();
        uploadedImageUrl = data.filePath;
      } catch (error) {
        console.error('Image upload failed:', error);
      }
    }

    const updatedPost = { ...post, title, excerpt: content.slice(0, 100) + "...", imageUrl: uploadedImageUrl };

    try {
      const response = await fetch(`http://localhost:5000/api/posts/${post._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPost),
      });

      if (!response.ok) throw new Error('Failed to update blog post');
      alert('Blog post updated successfully!');
      onPostUpdated();
    } catch (error) {
      console.error('Error updating blog post:', error);
      alert('Error updating blog post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Edit Post</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
        <div>
          <label htmlFor="title">🔖 Title:</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} required />
        </div>
        <div>
          <label htmlFor="content">📝 Content:</label>
          <textarea id="content" value={content} onChange={handleContentChange} required />
        </div>
        <div>
          <label htmlFor="image">📸 Image:</label>
          <input type="file" id="image" onChange={handleImageChange} ref={imageInputRef} />
        </div>
        {imageUrl && <img src={imageUrl} alt="Preview" style={{ maxWidth: '100%' }} />}
        <button type="button" onClick={handleUpdate} disabled={loading}>{loading ? 'Saving...' : 'Save Changes'}</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default EditPostForm;
