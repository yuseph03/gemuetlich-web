import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { useBlog } from '../../services/BlogContext';

const Blog: React.FC = () => {
  const { posts, loading } = useBlog();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (posts == null) {
    return <div>No Blog Posts 😩</div>;
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
                <Link to={`/posts/${post._id}`} className="read-more">
                  Read more ➡️
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Blog;
