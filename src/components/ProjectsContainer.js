import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addProject} from '../actions/projectsActions';
import { fetchCategory} from '../actions/categoriesActions';

import ProjectsForm from './ProjectsForm';
import Project from './Project';

class ProjectsContainer extends Component {

    componentDidMount() {
        this.props.fetchCategory(this.props.category_id);
    }

    render() {
        return (
            
            <div>
                <ProjectsForm addProject={this.props.addProject} category_id={this.props.category_id}/>
                <ul>
                  {this.props.projects?.map((project) => {
                    return <li key={project.id}><Project {...project}/></li>
                })}
                    
                </ul>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("Projects Container State:", state)

    return {
        projects: state.categories.projects
    }
}

const mapDispatchToProps = {
    fetchCategory,
    addProject
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);