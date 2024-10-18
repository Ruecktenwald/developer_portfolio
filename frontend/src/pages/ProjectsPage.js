import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/projects/');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  return (
    <section className="bg-bg1 text-white py-20 px-6">
      <div className="container mx-auto">
        {!selectedProject ? (
          <>
            <h2 className="text-4xl font-bold text-brand1 mb-10">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-bg2 p-6 rounded-lg cursor-pointer hover:shadow-xl transition-transform transform hover:-translate-y-1"
                  onClick={() => handleProjectClick(project)}
                >
                  <img
                    src={project.images.length > 0 ? project.images[0] : 'https://via.placeholder.com/640x360'}
                    alt={project.title}
                    className="rounded-t-lg w-full h-40 object-cover mb-4"
                  />
                  <div className="p-4">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="bg-bg2 p-6 rounded-lg">
            <button
              className="bg-brand1 hover:bg-brand2 text-bg1 font-bold py-2 px-4 rounded mb-6"
              onClick={handleBackToProjects}
            >
              Back to Projects
            </button>
            <h2 className="text-4xl font-bold mb-4">{selectedProject.title}</h2>
            <p className="mb-6">{selectedProject.description}</p>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Technologies Used</h3>
              <p>{selectedProject.technologies}</p>
            </div>
            {selectedProject.videos.length > 0 ? (
              <video controls className="w-full rounded mb-4">
                <source src={selectedProject.videos[0]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={selectedProject.images.length > 0 ? selectedProject.images[0] : 'https://via.placeholder.com/640x360'}
                alt={selectedProject.title}
                className="rounded mb-4 w-full"
              />
            )}
            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand1 hover:bg-brand2 text-bg1 font-bold py-3 px-6 rounded inline-flex items-center"
              >
                View Project
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
