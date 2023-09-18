import React, { Component } from "react";
import ModalCar from "./ModalCar";

export default class CarDetail extends Component {
  products = [
    {
      id: 1,
      name: "black car",
      img: "./img/products/black-car.jpg",
      price: 1000,
    },
    { id: 2, name: "red car", img: "./img/products/red-car.jpg", price: 2000 },
    {
      id: 3,
      name: "silver car",
      img: "./img/products/silver-car.jpg",
      price: 3000,
    },
    {
      id: 4,
      name: "steel car",
      img: "./img/products/steel-car.jpg",
      price: 4000,
    },
  ];

  state = {
    carCurrent: {
      id: 1,
      name: "black car",
      img: "./img/products/black-car.jpg",
      price: 1000,
    },
  };

  renderCar = () => {
    return this.products.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          <div className="card">
            <img className="card-img-top" src={item.img} alt={item.img} />
            <div className="card-body text-center">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">Giá: {item.price.toLocaleString()} $</p>
              <button
                onClick={() => {
                  this.handleModal(item);
                }}
                className="btn btn-info"
                data-toggle="modal"
                data-target="#modalCar"
              >
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      );
    });
  };


  handleModal = (car) => {
    this.setState({ carCurrent: car });
  };

  render() {
    return (
      <div className="container">
        <h3 className="p-3 text-center">Danh sách xe</h3>
        <div className="row">
          <this.renderCar />
          <ModalCar carProps={this.state.carCurrent} />

        </div>
      </div>
    );
  }
}
