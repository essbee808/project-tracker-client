export const projectsReducer = (state = [], action) => {
  
    switch(action.type) {
        case 'FETCH_PROJECTS':
            return action.payload
        
        case 'ADD_PROJECT':
            debugger
            const project = { name: action.payload.name, objective: action.payload.objective, why: action.payload.why, learn: action.payload.learn, category_id: action.payload.category.id}
         
            return [...state, project]

        default:
            return state;
    }
}