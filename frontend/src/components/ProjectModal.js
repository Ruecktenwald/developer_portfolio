// Modal.js
import React from 'react';
import ReactDOM from 'react-dom';

const ProjectModal = ({ onClose, title, description, technologies, link, image, video }) => {
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center px-4 py-8 bg-black bg-opacity-60 backdrop-blur-md z-50 modal-overlay"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white text-black p-8 rounded-lg max-w-4xl w-full h-[90vh] relative overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold hover:text-gray-500"
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <p className="text-lg mb-4">{description}</p>
            <div className="mb-4">
              <strong>Technologies:</strong> {technologies}
            </div>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-brand1 hover:bg-brand2 text-bg1 font-bold py-2 px-4 rounded"
              >
                View Project
              </a>
            )}
          </div>
          <div className="flex-1">
            {video ? (
              <video controls className="w-full rounded mb-4">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={image || 'https://via.placeholder.com/640x360'}
                alt={title}
                className="w-full rounded mb-4"
              />
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
