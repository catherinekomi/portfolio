import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Header from './components/Header/Header';
import About from './components/About/About';
import PersonalProjects from './components/PersonalProjects/PersonalProjects';
import WorkProjects from './components/WorkProjects/WorkProjects';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
// CSS
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <main>
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/personal-projects' element={<PersonalProjects />} />
            <Route path='/work-projects' element={<WorkProjects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/' element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
