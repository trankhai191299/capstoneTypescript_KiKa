import React from 'react'
import ConfirmList from './ConfirmList'
import JoinList from './JoinList';
type Props = {}

export default function CourseManagement({}: Props) {
  return (
    <div className="container course-management">
      <div
        className="modal fade"
        id="modalId"
        tabIndex={-1}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="modal-body">
              <div className="content-1">
                <h4>Chọn người dùng</h4>
                <div className="form">
                  <div className="form-group">
                    <div className="row">
                      <div className="col-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Tên người dùng"
                        />
                      </div>
                      <div className="col-2">
                        <button className="btn btn-light">Ghi danh</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-2">
                <ConfirmList />
              </div>

              <div className="content-3">
                <JoinList />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="course-title text-center">
        <h3>Thêm khóa học</h3>
      </div>
      <form className="mt-5">
        <div className="form-group">
          <input
            className="form-control mb-2"
            type="search"
            placeholder="Nhập vào tại khoản hoặc tên người dùng"
          />
          <button className="btn btn-dark btn-sm">Tìm kiếm</button>
        </div>
      </form>
      <div className="d-flex mt-5">
        <div className="table-responsive border border-dark">
          <table className="table table-striped align-middle">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã khóa học</th>
                <th>Tên khóa học</th>
                <th>Hình ảnh</th>
                <th>Lượt xem</th>
                <th>Người tạo</th>
                <th>Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>ITec0123</td>
                <td>khóa bruh</td>
                <td>
                  <img src="https://picsum.photos/50/50" alt="..." />
                </td>
                <td>100k</td>
                <td>bruh danh tính</td>
                <td>
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#modalId"
                    className="btn btn-success m-2"
                  >
                    Ghi danh
                  </button>
                  <button className="btn btn-warning m-2">Cập nhật</button>
                  <button className="btn btn-danger m-2">X</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
