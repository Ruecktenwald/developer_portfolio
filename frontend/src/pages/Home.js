import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { GitHub, LinkedIn, Cloud, Storage, GetApp } from '@mui/icons-material';
import { ReactComponent as EmailIcon } from '../assets/icons/email_icon.svg'; // Custom Email Icon
import { ReactComponent as BriefcaseIcon } from '../assets/icons/icon-briefcase.svg'; // Custom Briefcase Icon
import { ReactComponent as MapPinIcon } from '../assets/icons/map_pin_icon.svg'; // Custom Map Pin Icon

const Home = () => {
  const typedElement = useRef(null);
  const navTypedElement = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["I'm a Full-Stack Web Developer crafting beautiful and impactful digital experiences. Let's build something amazing together!"],
      typeSpeed: 20,
      backSpeed: 25,
      startDelay: 1800,
      loop: false,
      showCursor: false,
      onComplete: () => {
        // Show the button after the typing is complete
        setShowButton(true);
       
      },
    });

    const navTyped = new Typed(navTypedElement.current, {
      strings: ["Ruecktenwald"],
      typeSpeed: 20,
      startDelay: 200,
      showCursor: true,
      cursorChar: '|',
      backSpeed: 0,
      loop: false,
      onComplete: () => {
        setShowContent(true);
        setTimeout(() => {
          const cursor = navTypedElement.current.nextSibling;
          if (cursor) {
            cursor.style.display = 'none';
          }
        }, 1000); // Delay of 1000 milliseconds (1 second)
      },
    });
    
    const cursorElement = document.querySelector('.typed-cursor');
      if (cursorElement) {
        cursorElement.classList.add('text-white', 'text-sm');
      }

    return () => {
      typed.destroy();
      navTyped.destroy();
    };
  }, []);

  return (
    <div className="font-ubuntu">
      {/* Header Navigation */}
      <header className="sticky top-0 left-0 w-full bg-bg1 bg-opacity-80 shadow-md backdrop-blur-md z-50">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-12">
          <div className="text-3xl font-bold">
            <span className="text-brand1 text-sm font-mono">C:/ </span><span ref={navTypedElement} className="text-white font-mono font-light text-sm"></span>
          </div>
          <ul className="hidden md:flex space-x-8 text-white">
            <li><a href="#about" className="hover:text-brand1 transition">About</a></li>
            <li><a href="#skills" className="hover:text-brand1 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-brand1 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-brand1 transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-bg2 text-white pt-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="max-w-xl text-left">
          <h1 className={`text-4xl font-bold mb-6 transition-opacity duration-1000 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>Hi, I'm Peter Ruecktenwald</h1>
            <p className="text-lg mb-6 font-mono">
              <span ref={typedElement}></span>
            </p>
            <button
              className={`bg-brand1 hover:bg-brand2 text-bg1 font-bold py-3 px-6 rounded transition-opacity duration-1000 ease-in-out inline-flex items-center ${showButton ? 'opacity-100' : 'opacity-0'}`}
            >
              Download CV <GetApp className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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

      {/* Projects Section */}
      <section id="projects" className="bg-bg2 text-white py-20">
        <div className="container mx-auto text-left">
          <h2 className="text-4xl font-bold mb-10 text-brand1">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Project Card */}
            <div className="project-card bg-bg1 rounded-lg p-6 shadow-lg">
              <img src="https://via.placeholder.com/400" alt="Project" className="rounded mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-brand1">Project Title</h3>
              <p className="mb-4">A short description of the project, the technologies used, and what problem it solves.</p>
              <a href="#" className="text-brand1 hover:underline">View Project</a>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-bg1 text-white py-20 ">
        <div className="container mx-auto text-left">
          <h2 className="text-4xl font-bold mb-10 text-brand1">Get In Touch</h2>
          <form className="max-w-lg space-y-6">
            <div>
              <input type="text" placeholder="Name" className="w-full p-4 rounded-lg bg-bg2 text-white outline-none focus:ring-2 focus:ring-brand1 transition" />
            </div>
            <div>
              <input type="email" placeholder="Email" className="w-full p-4 rounded-lg bg-bg2 text-white outline-none focus:ring-2 focus:ring-brand1 transition" />
            </div>
            <div>
              <textarea placeholder="Message" className="w-full p-4 rounded-lg bg-bg2 text-white outline-none focus:ring-2 focus:ring-brand1 transition h-32"></textarea>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
