import React, { Component } from 'react'

export default class MenuBar extends Component {
  render() {
    return (
        
        <div
          className="nav flex-column nav-pills justify-content-center"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
          style={{height:'100vh'}}
        >
          <a
            className="nav-link active"
            id="v-pills-home-tab"
            data-toggle="pill"
            href="#v-pills-home"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            Home
          </a>
          <a
            className="nav-link"
            id="v-pills-shop-tab"
            data-toggle="pill"
            href="#v-pills-shop"
            role="tab"
            aria-controls="v-pills-shop"
            aria-selected="false"
          >
            Shop
          </a>
          
        </div>

    );
  }
}
