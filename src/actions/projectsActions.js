export const fetchProjects = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/projects')
        .then(resp => resp.json())
        .then((responseProjects) => dispatch({type: 'FETCH_PROJECTS', payload: responseProjects}))
    }
}

export const addProject = (project) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/categories/${project.category_id}/projects`, {
            method: 'POST',
            body: JSON.stringify(project),
            headers: {'Content-Type' : 'application/json'}
        })
        .then(resp => resp.json())
        .then(newProject => dispatch({type: 'ADD_CATEGORY_PROJECT', payload: newProject}))
    }
}

