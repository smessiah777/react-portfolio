import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import projectsData from '../projects/Projects.json';
import './Projects.css';

class Projects extends Component {
  state = {
    projectsData
  };

  render() {
    return (
      <div className='projectsStyle'>
        {this.state.projectsData.map(project => (
          <ProjectItem
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
          />
        ))}
      </div>
    );
  }
}

export default Projects;
