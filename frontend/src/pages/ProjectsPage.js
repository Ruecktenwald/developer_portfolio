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
    <section className="bg-bg1 text-white py-16 px-6">
      <div className="container mx-auto">
        {!selectedProject ? (
          <>
            <h2 className="text-5xl font-regular text-brand1 mb-12 text-left">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-bg2 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-all transform hover:-translate-y-2 h-64 flex flex-col justify-between"
                  onClick={() => handleProjectClick(project)}
                >
                  <img
                    src={project.images && project.images.length > 0 ? project.images[0] : 'https://via.placeholder.com/480x480'}
                    alt={project.title}
                    className="w-full h-36 object-cover"
                  />
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-brand1 mb-4">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="bg-bg2 p-8 rounded-lg max-w-4xl mx-auto shadow-lg flex flex-col gap-6">
            <button
              className="bg-brand1 hover:bg-brand2 text-bg1 font-bold py-2 px-4 rounded self-start"
              onClick={handleBackToProjects}
            >
              Back to Projects
            </button>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <h2 className="text-4xl font-bold mb-4 text-brand1">{selectedProject.title}</h2>
                <p className="text-lg mb-4 text-gray-300">{selectedProject.description}</p>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2 text-brand1">Technologies Used</h3>
                  <p className="text-md text-gray-300">{selectedProject.technologies}</p>
                </div>
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand1 hover:bg-brand2 text-bg1 font-bold py-3 px-6 rounded inline-flex items-center mt-4"
                  >
                    View Project
                  </a>
                )}
              </div>
              <div className="md:w-1/3 flex-shrink-0">
                {selectedProject.videos && selectedProject.videos.length > 0 ? (
                  <video controls className="w-full rounded mb-4">
                    <source src={selectedProject.videos[0]} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={selectedProject.images && selectedProject.images.length > 0 ? selectedProject.images[0] : 'https://via.placeholder.com/480x480'}
                    alt={selectedProject.title}
                    className="rounded mb-4 w-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
