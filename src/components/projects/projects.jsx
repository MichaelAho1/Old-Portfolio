import React from 'react';
import './projects.css';
import klowBitesImg from './assets/KLowBites-img.png';
import stockSimImg from './assets/Stock-Sim-img.png';
import morningFlowImg from './assets/MorningFlow-img.png';
import sortResearchImg from './assets/SortReasearch-img.png';
import huffmanImg from './assets/huffmanZipping-img.png';
import htmlIcon from '../assets/html.png';
import jsIcon from '../assets/javascript.png';
import reactIcon from '../assets/react.png';
import javaIcon from '../assets/java.png';
import gitIcon from '../assets/git.png';


function Projects() {
  return (
    <div id="Projects">
      <h1 id="header">💡 Projects</h1>
      <div className="projectContainer">
        
        <div className="project-card">
          <img src={klowBitesImg} alt="KLowBites Project" width="100px" height="100px" />
          <h3 className="project-header">KLowBites</h3>
          <div className="tech-used">
            <span>Java</span>
            <img src={javaIcon} />
          </div>
          <div className="tech-used">
            <span>Git</span>
            <img src={gitIcon} />
          </div>
          <div className="tech-used">
            <span>ScrumBoard</span>
          </div>
          <p className="project-description">
            An interactive digital cookbook that allows users to manage and share recipes.
          </p>
          <div>
            <a href="https://github.com/MichaelAho1/KLowBites1" className="btn">
              View Code
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={stockSimImg} alt="Stock Market Simulator" width="100px" height="100px" />
          <h3 className="project-header">Stock Market Simulator</h3>
          <div className="tech-used">
            <span>JavaScript</span>
            <img src={jsIcon} />
          </div>
          <div className="tech-used">
            <span>HTML/CSS</span>
            <img src={htmlIcon} />
          </div>
          <p className="project-description">
            An engaging stock market simulator for learning trading and portfolio management.
          </p>
          <div>
            <a href="https://github.com/MichaelAho1/Stock-Market-Simulator" className="btn">
              View Code
            </a>
            <a href="https://michaelaho1.github.io/Stock-Market-Simulator/" className="btn">
              View Website
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={morningFlowImg} alt="MorningFlow Project" width="100px" height="100px" />
          <h3 className="project-header">MorningFlow</h3>
          <div className="tech-used">
            <span>React</span>
            <img src={reactIcon} />
          </div>
          <div className="tech-used">
            <span>JavaScript</span>
            <img src={jsIcon} />
          </div>
          <p className="project-description">
            A productivity app delivering consolidated updates like weather, Bible verses, and stock info.
          </p>
          <div>
            <a href="https://github.com/MichaelAho1/Morning-Project" className="btn">
              View Code
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={sortResearchImg} alt="Sorting Research Project" width="100px" height="100px" />
          <h3 className="project-header">Improved Sorting</h3>
          <div className="tech-used">
            <span>Java</span>
            <img src={javaIcon} />
          </div>
          <p className="project-description">
            Utilized existing sorting algorithms to create 
            improved versions of quick sort and merge sort.
          </p>
          <div>
            <a href="https://github.com/MichaelAho1/SortingResearch" className="btn">
              View Code
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={huffmanImg} alt="Huffman Coding Project" width="100px" height="100px" />
          <h3 className="project-header">Huffman Coding</h3>
          <div className="tech-used">
            <span>Java</span>
            <img src={javaIcon} />
          </div>
          <p className="project-description">
            Implemented file encoding and decoding with Huffman compression techniques.
          </p>
          <div>
            <a href="https://github.com/MichaelAho1/Huffman-Coding" className="btn">
              View Code
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;