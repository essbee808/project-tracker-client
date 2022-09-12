import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Category from '../components/Category';

import CategoriesContainer from '../components/CategoriesContainer';
import ProjectsContainer from '../components/ProjectsContainer';

const Router = () => {
    return (
       <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/categories" element={<CategoriesContainer />}/>
         <Route path="/categories/:id" element={<Category/>}/>
         <Route path="/projects" element={<ProjectsContainer/>} />
       </Routes>
    );
};

export default Router;