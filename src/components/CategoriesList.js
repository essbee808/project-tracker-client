import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class CategoriesList extends Component {

    render() {
        const {categories} = this.props;
        const categoriesLis = categories.map((category) => {
    
            return (
                <li key={category.id}>
                    <Link to={`/categories/${category.id}`} state={{ name: category.name, id: category.id }}>{category.name}</Link>
                </li>
            )
        })

        return (
            <div>
                <ul>
                    {categoriesLis}
                </ul> 
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {categories: state.categories}
}

export default connect(mapStateToProps)(CategoriesList);