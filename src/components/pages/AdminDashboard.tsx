import React, { useState, useRef } from 'react';
import './AdminDashboard.css';

const AdminDashboard: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageUrl(event.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const API_BASE_URL = 'http://localhost:5000';

    let uploadedImageUrl = '';

    if (imageFile) {
      const formData = new FormData();
      formData.append('file', imageFile);

      try {
        const response = await fetch(`${API_BASE_URL}/api/upload`, {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        uploadedImageUrl = data.filePath;
      } catch (error) {
        console.error('Image upload failed:', error);
      }
    }

    const newPost = {
      title,
      date: new Date().toISOString(),
      excerpt: content.slice(0, 100) + '...',
      content,
      imageUrl: uploadedImageUrl,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/api/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) {
        throw new Error('Failed to add blog post');
      }

      alert('Blog post added successfully!');
      setTitle('');
      setContent('');
      setImageUrl('');
      setImageFile(null);
      if (imageInputRef.current) {
        imageInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Error adding blog post:', error);
      alert('Error adding blog post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">🔖 Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="content">📝 Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">📸 Image:</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            ref={imageInputRef}
          />
        </div>
        {imageUrl && (
          <div>
            <img src={imageUrl} alt="Preview" style={{ maxWidth: '100%' }} />
          </div>
        )}
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;
