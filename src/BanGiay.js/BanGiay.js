import React, { Component } from "react";
import MenuBar from './MenuBar'
import ProductList from "./ProductList";
import Data from '../Data/data.json'

export default class BanGiay extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <MenuBar/>
          </div>
          <div className="col-8">
            <ProductList dataProps = {Data}/>
          </div>
        </div>
      </div>
    );
    
    
  }
}
