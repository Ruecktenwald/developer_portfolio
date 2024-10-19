import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/blogs/');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className="bg-bg1 text-white py-16 md:px-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-5xl font-regular text-brand1 mb-12 text-left">Most Recent</h2>
        <div className="space-y-12">
          {blogs
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .map((blog) => (
              <div key={blog.id} className="bg-bg2 p-8 md:px-12 rounded-lg shadow-lg">
                <h3 className="text-4xl font-bold text-brand1 mb-4">{blog.title}</h3>
                <div className="text-lg mb-4 text-gray-300">{blog.content}</div>
                <p className="mb-4 text-gray-500">Author: {blog.author}</p>
                <div className="mb-4">
                  {blog.video_url && (
                    <div className="relative w-full h-0 pb-[56.25%]">
                      <video controls className="absolute top-0 left-0 w-full h-full object-cover rounded">
                        <source src={`http://127.0.0.1:8000${blog.video_url}`} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                </div>
                <p className="text-gray-500 text-sm text-right">Created on: {new Date(blog.created_at).toLocaleDateString()}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
