import React, { Component } from 'react';
import {connect} from 'react-redux';
import Category from './Category';
import {Link} from 'react-router-dom';

class CategoriesList extends Component {

    render() {
        const {categories} = this.props;
        return (
            <div>
                <ul>
                    {categories.map((category) => {
                        return (
                        //   <li key={category.id}>{category.name}</li>
                        <Link to={`/categories/${category.id}`}>{category.name}</Link>
                    )})}
                </ul> 
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {categories: state.categories}
}

export default connect(mapStateToProps)(CategoriesList);