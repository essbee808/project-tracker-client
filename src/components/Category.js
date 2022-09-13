import React from 'react';
import {useParams, useLocation} from 'react-router-dom';
import ProjectsForm from './ProjectsForm';

const Category = (props) => {
  const { id } = useParams();
  const location = useLocation();
  const { name } = location.state;

    return (
        <>
          <div className="content">
            <h1>{name}</h1>
            <ProjectsForm addProject={props.addProject} category_id={id}/>
          </div>
        </>
    );
};

export default Category;
