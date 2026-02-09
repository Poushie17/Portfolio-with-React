import React from 'react';
import profile from "../../assets/pp.jpeg";
import './About.css'; 

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className='about-section'>
        <div className="a-left">
          <img src={profile} alt="Profile" />
        </div>
        <div className="a-right">
          <div className="para">
            <p>
              I’m Poushie, a passionate Web Developer and CSE student from Bangladesh.
              I enjoy building web applications, learning new technologies, and creating projects
              that solve real-world problems.
            </p>
          </div>
          <div className="skills">
            <ul>
                <h1>Skills</h1>
              <li><strong>Frontend:</strong> React, HTML, CSS, JavaScript</li>
              <li><strong>Backend:</strong> Java, PHP, Python</li>
              <li><strong>Other:</strong> C, C++, SQL, Git</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
