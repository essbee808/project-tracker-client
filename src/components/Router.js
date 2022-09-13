import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import CategoryShow from './CategoryShow';

import CategoriesContainer from '../components/CategoriesContainer';
import ProjectsContainer from '../components/ProjectsContainer';

const Router = () => {
    return (
       <Routes>
         <Route path="/categories/:id" element={<CategoryContainer />}/>
         <Route path="/categories/*" element={<CategoriesContainer/>}/>
         <Route exact path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>
       </Routes>
    );
};

export default Router;