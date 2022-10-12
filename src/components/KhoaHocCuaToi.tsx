import React from 'react'

type Props = {}

export default function KhoaHocCuaToi({}: Props) {
  return (
    <div className='my-course mb-4'>
      <div className="container">
        <h3 className='mt-4 main-title'>Các khóa học đã tham gia</h3>
        
        <div className="courses">
          <div className="row">
            <div className="col-12">
              <div className="item">
                <div className="row">
                  <div className="col-2">
                    <img src="https://picsum.photos/200/200" alt="..." />
                  </div>
                  <div className="col-10 position-relative">
                    <h3 className='title'>Tên khóa học</h3>
                    <p>Chi tiết khóa học ...</p>
                    <button className='btn btn-danger position-absolute end-0'>Hủy khóa học</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}