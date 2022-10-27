import React from 'react'
import GhiDanhKhoaHoc from './GhiDanhKhoaHoc'
type Props = {}

export default function CourseManagement({}: Props) {
  return (
    <div className='container course-management'>
      <div className="userContainer mt-5 d-none">
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
      </div>
      <div className="course-title">
        <h3>Thêm khóa học</h3>
      </div>
      <div className="mt-5">
        <input type="search" placeholder="Search" />
        <button className="btn btn-dark btn-sm">Search</button>
      </div>
      <div className="d-flex mt-5">
        <div className="table-responsive border border-dark">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tai Khoan</th>
                <th>Mat Khau</th>
                <th>Ho Ten</th>
                <th>Email</th>
                <th>So Dien Thoai</th>
                <th>Thao Tac</th>
              </tr>
            </thead>
            <tbody>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
