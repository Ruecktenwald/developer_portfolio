import React from 'react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-bg2 text-white py-20">
      <div className="container mx-auto text-left">
        <h2 className="text-4xl font-bold mb-10 text-brand1">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Project Card */}
          <div className="project-card bg-bg1 rounded-lg p-6 shadow-lg">
            <img src="https://via.placeholder.com/400" alt="Project" className="rounded mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-brand1">Project Title</h3>
            <p className="mb-4">A short description of the project, the technologies used, and what problem it solves.</p>
            <a href="#" className="text-brand1 hover:underline">View Project</a>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
