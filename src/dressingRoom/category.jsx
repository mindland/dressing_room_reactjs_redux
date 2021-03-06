import React, { Component } from "react";
import { connect } from "react-redux";

class Category extends Component {
  handleSelectedCategory = (cateType) => () => {
    // closzure
    // dispatch action len store de thay doi selectedCategory
    this.props.dispatch({
      type: "SELECT_CATEGORY",
      payload: cateType,
    });
  };

  renderCategories = () => {
    return this.props.cateList.map((item) => {
      return (
        <button
          onClick={this.handleSelectedCategory(item.type)}
            // item.type === selectedCate
            className={`btn ${item.type === this.props.selectedCate ? 'btn-success' : 'btn-secondary'}`}
            key={item.type}
        >
          {item.showName}
        </button>
      );
    });
  };

  render() {
    return <div className="btn btn-group">{this.renderCategories()}</div>;
  }
}

const mapStateToProps = (state) => {
  // lay du lieu tu store xuong
  // state toan bo du lieu tren store
  return {
    cateList: state.categories,
    selectedCate: state.selectedCategory,
  };
};

export default connect(mapStateToProps)(Category); // clozure function , run 2 lan

// thu vien classnames