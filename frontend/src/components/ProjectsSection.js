import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectsSection = () => {
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
    <section id="projects" className="bg-bg2 text-white py-16 md:px-12 px-6 relative overflow-hidden">
      {/* Light blue-green triangle pattern background on the left */}
      <div className="absolute left-0 top-0 w-1/3 h-full pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <polygon points="0,0 100,0 0,100" fill="url(#grad2)" />
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#00FFD1', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#00A3FF', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto relative">
        <h2 className="text-3xl font-regular text-bg1 mb-12 text-left border-b-2 border-bg1 pb-4">Projects</h2>
        <div className="flex flex-col gap-12">
          {projects
            .filter((project) => project.is_featured) // Only display featured projects
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .map((project) => (
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
                        <button
                          onClick={() => window.location.href = '/projects'}
                          className="bg-brand1 text-bg1 font-bold px-3 py-3 rounded-lg hover:bg-brand2 transition duration-300 ease-in-out"
                        >
                          View All Projects
                        </button>
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

export default ProjectsSection;
