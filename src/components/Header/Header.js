import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('about');
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.substring(1) || 'about';
    setActiveLink(currentPath);
  }, [location]);

  return (
    <header className='header'>
      <h1>Catherine Komi</h1>
      <nav>
        <ul>
          <li>
            <Link
              to='/about'
              className={`nav-link ${
                activeLink === 'about' ? 'active-link' : ''
              }`}
              onClick={() => setActiveLink('about')}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='/experience'
              className={`nav-link ${
                activeLink === 'experience' ? 'active-link' : ''
              }`}
              onClick={() => setActiveLink('experience')}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to='/personal-projects'
              className={`nav-link ${
                activeLink === 'personal-projects' ? 'active-link' : ''
              }`}
              onClick={() => setActiveLink('personal-projects')}
            >
              Personal Projects
            </Link>
          </li>
          <li>
            <Link
              to='/work-projects'
              className={`nav-link ${
                activeLink === 'work-projects' ? 'active-link' : ''
              }`}
              onClick={() => setActiveLink('work-projects')}
            >
              Work Projects
            </Link>
          </li>
          <li>
            <Link
              to='/contact'
              className={`nav-link ${
                activeLink === 'contact' ? 'active-link' : ''
              }`}
              onClick={() => setActiveLink('contact')}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
