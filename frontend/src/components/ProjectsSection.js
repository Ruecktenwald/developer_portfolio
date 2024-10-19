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
        <h2 className="text-4xl font-thin text-brand1 mb-10">Recent Project</h2>
        {featuredProject ? (
          <div className="bg-bg1 rounded-lg overflow-hidden shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src={featuredProject.images && featuredProject.images.length > 0 ? `http://127.0.0.1:8000${featuredProject.images[0].file}` : 'https://via.placeholder.com/640x360'}
                  alt={featuredProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/640x360'; }}
                />
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => window.location.href = '/projects'}
                    className="bg-brand1 text-bg1 font-bold px-6 py-3 rounded-lg hover:bg-brand2 transition duration-300 ease-in-out">
                    View Projects
                  </button>
                </div>
              </div>
              <div className="md:w-2/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-brand1 mb-4">{featuredProject.title}</h3>
                  <p className="text-lg mb-6 text-gray-300">{featuredProject.description}</p>
                </div>
              </div>
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
