import React, { Component } from 'react';
import Category from './Category';
import ProjectsForm from './ProjectsForm';
import {connect} from 'react-redux';
import {addProject} from '../actions/projectsActions';

class CategoryContainer extends Component {
    
    componentDidMount() {
        // console.log("Component Did Mount")
    }

    render() {

        return (
            <div>
                <Category addProject={this.props.addProject}/>
                
                {/* <ProjectsForm category_id={id}/> */}
                {/* render all projects associated with category */}
            </div>
        );
    }
}

const mapDispatchToProps = {
    addProject
}

export default connect(null, mapDispatchToProps)(CategoryContainer);