import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <img src={this.props.srcProps} alt={this.props.altProps}/>
    )
  }
}
