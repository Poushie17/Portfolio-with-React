import React from "react";
import './Page1.css'
import profile from "../../assets/pp.jpeg";

const Page1 = () => {
  return (
   <div className="page1">

     <div className="text-section">
       <p className="intro">Hello, I'm Poushie</p>
       <h1 className="title">Web Developer</h1>
       <p className="location">Based in Bangladesh</p>
       <button className="resume-btn">Resume</button>
     </div>

  
     <div className="photo-section">
       <img className="pp" src={profile} alt="Profile"/>
     </div>
   </div>
  );
};

export default Page1;
