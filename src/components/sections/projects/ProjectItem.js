import React from 'react';
import './ProjectItem.css';
const ProjectItem = props => {
  // useEffect(() => {
  //   projects(props);
  // }, [props]);
  console.log(props.name);
  return (
    <div className='card'>
      <div className='img-container'>
        <img alt={props.name} src={props.image} />
      </div>
      <div className='content'>
        <ul>
          <li>
            <strong>Project:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectItem;
