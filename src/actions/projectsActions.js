export const fetchProjects = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/projects')
        .then(resp => resp.json())
        .then((responseProjects) => dispatch({type: 'FETCH_PROJECTS', payload: responseProjects}))
    }
}

export const addProject = (project) => {
    debugger
    return (dispatch) => {
        debugger
        fetch(`http://localhost:3000/projects`, {
            method: 'POST',
            body: JSON.stringify(project),
            headers: {'Content-Type' : 'application/json'}
        })
        .then(resp => resp.json())
        .then(project => console.log("Returned project", project))
    }
}

