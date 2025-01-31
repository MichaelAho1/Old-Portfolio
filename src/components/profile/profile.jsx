import React from 'react';
import './profile.css';
import headshot from '../assets/headshot.jpeg';
import githubLogo from '../assets/GitHub-Logo.png';
import htmlIcon from '../assets/html.png';
import jsIcon from '../assets/javascript.png';
import reactIcon from '../assets/react.png';
import pythonIcon from '../assets/python.png';
import javaIcon from '../assets/java.png';
import cIcon from '../assets/c.png';
import wordpressIcon from '../assets/wordpress.png';
import gitIcon from '../assets/git.png';

function Profile() {
  return (
    <>
      <div className="contact">
        <img
          id="headshot"
          src={headshot}
          alt="Michael Aho"
        />
        <h1 id="name">Michael Aho</h1>
        <label id="description">
          Computer Science @ JMU <br />
          Full-stack developer
        </label>
        <div id="links">
          <a
            id="linkedIn"
            href="https://www.linkedin.com/in/michael-aho-41844a291"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn Profile"
              width="40px"
            />
          </a>
          <a
            id="gmail"
            href="mailto:michael.aho84@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://th.bing.com/th/id/OIP.N3cFVgAShuhUnvU-yBB12AHaEK?rs=1&pid=ImgDetMain"
              alt="Email link"
              width="40px"
            />
          </a>
          <a
            id="github"
            href="https://github.com/MichaelAho1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubLogo}
              alt="GitHub"
              width="40px"
            />
          </a>
        </div>
      </div>

      <div className="About">
        <h3 id="head3">About Me</h3>
        <div className="about-container">
          <div className="section-group">
            <h4>💻Technologies</h4>
            <div className="tech-items">
              <div className="tech-item">
                <img src={htmlIcon} alt="HTML/CSS icon" />
                <span>HTML/CSS</span>
              </div>
              <div className="tech-item">
                <img src={jsIcon} alt="JavaScript icon" />
                <span>JavaScript</span>
              </div>
              <div className="tech-item">
                <img src={reactIcon} alt="React icon" />
                <span>React</span>
              </div>
              <div className="tech-item">
                <img src={pythonIcon} alt="Python icon" />
                <span>Python</span>
              </div>
              <div className="tech-item">
                <img src={javaIcon} alt="Java icon" />
                <span>Java</span>
              </div>
              <div className="tech-item">
                <img src={cIcon} alt="C icon" />
                <span>C</span>
              </div>
              <div className="tech-item">
                <img src={wordpressIcon} alt="WordPress icon" />
                <span>WordPress</span>
              </div>
              <div className="tech-item">
                <img src={gitIcon} alt="Git icon" />
                <span>Git</span>
              </div>
            </div>
          </div>

          <div className="section-group">
            <h4>🌟Interests</h4>
            <div className="tech-items">
              <div className="tech-item">
                <span>🏋️ Lifting</span>
              </div>
              <div className="tech-item">
                <span>⛷️ Skiing</span>
              </div>
              <div className="tech-item">
                <span>📈 Stocks</span>
              </div>
              <div className="tech-item">
                <span>⛳ Golf</span>
              </div>
              <div className="tech-item">
                <span>🎨 UI/UX Design</span>
              </div>
              <div className="tech-item">
                <span>🔧 Full-Stack Development</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Profile;