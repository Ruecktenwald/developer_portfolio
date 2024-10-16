import React from 'react';

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-bg1 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-brand1">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Backend Technologies */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-brand1 rounded-full flex items-center justify-center mb-4">
              <i className="devicon-django-plain colored text-4xl"></i>
            </div>
            <p className="font-semibold">Django</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-brand1 rounded-full flex items-center justify-center mb-4">
              <i className="devicon-fastapi-plain colored text-4xl"></i>
            </div>
            <p className="font-semibold">FastAPI</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-brand1 rounded-full flex items-center justify-center mb-4">
              <i className="devicon-postgresql-plain colored text-4xl"></i>
            </div>
            <p className="font-semibold">PostgreSQL</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-brand1 rounded-full flex items-center justify-center mb-4">
              <i className="devicon-docker-plain colored text-4xl"></i>
            </div>
            <p className="font-semibold">Docker</p>
          </div>
          {/* Frontend Technologies */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-brand1 rounded-full flex items-center justify-center mb-4">
              <i className="devicon-html5-plain colored text-4xl"></i>
            </div>
            <p className="font-semibold">HTML5</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-brand1 rounded-full flex items-center justify-center mb-4">
              <i className="devicon-css3-plain colored text-4xl"></i>
            </div>
            <p className="font-semibold">CSS3</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-brand1 rounded-full flex items-center justify-center mb-4">
              <i className="devicon-javascript-plain colored text-4xl"></i>
            </div>
            <p className="font-semibold">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-brand1 rounded-full flex items-center justify-center mb-4">
              <i className="devicon-react-original colored text-4xl"></i>
            </div>
            <p className="font-semibold">React.js</p>
          </div>
          {/* Full-Stack and DevOps */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-brand1 rounded-full flex items-center justify-center mb-4">
              <i className="devicon-nodejs-plain colored text-4xl"></i>
            </div>
            <p className="font-semibold">Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-brand1 rounded-full flex items-center justify-center mb-4">
              <i className="devicon-python-plain colored text-4xl"></i>
            </div>
            <p className="font-semibold">Python</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-brand1 rounded-full flex items-center justify-center mb-4">
              <i className="devicon-mysql-plain colored text-4xl"></i>
            </div>
            <p className="font-semibold">SQL</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-brand1 rounded-full flex items-center justify-center mb-4">
              <i className="devicon-git-plain colored text-4xl"></i>
            </div>
            <p className="font-semibold">Git</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
