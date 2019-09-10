import React from 'react';
import './ProjectItem.css';
import { Link } from 'react-router-dom';
const ProjectItem = props => {
  return (
    <div>
      <div className='img-container'>
        <img alt={props.name} src={props.image} className='project-img' />
        <div className='img-overlay'>
          <div className='img-text'>{props.name}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
