import React, { Component } from "react";
import PhoneProps from "./PhoneProps";
// import DataPhone from '../Data/dataPhone.json'

export default class PhoneDetail extends Component {
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
    currentDetail: {
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
  };

  handelDetail = (item) => {
    this.setState({currentDetail:item})
  }

  renderPhone = () => {
    return this.phoneData.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <PhoneProps DataPhone={item} HandelDetail={this.handelDetail}/>
        </div>
      );
    });
  };


  render() {
    // console.log(DataPhone)
    return (
      <div className="container">
        <div className="row pt-3">{this.renderPhone()}</div>
        <h3 className="mt-5 text-center">Thông tin sản phẩm chi tiết</h3>
        <div className="row pt-5">
          <div className="col-4">
            <img style={{width:'100%'}} src={this.state.currentDetail.hinhAnh} alt={this.state.currentDetail.hinhAnh}/>
          </div>
          <div className="col-8">
            <h4 className="text-center mb-3">Thông số kỹ thuật</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>Màn hình:</th>
                        <th style={{fontWeight:'normal'}}>{this.state.currentDetail.manHinh}</th>
                        
                    </tr>
                    <tr>
                        <th>Hệ điều hành:</th>
                        <th style={{fontWeight:'normal'}}>{this.state.currentDetail.heDieuHanh}</th>
                        
                    </tr>
                    <tr>
                        <th>Camera trước:</th>
                        <th style={{fontWeight:'normal'}}>{this.state.currentDetail.cameraTruoc}</th>
                        
                    </tr>
                    <tr>
                        <th>Camera sau:</th>
                        <th style={{fontWeight:'normal'}}>{this.state.currentDetail.cameraSau}</th>
                        
                    </tr>
                    <tr>
                        <th>RAM:</th>
                        <th style={{fontWeight:'normal'}}>{this.state.currentDetail.ram}</th>
                        
                    </tr>
                    <tr>
                        <th>ROM:</th>
                        <th style={{fontWeight:'normal'}}>{this.state.currentDetail.rom}</th>
                        
                    </tr>
                </thead>
                
            </table>
          </div>
        </div>
      </div>
    );
  }
}
