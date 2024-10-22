import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../components/Modal';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

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

  const handleSubscribeClick = () => {
    setIsModalOpen(true);
    setStatusMessage(''); // Clear previous status messages
  };

  const handleSubscribe = async () => {
    if (!validateEmail(email)) {
      setIsSuccess(false);
      setStatusMessage('Please enter a valid email address with a valid domain (e.g., gmail.com, yahoo.com).');
      return;
    }
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/subscribe/', { email });
  
      if (response.status === 201) {
        setIsSuccess(true);
        setStatusMessage('Thank you for subscribing!');
        setTimeout(() => {
          setIsModalOpen(false);
        }, 1000);
        setEmail('');
      } else if (response.status === 200) {
        setIsSuccess(false);
        setStatusMessage('This email is already subscribed.');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      setIsSuccess(false);
      setStatusMessage('There was an error. Please try again later.');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|mil|int)$/;
    return emailRegex.test(email);
  };

  return (
    <section className="bg-bg1 text-white py-16 md:px-12 px-6 relative">
      {/* Gradient background similar to ProjectsPage with orange colors from Hero section */}
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-br from-orange-400 to-red-500 opacity-20 z-0 pointer-events-none"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-light text-brand1 mb-12 text-left border-b-2 border-brand1 pb-4">DevLog</h2>
        <div className="space-y-12">
          {blogs
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .map((blog) => (
              <div key={blog.id} className="bg-bg2 p-8 md:px-12 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out">
                <h3 className="text-4xl font-semibold text-brand1 mb-4  transition-all duration-300 ease-in-out">{blog.title}</h3>
                <div className="text-lg mb-4 text-gray-300 line-clamp-3">
                  {blog.content.length > 200 ? `${blog.content.slice(0, 200)}...` : blog.content}
                </div>
                {blog.video_url && (
                  <div className="mb-6">
                    <div className="relative w-full h-0 pb-[56.25%]">
                      <video controls className="absolute top-0 left-0 w-full h-full object-cover rounded-lg">
                        <source src={`http://127.0.0.1:8000${blog.video_url}`} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between mt-6">
                  <p className="text-gray-500 text-sm">Created on: {new Date(blog.created_at).toLocaleDateString()}</p>
                  <button onClick={handleSubscribeClick} className="text-brand1 hover:text-brand2 font-medium transition-colors duration-300">Subscribe to my DevLog</button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h2 className="text-2xl font-bold mb-4">Subscribe to DevLog</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-2 mb-4 border rounded text-black"
          />
          <button onClick={handleSubscribe} className="bg-brand1 font-bold text-bg1 px-4 py-2 rounded hover:bg-brand2 transition-colors duration-300 mb-4">Subscribe</button>
          {statusMessage && (
            <div className={`p-2 rounded ${isSuccess ? 'bg-green-500' : 'bg-red-500'} text-white`}> 
              {statusMessage}
            </div>
          )}
        </Modal>
      )}
    </section>
  );
};

export default BlogsPage;
