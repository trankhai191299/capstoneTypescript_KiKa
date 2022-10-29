import React, { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"

type Props = {}
export default function AddCourse({}: Props) {
  const [img,setImg] = useState('')
  const location = useLocation()
  const {course} = location.state
  const handleImg = (e:any):void=>{
    setImg(e.target.files[0])
  }
  return (
    <div className="add-course container">
      <h2 className="mt-3">Thêm Sửa Khóa Học</h2>
      <div className="form-part">
        <form>
          <div className="row">
            <div className="col-6">
              <div>
                <div className="form-group mb-3" style={{width:'90%'}}>
                  <p>Mã khóa học</p>
                  <input type="text" className="form-control" placeholder={course?.maKhoaHoc}/>
                </div>
                <div className="form-group mb-3" style={{width:'90%'}}>
                  <p>Tên khóa học</p>
                  <input type="text" className="form-control" placeholder={course?.tenKhoaHoc}/>
                </div>
                <div className="form-group mb-3" style={{width:'90%'}}>
                  <p>Danh mục khóa học</p>
                  <select className="form-select" defaultValue={'fe'}>
                    <option value="fe">Lập trình Frontend</option>
                    <option value="be">Lập trình Backend</option>
                  </select>
                </div>
                <div className="form-group mb-3" style={{width:'90%'}}>
                  <p>Ngày tạo</p>
                  <input type="text" className="form-control" placeholder={course?course?.ngayTao:'dd/mm/yyyy'}/>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div>
                <div className="form-group mb-3">
                  <p>Đánh giá</p>
                  <input type="text" className="form-control" style={{width:'90%'}}/>
                </div>
                <div className="form-group mb-3">
                  <p>Lượt xem</p>
                  <input type="text" className="form-control" style={{width:'90%'}} placeholder={course?.luotXem}/>
                </div>
                <div className="form-group mb-3">
                  <p>Người tạo</p>
                  <input type="text" className="form-control" style={{width:'90%'}} placeholder={course?.nguoiTao.hoTen}/>
                </div>
                <div className="form-group mb-3">
                  <p>Hình ảnh</p>
                  <input type="file" accept="image/png, image/jpeg"  className="form-control" onChange={handleImg} style={{width:'90%'}}/>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group mt-3">
            <p>Mô tả</p>
            <textarea className="form-control" placeholder={course?course?.moTa:"Mô tả ở đây"} cols={30} rows={10} style={{width:'95%'}}></textarea>
          </div>
          <div className="d-flex justify-content-between mt-4 mb-5">
            <div className="turn-back">
              <NavLink to={'/admin/coursemanagement'}>Trở lại</NavLink>
            </div>
            <div className="btn-area">
              <button className="btn btn-warning mx-2">Thêm</button>
              <button className="btn btn-secondary mx-2">Lưu</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}