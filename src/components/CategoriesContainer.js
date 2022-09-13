import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchCategories } from '../actions/categoriesActions';

import {Link} from 'react-router-dom';

class CategoriesContainer extends Component {

    componentDidMount() {
        console.log("Categories Container Mounted")
        this.props.fetchCategories()
    }

    render() {
       
        return (
            <div>
                {console.log("Categories Container Return")}
               <h1>Categories</h1>
               <ul>
                  {this.props.categories?.map((category) => {
                    return <li key={category.id}>
                        <Link to={`/categories/${category.id}`} state={{ name: category.name, category_id: category.id}}>{category.name}</Link>
                        
                    </li>
                  })}
              </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {categories: state.categories}
}

export default connect(mapStateToProps, {fetchCategories})(CategoriesContainer);