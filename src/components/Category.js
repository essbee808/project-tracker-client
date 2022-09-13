import React from 'react';
import {useLocation} from 'react-router-dom';
import ProjectsContainer from './ProjectsContainer';

const Category = () => {

  const location = useLocation();
  const {name, category_id} = location.state;
  
  return (
    <div>
      <h1>{name}</h1>
      <ProjectsContainer category_id={category_id}/>
    </div>
  );
};

export default Category;