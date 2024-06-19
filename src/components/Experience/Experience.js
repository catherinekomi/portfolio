import React from 'react';
import experienceData from './Experience.json';
import './Experience.css';

const Experience = () => {
  return (
    <div className='experience'>
      <h2>Experience</h2>
      {experienceData.experience.map((job, index) => (
        <div key={index} className='job'>
          <h3>
            {job.title} at {job.company}
          </h3>
          <p>{job.dates}</p>
          <ul>
            {job.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
      <h2>Education</h2>
      <ul>
        {experienceData.education.map((education, index) => (
          <li key={index}>{education}</li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
