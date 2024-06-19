import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Contact.css';

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contact</h2>
      <p>You can reach out to me via:</p>
      <p> Email: catherinekomii@gmail.com</p>
      <ul className='icons'>
        <li>
          <a
            href='https://linkedin.com/in/catherine-komi'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedInIcon className='icon' />
            <span className='label'>LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href='https://github.com/catherinekomi'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHubIcon className='icon' />
            <span className='label'>GitHub</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
