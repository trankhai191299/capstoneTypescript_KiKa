import React from 'react'
import GhiDanhKhoaHoc from './GhiDanhKhoaHoc'
type Props = {}

export default function CourseManagement({}: Props) {
  return (
    <div className="container course-management">
      {/* <div className="userContainer mt-5 d-none">
        <button
          type="button"
          className="btn btn-dark btn-lg"
          data-bs-toggle="modal"
          data-bs-target="#modalId"
        >
          Thêm người dùng
        </button>
        <div
          className="modal fade"
          id="modalId"
          tabIndex={-1}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">
                  Them nguoi dung
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">hi</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
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
      </div> */}
      <div className="course-title text-center">
        <h3>Thêm khóa học</h3>
      </div>
      <div className="mt-5 form-group">
        <input className='form-control mb-2' type="search" placeholder="Nhập vào tại khoản hoặc tên người dùng" />
        <button className="btn btn-dark btn-sm">Tìm kiếm</button>
      </div>
      <div className="d-flex mt-5">
        <div className="table-responsive border border-dark">
          <table className="table align-middle">
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
                  <button className='btn btn-success m-2'>Ghi danh</button>
                  <button className='btn btn-warning m-2'>Cập nhật</button>
                  <button className='btn btn-danger m-2'>X</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
