import React, { useContext, useEffect, useState } from 'react';
import './Blog.css';
import { useBlog } from '../../services/BlogContext';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  link: string;
}

const Blog: React.FC = () => {
  const {posts, loading} = useBlog();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-page">
      <main className="main">
        <section className="blog-section">
          <h2>📝 Our Blog</h2>
          <div className="blog-list">
            {posts.map((post) => (
              <div key={post._id} className="blog-post">
                <h3>{post.title}</h3>
                <p className="blog-date">📅 {post.date}</p>
                <p>{post.excerpt}</p>
                <a href={post.link} className="read-more">
                  Read more ➡️
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Blog;
