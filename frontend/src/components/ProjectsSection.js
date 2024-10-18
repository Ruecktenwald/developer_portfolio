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
    <section id="projects" className="bg-bg2 text-white py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-brand1 mb-10">Recent Project</h2>
        {featuredProject ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-bg1 p-8 rounded-lg shadow-lg">
            <div>
            <img
  src={featuredProject.images && featuredProject.images.length > 0 ? `http://127.0.0.1:8000${featuredProject.images[0].file}` : 'https://via.placeholder.com/640x360'}
  alt={featuredProject.title}
  className="w-full rounded-lg mb-4 object-cover"
  onError={(e) => { e.target.src = 'https://via.placeholder.com/640x360'; }}
/>

              
            </div>
            <div>
              <h3 className="text-3xl font-bold text-brand1 mb-4">{featuredProject.title}</h3>
              <p className="text-lg mb-6">{featuredProject.description}</p>
            </div>
            <div className="text-center mt-16">
          <a href="/projects" className="bg-brand1 hover:bg-brand2 text-bg1 font-bold py-3 px-6 rounded inline-flex items-center">
            View Projects
          </a>
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
