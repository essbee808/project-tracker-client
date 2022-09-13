import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchProjects, addProject} from '../actions/projectsActions';

import ProjectsForm from './ProjectsForm';
import Project from './Project';
import Projects from './Project';

class ProjectsContainer extends Component {

    componentDidMount() {
        this.props.fetchProjects();
    }

    render() {
        console.log("Rendering Projects Container")
        const projectsLis = this.props.projects.map((project, index) => {
            return <li key={index}><Project {...project}/></li>
        })
        return (
            
            <div>
                <ProjectsForm addProject={this.props.addProject} category_id={this.props.category_id}/>
                <ul>
                  {projectsLis}
             
                </ul>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("Projects state:", state)
    debugger
    return {
        projects: state.projects,
    }
}

const mapDispatchToProps = {
    fetchProjects,
    addProject
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);