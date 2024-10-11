import React from 'react';
import '../styles/hero/hero.css';      // Hero section styles
import '../styles/cards/card.css';     // Developer card styles
import '../styles/buttons/button.css'; // Button styles
import '../styles/icons/icon.css';     // Icon styles
import '../styles/mobile/mobile.css';  // Mobile specific styles
import { Download } from '@mui/icons-material'; // Icons for download button
import { ReactComponent as EmailIcon } from '../assets/icons/email_icon.svg'; // Custom Email Icon
import { ReactComponent as BriefcaseIcon } from '../assets/icons/icon-briefcase.svg'; // Custom Briefcase Icon
import { ReactComponent as LinkIcon } from '../assets/icons/icon-link.svg'; // Custom Link Icon
import { ReactComponent as MapPinIcon } from '../assets/icons/map_pin_icon.svg'; // Custom Map Pin Icon

const Home = () => {
  // Default avatar image URL (you can replace it with any other default avatar image)
  const defaultAvatar = 'https://via.placeholder.com/100'; // Placeholder for default avatar

  return (
    <section>
      <div className='hero-main'>
      <div className='title-container'><h1>Developer</h1></div>
    <div className="hero">  
      <div className="card-container">
        {/* Developer Card */}
        <div className="developer-card">
          <div className="card-image">
            <img src={defaultAvatar} alt="Peter's Profile" />
          </div>
          <h2>Peter</h2>
          <p>Full-stack Developer</p>
          <ul className="contact-info">
            <li><EmailIcon className="icon" /> ruecktenwald@gmail.com</li>
            <li><MapPinIcon className="icon" /> Boston</li>
            <li><BriefcaseIcon className="icon" /> Full-time / Freelancer</li>
          </ul>
          <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JS</span>
            <span>REACT</span>
          </div>
          <div className='download-cv-container'>
            <button className="download-cv">
              Download CV <Download />
            </button>
          </div>
        </div>

      

        {/* Right Developer Introduction */}
        <div className="hero-intro">
          <div class="html-code-flex">
            <pre className='html-code-display-h1'>&lt;h1&gt;</pre>
          </div>
          <h1>
            Hey <br />I’m Peter,<br />
            Full-Stack Developer
          </h1>
          <div class="html-code-flex">
            <pre className='html-code-display-h1'>&lt;/h1&gt;</pre>
          </div>
          <div class="html-code-flex">
            <pre className='html-code-display-p'>&lt;p&gt;</pre>
          </div>
          <p>
            I help businesses grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,
          </p>
          <div class="html-code-flex">
            <pre className='html-code-display-p'>&lt;/p&gt;</pre>
          </div>
          <div className="highlight">
            Let’s Talk <EmailIcon className="email-icon" />
          </div>
        </div>
          {/* New Card with numbers */}
          <div className="stats-card">
          <div className="stats-list">
            <li><span className="stat-number">6</span> Programming Languages</li>
            <li><span className="stat-number">9</span> Development Tools</li>
            <li><span className="stat-number">6</span> Years of Experience</li>
          </div>
        </div>
      </div> 
    </div>
    </div>
    </section>
  );
};

export default Home;
