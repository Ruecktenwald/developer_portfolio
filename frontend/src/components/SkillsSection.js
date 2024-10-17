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
              
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" />
          
            </div>
            <p>Django</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="FastAPI" className="w-full h-full" />
            </div>
            <p>FastAPI</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-full h-full" />
            </div>
            <p>PostgreSQL</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-full h-full" />
            </div>
            <p>Docker</p>
          </div>
          {/* Frontend Technologies */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-full h-full" />
            </div>
            <p>HTML5</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-full h-full" />
            </div>
            <p>Figma</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-full h-full" />
            </div>
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" className="w-full h-full" />
            </div>
            <p>React.js</p>
          </div>
          {/* Full-Stack and DevOps */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-full h-full" />
            </div>
            <p>Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-full h-full" />
            </div>
            <p>Python</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="w-full h-full" />
            </div>
            <p>SQL</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-full h-full" />
            </div>
            <p>Git</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
