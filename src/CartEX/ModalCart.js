import React, { Component } from "react";

export default class ModalCart extends Component {
  renderProduct = () => {
    let { cartList } = this.props;
    return cartList.map((item, index) => {
      return (
        <tr className="text-center" key={index}>
          <td>{item.maSP}</td>
          <td>
            <img
              src={item.hinhAnh}
              alt={item.hinhAnh}
              style={{ width: 30, height: 30 }}
            />
          </td>
          <td>{item.tenSP}</td>
          <td>
            <button
              className="btn btn-success"
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                width: "10px",
                height: "24px",
              }}
              onClick={() => {
                this.props.addCountProduct(item.maSP);
              }}
            >
              +
            </button>
            <span className="pl-1 pr-1">{item.SoLuong}</span>
            <button
              className="btn btn-danger"
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                width: "10px",
                height: "24px",
              }}
              onClick={() => {
                this.props.subCountProduct(item.maSP);
              }}
            >
              -
            </button>
          </td>
          <td>{item.giaBan.toLocaleString()}</td>
          <td>{(item.giaBan * item.SoLuong).toLocaleString()}</td>
          <td>
            <button
              onClick={() => {
                this.props.deleteProductCart(item.maSP);
              }}
              className="btn btn-danger "
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          style={{ minWidth: 1000 }}
          className="modal-dialog"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Cart List</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <h5>Danh sách sản phẩm</h5>
              <table className="table">
                <thead>
                  <tr className="text-center">
                    <th>Mã sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th>Xóa</th>
                  </tr>
                </thead>
                <tbody>{this.renderProduct()}</tbody>
                <tfoot>
                  <tr className="text-center">
                    <td colSpan={5}></td>
                    <td>Tổng tiền:</td>
                    <td>
                      {this.props.totalMoney().toLocaleString()}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
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
