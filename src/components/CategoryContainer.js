import React, { Component } from 'react';
import Category from './Category';
import {connect} from 'react-redux';
import {fetchProjects} from '../actions/projectsActions';

class CategoryContainer extends Component {

    componentDidMount() {
        this.props.fetchProjects();
    }
    
    render() {   

        return (
            <div>
                <Category projects={this.props.projects}/>         
                {/* <Category /> */}
        
            </div>
        );
    }
}

const mapStateToProps = (state) => ({projects: state.projects})

const mapDispatchToProps = {
    fetchProjects
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);