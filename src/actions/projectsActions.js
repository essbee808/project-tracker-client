export const fetchProjects = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/projects')
        .then(resp => resp.json())
        .then((responseProjects) => dispatch({type: 'FETCH_PROJECTS', payload: responseProjects}))
    }
}

// export const addProject = (project) => {
//     return dispatch => {
//         debugger
//         fetch('http://localhost:3000/')
//     }
// }

