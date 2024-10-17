// Modal.js
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, onClose }) => {
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center px-4 bg-black bg-opacity-50 backdrop-blur-md z-50 modal-overlay"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white text-black p-8 rounded-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold hover:text-gray-500"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
