import React from 'react';
import skillsData from './About.json';
import './About.css';

const About = () => {
  return (
    <div className='about'>
      <h2 className='about-title'>About</h2>
      <p>Hi, I'm Catherine!</p>
      <p>
        I am an experienced Software Engineer specializing in frontend
        development and UI/UX design. With a strong background in enhancing user
        engagement and delivering scalable web applications, I thrive in
        dynamic, cross-functional teams. My expertise spans a variety of
        technologies including JavaScript, TypeScript, React, and Node.js, among
        others.
      </p>
      <div className='resume-download'>
        <a href='../../assets/catherine-komi-cv.pdf' download>
          <button className='download-button'>Download Resume</button>
        </a>
      </div>
      <h2 className='about-title'>Skills</h2>
      {skillsData.skillsData.map((category, index) => (
        <div key={index} className='skill-category'>
          <h4 className='category-title'>{category.category}</h4>
          <div className='skills-list'>
            {category.skills.map((skill, idx) => (
              <div key={idx} className='skill-item'>
                <img
                  alt=''
                  src={require(`../../assets/${skill.image}`)}
                  className='skill-image'
                />
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
