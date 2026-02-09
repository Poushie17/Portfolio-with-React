import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
     
      <div className="projects-section">
        <h1>Projects</h1>
        <div className="project">
          <h3>1st Year Project: Last Minute Note</h3>
          <p>
            A terminal-based application in C for managing lecture notes. 
            Features include paginated reading, search functionality, and adding personal notes to text files.
          </p>
        </div>
        <div className="project">
          <h3>2nd Year Project: ProScribe</h3>
          <p>
            A Java + MySQL automated document generator for creating CVs and formal letters. 
            Reduces manual work and ensures well-formatted professional documents.
          </p>
        </div>
        <div className="project">
          <h3>Hackathon Project: SkillConnect</h3>
          <p>
            A platform connecting students for skill-sharing and tutoring. 
            Built to allow students to offer services flexibly and earn side income.
          </p>
        </div>
      </div>

  );
};

export default Skills;
