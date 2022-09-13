import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchCategories } from '../actions/categoriesActions';
import CategoriesList from './CategoriesList';
// import Category from './Category';

class CategoriesContainer extends Component {

    componentDidMount() {
        this.props.fetchCategories()
    }

    render() {
        return (
            <div>
               Categories Container
               <CategoriesList />
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {categories: state.categories}
// }

export default connect(null, {fetchCategories})(CategoriesContainer);