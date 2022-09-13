import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';

import Category from './Category';
import CategoriesContainer from '../components/CategoriesContainer';
import ProjectsContainer from '../components/ProjectsContainer';

const Router = () => {
    return (
       <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='/categories/*' element={<CategoriesContainer />}/>
          <Route path='/categories/:categoryId' element={<Category/>}/>
               {/* <Route path='categories/:categoryId/projects' element={<Category />}/> */}
   
          {/* <Route path="/categories/*" element={<CategoriesContainer/>}/> */}
          <Route path="/projects" element={<ProjectsContainer />}/>
       </Routes>
    );
};

export default Router;