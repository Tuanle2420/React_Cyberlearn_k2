import React, { Component } from "react";

export default class ModalCar extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="modalCar"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modalCarLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalCarLabel">
                {this.props.carProps.name}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body"><img style={{width:'100%'}} src={this.props.carProps.img} alt={this.props.carProps.img}/></div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save 
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
