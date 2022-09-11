import { combineReducers } from 'redux';

import { categoriesReducer } from './categoriesReducer';
import { projectsReducer } from './projectsReducer';

export const rootReducer = combineReducers({
    categories: categoriesReducer,
    projects: projectsReducer
})