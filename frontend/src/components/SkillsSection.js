import React, { useState } from 'react';
import Modal from './Modal';

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const skills = [
    {
      name: 'PostgreSQL',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      description: {
        what: 'A powerful, open-source object-relational database system.',
        why: 'Used for efficient data storage and complex queries in web applications.',
        how: 'I use PostgreSQL to manage backend databases in full-stack projects.'
      }
    },
    {
      name: 'Django',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
      description: {
        what: 'A high-level Python web framework.',
        why: 'It allows for rapid development with clean, pragmatic design.',
        how: 'I use Django to build backend APIs and manage server-side logic.'
      }
    },
    {
      name: 'FastAPI',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      description: {
        what: 'A modern, fast web framework for building APIs with Python.',
        why: "It's highly efficient and easy to use for building REST APIs.",
        how: 'I use FastAPI to create performant APIs for my web applications.'
      }
    },
    {
      name: 'Node.js',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      description: {
        what: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
        why: 'Used to build scalable and efficient backend services.',
        how: 'I use Node.js to handle server-side logic and API endpoints.'
      }
    },
    {
      name: 'NextJS',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg',
      description: {
        what: 'A React-based framework for server-side rendering and static site generation.',
        why: 'Helps in creating fast and SEO-friendly web applications.',
        how: 'I use NextJS for building optimized front-end applications.'
      }
    },
    {
      name: 'Docker',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      description: {
        what: 'A platform for developing, shipping, and running applications in containers.',
        why: 'It simplifies application deployment by packaging code and dependencies together.',
        how: 'I use Docker to containerize my applications for consistent deployment.'
      }
    },
    {
      name: 'HTML5',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      description: {
        what: 'The standard markup language for creating web pages.',
        why: 'Essential for structuring content on the web.',
        how: 'I use HTML5 to create the structure and layout of my web applications.'
      }
    },
    {
      name: 'CSS3',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      description: {
        what: 'A style sheet language used for describing the presentation of a document written in HTML.',
        why: 'It enhances the visual appearance of web pages.',
        how: 'I use CSS3 to style and design responsive web applications.'
      }
    },
    {
      name: 'TailwindCSS',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      description: {
        what: 'A utility-first CSS framework for rapid UI development.',
        why: 'It provides pre-defined classes that help in building responsive interfaces quickly.',
        how: 'I use TailwindCSS to style my web applications in a consistent and efficient manner.'
      }
    },
    {
      name: 'Figma',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      description: {
        what: 'A cloud-based design tool for UI/UX design.',
        why: 'It allows collaborative design and prototyping.',
        how: 'I use Figma to create prototypes and design user interfaces.'
      }
    },
    {
      name: 'JavaScript',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      description: {
        what: 'A programming language used to create interactive effects within web browsers.',
        why: 'It adds interactivity to websites and is an essential part of front-end development.',
        how: 'I use JavaScript for adding interactive features and logic to my web applications.'
      }
    },
    {
      name: 'React.js',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      description: {
        what: 'A JavaScript library for building user interfaces.',
        why: 'It helps in building fast, scalable, and simple front-end applications.',
        how: 'I use React.js to build interactive UIs for my projects.'
      }
    },
    {
      name: 'Python',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      description: {
        what: 'A high-level programming language known for its readability and versatility.',
        why: 'It is used for backend development, data analysis, and automation.',
        how: 'I use Python for backend scripting, API development, and automation tasks.'
      }
    },
    {
      name: 'SQL',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      description: {
        what: 'A standard language for accessing and manipulating databases.',
        why: 'It allows efficient querying, updating, and management of data.',
        how: 'I use SQL to interact with relational databases and perform data operations.'
      }
    },
    {
      name: 'ViteJS',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
      description: {
        what: 'A build tool that aims to provide a faster and leaner development experience for modern web projects.',
        why: 'It provides fast hot module replacement and optimized builds.',
        how: 'I use ViteJS for rapid development and building efficient front-end applications.'
      }
    },
    {
      name: 'Git',
      imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      description: {
        what: 'A distributed version control system for tracking changes in source code.',
        why: 'It allows collaboration and maintains a history of project versions.',
        how: 'I use Git to manage my codebase and collaborate with other developers.'
      }
    }
  ];

  return (
    <section id="skills" className="bg-bg1 text-white py-20 ">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-brand1 text-left px-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-mono font-medium">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center" onClick={() => handleSkillClick(skill)}>
              <div className="w-16 h-16 flex items-center justify-center mb-4 cursor-pointer">
                <img src={skill.imgSrc} alt={skill.name} className="w-full h-full" />
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedSkill && (
           <Modal title={selectedSkill.name} onClose={() => setIsModalOpen(false)}>
           <div className="flex justify-end items-center mb-6">
             <img src={selectedSkill.imgSrc} alt={selectedSkill.name} className="w-16 h-16 mr-4" />
             <h2 className="text-2xl font-bold">{selectedSkill.name}</h2>
           </div>
           <h3 className="text-2xl font-bold mb-4">What is it?</h3>
           <p className="mb-4">{selectedSkill.description.what}</p>
           <h3 className="text-2xl font-bold mb-4">Why do I use it?</h3>
           <p className="mb-4">{selectedSkill.description.why}</p>
           <h3 className="text-2xl font-bold mb-4">How do I use it?</h3>
           <p>{selectedSkill.description.how}</p>
         </Modal>
      )}
    </section>
  );
};

export default SkillsSection;