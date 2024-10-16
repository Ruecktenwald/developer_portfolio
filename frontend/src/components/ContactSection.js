import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-bg1 text-white py-20 px-6">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand1">Contact Me</h2>
          <p className="text-lg mt-4">Feel free to reach out for collaborations, questions, or just to say hi!</p>
        </div>
        <form className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-sm font-semibold">Your Name</label>
            <input type="text" id="name" placeholder="Your Name" className="p-4 rounded-lg bg-bg2 text-white outline-none focus:ring-2 focus:ring-brand1 transition" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm font-semibold">Your Email</label>
            <input type="email" id="email" placeholder="Your Email" className="p-4 rounded-lg bg-bg2 text-white outline-none focus:ring-2 focus:ring-brand1 transition" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 text-sm font-semibold">Your Message</label>
            <textarea id="message" placeholder="Your Message" className="p-4 rounded-lg bg-bg2 text-white outline-none focus:ring-2 focus:ring-brand1 transition h-32"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-brand1 hover:bg-brand2 text-bg1 font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
