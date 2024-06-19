import React from 'react';
import skillsData from './About.json';
import './About.css';

const About = () => {
  return (
    <div className='about'>
      <h2 className='about-title'>About</h2>
      <h2 className='about-title'>Skills</h2>
      <div className='resume-download'>
        <a href='../../assets/catherine-komi-cv.pdf' download>
          <button className='download-button'>Download Resume</button>
        </a>
      </div>
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
