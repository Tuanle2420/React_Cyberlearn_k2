import React, { Component } from "react";

export default class PhoneList extends Component {
  render() {
    let { phoneItem } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={phoneItem.hinhAnh}
          alt={phoneItem.hinhAnh}
          style={{width:300, height:300, marginLeft:'auto', marginRight:'auto'}}
        />
        <div className="card-body text-center">
          <h4 className="card-title">
            {phoneItem.tenSP}
          </h4>
          <p className="card-text">
            Giá bán: {phoneItem.giaBan.toLocaleString()} $
          </p>
          <button className="btn btn-success" onClick={() => {this.props.addProduct(phoneItem)}}>Thêm vào giỏ hàng</button>
        </div>
      </div>
    );
  }
}
