import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

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

  return (
    <section className="bg-bg1 text-white py-16 md:px-12 px-6 relative">
      {/* Light blue-green gradient background similar to Hero section */}
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-br from-blue-300 to-green-200 opacity-20 z-0 pointer-events-none"></div>
      {/* Vignette effect around the background */}
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black opacity-30 z-0 pointer-events-none"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-light text-brand1 mb-12 text-left border-b-2 border-brand1 pb-4">Projects</h2>
        <div className="flex flex-col gap-12">
          {projects.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map((project) => (
            <div key={project.id} className="bg-bg2 rounded-lg overflow-hidden shadow-lg p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img
                    src={project.images && project.images.length > 0 ? project.images[0] : 'https://via.placeholder.com/480x480'}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  {project.link && (
                    <div className="mt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand2 text-brand1 font-bold inline-flex items-center"
                      >
                        View Project
                      </a>
                    </div>
                  )}
                </div>
                <div className="md:w-2/3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-4xl font-regular text-brand1 mb-4">{project.title}</h3>
                    <p className="text-lg mb-4 text-gray-300">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="text-2xl font-bold text-brand1 mb-2">Technologies Used</h4>
                      <p className="text-md text-gray-300">{project.technologies}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
