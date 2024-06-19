import React from 'react';
import projectsData from './PersonalProjects.json';
import './PersonalProjects.css';

const PersonalProjects = () => {
  return (
    <section id='projects'>
      <h2>Personal Projects</h2>
      <ul className='projects-list'>
        {projectsData.map((project, index) => (
          <li key={index} className='project-item'>
            {project.image && (
              <img
                src={require(`../../assets/${project.image}`)}
                alt={project.title}
                className='project-image'
              />
            )}
            <div className='project-details'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.technology}</p>
              <ul className='actions'>
                {project.previewLink && (
                  <li>
                    <a
                      href={project.previewLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='button primary'
                    >
                      {project.previewText}
                    </a>
                  </li>
                )}
                {project.githubLink && (
                  <li>
                    <a
                      href={project.githubLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='button primary'
                    >
                      GitHub
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PersonalProjects;
