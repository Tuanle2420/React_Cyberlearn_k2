import React, { Component } from 'react'

export default class PhoneProps extends Component {
  render() {
    return (
        <div className="col-4" key={this.props.IndexProps}>
        <div className="card">
          <img
            style={{
              width: 280,
              height: 300,
              marginLeft: "auto",
              marginRight: "auto",
            }}
            className="card-img-top "
            src={this.props.DataPhone.hinhAnh}
            alt={this.props.DataPhone.hinhAnh}
          />
          <div className="card-body text-center">
            <h4 className="card-title">{this.props.DataPhone.tenSP}</h4>
            <p className="card-text">
              <span style={{ fontWeight: "bold" }}>Giá bán:</span>{" "}
              {this.props.DataPhone.giaBan} VND
            </p>
            <button
              className="btn btn-success"
              style={{ fontWeight: "bold" }}
              onClick={() => {this.props.HandelDetail(this.props.DataPhone)}}
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    )
  }
}
