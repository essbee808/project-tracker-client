export const projectsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_PROJECTS':
            return action.payload
        
        case 'ADD_PROJECT':
            debugger
            return state;
        
        default:
            return state;
    }
}