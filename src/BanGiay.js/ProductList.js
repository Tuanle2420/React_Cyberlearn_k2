import React, { Component } from "react";

export default class ProductList extends Component {

  renderItem = () => {
    return this.props.dataProps.map((item, index) => {
      return (
        <div className="col-4 pt-4" key={index}>
          <div className="card text-left" style={{width:300}}>
            <img className="card-img-top" src={item.image} alt={item.image} />
            <div className="card-body">
              <h4 className="card-title" style={{fontSize:'18px'}}>{item.name}</h4>
              <p className="card-text">{item.price}$</p>
              <button className="btn btn-dark text-white">View detail</button>
            </div>
          </div>
        </div>  
      );
    });
  }

  render() {
    return (
      <div
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          height: "100%",
          
        }}
      >
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            Trang chủ
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-shop"
            role="tabpanel"
            aria-labelledby="v-pills-shop-tab"
          >
            <div className="container">
                <div className="row">
                    <this.renderItem />
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
