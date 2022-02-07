// React
import React from 'react';

// Styles
import './about.styles.scss';

// Animation On Scroll
import 'aos/dist/aos.css';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faHtml5, faJs, faPhp, faReact, faSass, faBootstrap, faNode, faNpm, faWordpress, faGithub, faLinkedin, faStripe, faGitAlt, faConnectdevelop } from '@fortawesome/free-brands-svg-icons';

const About = ({aboutRef, menuBottom}) => (
  
  <section className="about">
  <div ref={aboutRef} className={`${menuBottom ? 'about-anchor-none' : 'about-anchor'}`} />
    <h2 className="title" data-aos="fade-down">About</h2>
    <div className="bio" data-aos="fade-right">
      <a className="bio-image-background" href="https://www.linkedin.com/in/quentinneal/" target="_blank" tabIndex="-1" rel="noopener noreferrer">
        <img className="bio-image" alt="" loading="lazy"/> {/* redesign to add alt text */}
        <div className="color-overlay">
          <FontAwesomeIcon className="fa-fw" icon={faLinkedin} />
        </div>
      </a>
      <div className="bio-description">
      <p>I'm a self-taught web developer that specializes in building frontend web applications.
      My primary fundamental experience is in React, JavaScript, CSS, HTML and design principles. I also have previous exposure in PHP, Python and I've learned to build themes with WordPress.</p>
      <p>A strong aspect of my personality is to solve problems. I like to push boundaries of what a website is supposed to be and discover unique ways to find solutions. I enjoy building and experimenting on interfaces, animations and web features.</p>
      <p>My hospitality and retail experience along with traveling have given me plenty of opportunities to understand and work with different types of people.</p>
      <p>My current plans are to enter the industry as a Frontend Engineer/Full Stack Engineer.</p>

      
      </div>
    </div>
    <div className="skills" data-aos="fade-left">
      <ul className="skills-list">
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faHtml5} /><span>HTML5</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faCss3Alt} /><span>CSS3</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faJs} /><span>Javascript</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faPhp} /><span>PHP</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faWordpress} /><span>Wordpress</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faReact} /><span>React</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faConnectdevelop} /><span>Redux</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faConnectdevelop} /><span>Firebase</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faConnectdevelop} /><span>Router</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faStripe} /><span>Stripe</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faSass} /><span>Sass</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faBootstrap} /><span>Bootstrap</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faNode} /><span>Node.js</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faNpm} /><span>Npm</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faGithub} /><span>Github</span></li>
        <li className="skill-item"><FontAwesomeIcon className="fa-fw" icon={faGitAlt} /><span>Git</span></li>
      </ul>
    </div>
  </section>
);

export default About;