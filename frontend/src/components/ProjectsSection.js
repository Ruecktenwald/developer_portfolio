import React from 'react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-bg2 text-white py-20">
      <div className="container mx-auto text-left px-6">
        <h2 className="text-4xl font-bold mb-10 text-brand1">Recent Project</h2>
        <div className="recent-project bg-bg1 rounded-lg p-8 shadow-lg mb-16">
          <img src="https://via.placeholder.com/640x360" alt="Recent Project" className="rounded mb-6" />
          <h3 className="text-3xl font-regular mb-4 text-brand1">Recent Project Title</h3>
          <p className="text-lg mb-6">A detailed description of the recent project, the technologies used, and what problem it solves. This project stands out for its impact and innovative use of technology.</p>
          <a href="#" className="bg-brand1 hover:bg-brand2 text-bg1 font-bold py-3 px-6 rounded inline-flex items-center">More Details</a>
        </div>

        <div className="text-center mt-16">
          <a href="/projects" className="bg-brand1 hover:bg-brand2 text-bg1 font-bold py-3 px-6 rounded inline-flex items-center">View Other Projects</a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
