import React from 'react';
import {useParams} from 'react-router-dom';
import ProjectsForm from './ProjectsForm';

const CategoryShow = () => {
  const { id } = useParams();

    return (
        <>
          <div className="content">
            Category Show Page
            <ProjectsForm />
          </div>
        </>
    );
};

export default CategoryShow;
