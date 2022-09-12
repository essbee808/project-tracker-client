import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchCategories } from '../actions/categoriesActions';
import CategoriesList from './CategoriesList';

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

export default connect(null, {fetchCategories})(CategoriesContainer);