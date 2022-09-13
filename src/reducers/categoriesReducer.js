export const categoriesReducer = (state = [], action) => {

    switch(action.type) {

        case 'FETCH_CATEGORIES':
            return action.payload

        case 'FETCH_CATEGORY_PROJECTS':
       
            return {...state, projects: action.payload.projects};
        
        case 'ADD_CATEGORY_PROJECT': 
            return {
                ...state,
                projects: [...state.projects, action.payload]
            }
 
        default:
            return state;
    }
}
