import React from 'react';
import Projects from './Projects';
import './ProjectsSection.css';

const ProjectsSection = () => {
  return (
    <section>
      <section id='projects' className=' section-content'>
        <div className='section-title'>
          <h3 className='title-h3'>Projects</h3>
          {/* <span><i className='fas fa-pencil-ruler title-icon'></i> </span>*/}
        </div>
        <div className='container'>
          <Projects />
        </div>
      </section>
    </section>
  );
};

export default ProjectsSection;
