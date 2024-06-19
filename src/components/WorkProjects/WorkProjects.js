import React from 'react';
import workProjectsData from './WorkProjects.json';
import './WorkProjects.css';

const WorkProjects = () => {
  return (
    <section id='work-projects'>
      <h2>Work Projects</h2>
      <ul className='projects-list'>
        {workProjectsData.map((project, index) => (
          <li key={index} className='project-item'>
            <img
              src={require(`../../assets/${project.image}`)}
              alt={project.title}
              className='project-image'
            />
            <div className='project-details'>
              <h3>{project.title}</h3>
              <p>{project.overview}</p>
              <p>
                Link:
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {project.link}
                </a>
              </p>
              <p>{project.details}</p>
              <ul>
                {project.tasks &&
                  project.tasks.map((task, i) => <li key={i}>{task}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WorkProjects;
