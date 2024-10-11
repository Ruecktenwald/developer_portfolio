import React from 'react';
import '../styles/BlogList.css'; // Import custom CSS

// Mock data for the blogs
const blogs = [
  {
    id: 1,
    title: 'What does it take to become a web developer?',
    description: 'An exploration of the skills required to become a successful web developer.',
    date: 'October 10, 2024',
    image: '/path-to-image.jpg',
  },
  {
    id: 2,
    title: 'The Future of Web Development',
    description: 'A look into the trends shaping the future of the web development industry.',
    date: 'October 8, 2024',
    image: '/path-to-image.jpg',
  },
  // Add more blogs here
];

const BlogList = () => {
  return (
    <div className="blog-list-container">
      <h1>Blogs</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p className="blog-date">{blog.date}</p>
              <p>{blog.description}</p>
              <button className="read-more-button">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
