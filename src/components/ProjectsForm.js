import React, { Component } from 'react';

class ProjectsForm extends Component {

    state = {
        name: '',
        objective: '',
        why: '',
        learn: '', 
        category_id: parseInt(this.props.category_id)
    }

    handleOnChange = (event) => {
        const value = event.target.value;
        // create dynamic key name in the object
        // merge state 
        this.setState({
            ...this.state,
            [event.target.name]: value
        });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
  
        this.props.addProject(this.state);
        // this.props.addProject({
        //     name: this.state.name,
        //     objective: this.state.objective,
        //     why: this.state.why,
        //     learn: this.state.learn,
        //     category_id: this.state.category_id
        // });
        this.setState({
            name: '',
            objective: '',
            why: '',
            learn: '', 
        })
    }
    
    render() {
    
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Add New Project Idea: </label>
                    <br/>
                    <label>Name: </label>
                    <input
                        type="text"
                        value={this.state.name}
                        name="name"
                        onChange={this.handleOnChange}/>
                    <br/>
                    <label>Objective: </label>
                    <input
                        type="text"
                        value={this.state.objective}
                        name="objective"
                        onChange={this.handleOnChange}/>
                    <br/>
                    <label>Why: </label>
                    <input
                        type="text"
                        value={this.state.why}
                        name="why"
                        onChange={this.handleOnChange}/>
                    <br />
                    <label>Technologies I need to learn: </label>
                    <input
                        type="text"
                        value={this.state.learn}
                        name="learn"
                        onChange={this.handleOnChange}/>
                    <br />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default ProjectsForm;