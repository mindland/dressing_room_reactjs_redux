import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";

class Model extends Component {
  render() {
    return (
      <div
        className="contain"
        style={{
          backgroundImage: `url(${this.props.selectedProducts.background})`,
          backgroundSize: "cover",
        }}
      >
        <div
          className="body"
          style={{
            backgroundImage: "url(images/allbody/bodynew.png)",
          }}
        />
        <div
          className="model"
          style={{
            backgroundImage: "url(images/model/1000new.png)",
          }}
        />

        {/* <div
          className="bikinitop"
          style={{
            backgroundImage: "url(images/allbody/bikini_branew.png)",
          }}
        /> */}
        {/* <div
          className="bikinibottom"
          style={{
            backgroundImage: "url(images/allbody/bikini_pantsnew.png)",
          }}
        /> */}

        <div
          className="feetleft"
          style={{
            backgroundImage: "url(images/allbody/feet_high_leftnew.png)",
          }}
        />
        
        <div
          className="feetright"
          style={{
            backgroundImage: "url(images/allbody/feet_high_rightnew.png)",
          }}
        />

        {/* Áo */}
        <div
          className="bikinitop"
          style={{
            backgroundImage: `url(${this.props.selectedProducts.topclothes})`,
            backgroundSize: "cover",
          }}
        />

        {/* Quần */}
        <div
          className="bikinibottom"
          style={{
            backgroundImage: `url(${this.props.selectedProducts.botclothes})`,
            backgroundSize: "cover",
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedProducts: state.seletedProducts,
  };
};

export default connect(mapStateToProps)(Model);


// immutable : bat bien cua du lieu: noi bieu hien bat bien nay la state, khong duoc truc tiep thay doi du lieu