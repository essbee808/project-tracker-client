import React, { Component } from 'react';
import {connect} from 'react-redux';
import CategoryShow from './CategoryShow';

class CategoriesList extends Component {

    render() {
        const {categories} = this.props
        return (
            <div>
                {categories.map((category) => <li key={category.id}><CategoryShow {...category}/></li>)}
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {categories: state.categories}
}

export default connect(mapStateToProps)(CategoriesList);