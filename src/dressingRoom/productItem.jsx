import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItem extends Component {
  handleSelectedProduct = () => {
    const { imgSrc_png, type } = this.props.data; 
    this.props.dispatch({
      type: "SELCECT_PRODUCT",
      payload: {
        type: type,
        img: imgSrc_png,
      },
    });
  };

  render() {
    const { imgSrc_jpg, name} = this.props.data; // destructuring
    return (
      <div className="card">
        <img src={imgSrc_jpg} alt="product" />
        <p className="lead">{name}</p>
        <button
          className="btn btn-primary"
          onClick={this.handleSelectedProduct}
        >
          Thử đồ
        </button>
      </div>
    );
  }
}

export default connect()(ProductItem); // connect store
