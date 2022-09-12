export const categoriesReducer = (state = [], action) => {
    debugger
    switch(action.type) {
        case 'FETCH_CATEGORIES':
            debugger
            return action.payload
        
        default:
            return state;
    }
}