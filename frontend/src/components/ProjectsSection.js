import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectsSection = () => {
  const [featuredProject, setFeaturedProject] = useState(null);

  useEffect(() => {
    const fetchFeaturedProject = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/featured-project/');
        setFeaturedProject(response.data);
      } catch (error) {
        console.error("Error fetching featured project:", error);
      }
    };

    fetchFeaturedProject();
  }, []);

  return (
    <section id="projects" className="bg-bg2 text-white md:px-12 py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-brand1  mb-10">Recent Project</h2>
        {featuredProject ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-bg1 p-8 rounded-lg shadow-lg">
            <div className="relative cursor-pointer" onClick={() => window.location.href = '/projects'}>
              <img
                src={featuredProject.images && featuredProject.images.length > 0 ? `http://127.0.0.1:8000${featuredProject.images[0].file}` : 'https://via.placeholder.com/640x360'}
                alt={featuredProject.title}
                className="w-full rounded-lg mb-4 object-cover"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/640x360'; }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-white text-xl font-bold">View Project</span>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-brand1 mb-4">{featuredProject.title}</h3>
              <p className="text-lg mb-6 text-gray-300">{featuredProject.description}</p>
            </div>
          </div>
        ) : (
          <p>Loading featured project...</p>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
