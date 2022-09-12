export const fetchCategories = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/categories')
        .then(resp => resp.json())
        .then((responseCategories) => dispatch({type: 'FETCH_CATEGORIES', payload: responseCategories}))
    }
}