import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  src = 'https://photo-cms-vovworld.zadn.vn/w730/uploaded/vovworld/znaeng/2012_12_04/images441865_doreamon.jpg'
  alt = 'doraemon'
  render() {
    return (
      <Child srcProps={this.src} altProps = {this.alt}/>
    )
  }
}
