export const fetchCategories = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/categories')
        .then(resp => resp.json())
        .then((responseCategories) => dispatch({type: 'FETCH_CATEGORIES', payload: responseCategories}))
    }
}

export const fetchCategory = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/categories/${id}`)
        .then(resp => resp.json())
        .then((category) => dispatch({type: 'FETCH_CATEGORY_PROJECTS', payload: category}))
    }
}

