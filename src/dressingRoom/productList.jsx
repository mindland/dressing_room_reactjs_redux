import React, { Component } from 'react';
import ProductItem from './productItem';
import {connect} from 'react-redux'

class ProductList extends Component {

    renderProductList = () => {
        return this.props.productList
        .filter((item) => {return item.type === this.props.selectedCate})
        .map((item) => {
            return (
                <div className="col-4" key={item.id}>
                    <ProductItem data={item} />
                </div>
            )
        })
    }   

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {this.renderProductList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        productList: state.productList, 
        selectedCate: state.selectedCategory,
    }
}

export default connect(mapStateToProps )(ProductList);

// khi thay doi selectedcate, nhung component nào connect toi su dung thi se bi thay doi => state library management