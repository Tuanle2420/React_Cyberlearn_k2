import React, { Component } from "react";
import RenderPhone from "./RenderPhone";
import ModalCart from "./ModalCart";

export default class CartEX extends Component {
  phoneData = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  state = {
    cartList: [],
  };

  handleAddProduct = (product) => {
    // console.log(product)
    let productCart = {
      maSP: product.maSP,
      hinhAnh: product.hinhAnh,
      tenSP: product.tenSP,
      SoLuong: 1,
      giaBan: product.giaBan,
    };
    // let newState = [...this.state.cartList, productCart]
    // this.setState({cartList:newState})
    let productIndex = this.state.cartList.findIndex((item) => {
      return item.maSP === product.maSP;
    });

    let newCart = this.state.cartList;

    if (productIndex === -1) {
      newCart.push(productCart);
    } else {
      newCart[productIndex].SoLuong += 1;
    }
    this.setState({ cartList: newCart });
  };

  countProduct = () => {
    return this.state.cartList.reduce((total, item) => {
      return total + item.SoLuong;
    }, 0);
  };

  deleteProductCart = (maSP) => {
    let indexProduct = this.state.cartList.findIndex((item) => {
      return item.maSP === maSP;
    });
    if (indexProduct !== -1) {
      this.state.cartList.splice(indexProduct, 1);
    }
    this.setState({ cartList: this.state.cartList });
  };

  addCountProduct = (maSP) => {
    let indexProduct = this.state.cartList.findIndex((item) => {
      return item.maSP === maSP;
    });
    if (indexProduct !== -1) {
      let newCart = this.state.cartList;
      newCart[indexProduct].SoLuong += 1;
      this.setState({ cartList: newCart });
    }
  };

  subCountProduct = (maSP) => {
    let indexProduct = this.state.cartList.findIndex((item) => {
      return item.maSP === maSP;
    });
    if (indexProduct !== -1) {
      if (this.state.cartList[indexProduct].SoLuong > 1) {
        let newCart = this.state.cartList;
        newCart[indexProduct].SoLuong -= 1;
        this.setState({ cartList: newCart });
      }
      else{
        this.state.cartList.splice(indexProduct, 1);
        this.setState({ cartList: this.state.cartList });
      }
    }
  };

  totalMoney = () => {
    return this.state.cartList.reduce((total, item) => {
      return total + item.SoLuong * item.giaBan;
    }, 0);
  }

  render() {
    return (
      <div>
        <RenderPhone
          phoneData={this.phoneData}
          addProduct={this.handleAddProduct}
          totalCart={this.countProduct}
        />
        <ModalCart
          cartList={this.state.cartList}
          deleteProductCart={this.deleteProductCart}
          addCountProduct={this.addCountProduct}
          subCountProduct={this.subCountProduct}
          totalMoney = {this.totalMoney}
        />
      </div>
    );
  }
}
