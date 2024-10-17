import React from 'react';

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-bg1 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-brand1">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-mono font-medium">
          {/* Backend Technologies */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4 ">
              <i className="devicon-django-plain text-4xl"></i>
            </div>
            <p>Django</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <i className="devicon-fastapi-plain colored text-4xl"></i>
            </div>
            <p>FastAPI</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <i className="devicon-postgresql-plain colored text-4xl"></i>
            </div>
            <p>PostgreSQL</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <i className="devicon-docker-plain colored text-4xl"></i>
            </div>
            <p>Docker</p>
          </div>
          {/* Frontend Technologies */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <i className="devicon-html5-plain colored text-4xl"></i>
            </div>
            <p>HTML5</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <i className="devicon-figma-plain colored text-4xl"></i>
            </div>
            <p>Figma</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <i className="devicon-javascript-plain colored text-4xl"></i>
            </div>
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <i className="devicon-react-original colored text-4xl"></i>
            </div>
            <p>React.js</p>
          </div>
          {/* Full-Stack and DevOps */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <i className="devicon-nodejs-plain colored text-4xl"></i>
            </div>
            <p>Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <i className="devicon-python-plain colored text-4xl"></i>
            </div>
            <p>Python</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <i className="devicon-mysql-plain colored text-4xl"></i>
            </div>
            <p>SQL</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <i className="devicon-git-plain colored text-4xl"></i>
            </div>
            <p>Git</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
