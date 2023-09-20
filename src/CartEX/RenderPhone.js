import React, { Component } from "react";
import PhoneList from "./PhoneList";

export default class RenderPhone extends Component {
  renderPhone = () => {
    return this.props.phoneData.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <PhoneList phoneItem={item} addProduct={this.props.addProduct}/>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h2 className="m-5 text-center">Danh sách sản phẩm</h2>
        <div className="text-right p-3" style={{cursor:'pointer'}}>
          <span className="" data-toggle="modal" data-target="#modelId" onClick={() => {}}>
            <i className="fa-solid fa-cart-shopping" />
            {' '}({this.props.totalCart()})Giỏ hàng
          </span>
        </div>
        <div className="row">
          <this.renderPhone />
        </div>
      </div>
    );
  }
}
