import React, { Component } from 'react';
import {connect} from 'react-redux';
import CategoryShow from './CategoryShow';
import {Routes, Route, Link} from 'react-router-dom';

class CategoriesList extends Component {

    render() {
        const {categories} = this.props;
        const categoriesLis = categories.map((category) => {
            return (
                <li key={category.id}>
                    <Link to={`/categories/${category.id}`}>{category.name}</Link>
                </li>
            )
        })

        return (
            <div>
                <ul>
                    {categoriesLis}
                    {/* {categories.map((category) => {
                        return (
                        //   <li key={category.id}>{category.name}</li>
                        <li key={category.id}>
                            <Link to={`/categories/${category.id}`} >{category.name}</Link>
                        </li>
                        
                    )})} */}
                </ul> 
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {categories: state.categories}
}

export default connect(mapStateToProps)(CategoriesList);