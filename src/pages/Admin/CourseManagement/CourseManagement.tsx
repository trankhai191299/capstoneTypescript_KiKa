import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppDispatch, RootState } from '../../../redux/configStore';
import { CourseModel, getAllCourseApi, MaKh } from '../../../redux/reducers/courseReducer';
import { registeredUserListApi, waitingUserListApi } from '../../../redux/reducers/userReducer';
import ConfirmList from './ConfirmList'
import JoinList from './JoinList';
type Props = {}
export default function CourseManagement({}: Props) {
  const {arrCourse} = useSelector((state:RootState)=>state.courseReducer)
  // const {registeredUsers} = useSelector((state:RootState)=>state.userReducer)
  // const {waitingUsers} = useSelector((state:RootState)=>state.userReducer)
  const [maKh,setMaKh] = useState("")
  const [tenKh,setTenKh] = useState('')
  const dispatch:AppDispatch = useDispatch()
  const registerList = (maKh:MaKh):void =>{
    const action = registeredUserListApi(maKh)
    dispatch(action)
  }
  const waitingList = (maKh:MaKh):void =>{
    const action = waitingUserListApi(maKh)
    dispatch(action)
  }
  useEffect(() => {
    dispatch(getAllCourseApi());
  }, [])
  const renderCourse = () => {
    // console.log(arrCourse);
    
    return arrCourse?.map((course:CourseModel,index:number)=>{
      return <tr key={index}>
      <td className='stt'>{index+1}</td>
      <td className='mkh'>{course?.maKhoaHoc}</td>
      <td className='tkh'>{course?.tenKhoaHoc}</td>
      <td className='ha'>
        <img src={course.hinhAnh} alt={course?.tenKhoaHoc} width={50} height={50}/>
      </td>
      <td className='lx'>{course?.luotXem}</td>
      <td className='ngtao'>{course?.nguoiTao.hoTen}</td>
      <td className='thtc'>
        <button
          data-bs-toggle="modal"
          data-bs-target="#modalGhiDanh"
          className="btn btn-success m-2"
          onClick={():void=>{
            setMaKh(course?.maKhoaHoc)
            setTenKh(course?.tenKhoaHoc)
            const maKhoaHoc:MaKh = {
              maKhoaHoc : course?.maKhoaHoc
            }
            registerList(maKhoaHoc)
            waitingList(maKhoaHoc)
          }}
        >
          Ghi danh
        </button>
        <NavLink to={'/admin/addcourse'} className="btn btn-warning m-2" state={{course:course}}>C???p nh???t</NavLink>
        <button className="btn btn-danger m-2">X</button>
      </td>
    </tr>
    })
  }
  return (
    <div className="container course-management">
      <div
        className="modal fade"
        id="modalGhiDanh"
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
              <div className="modal-title">
                <h3>{tenKh}</h3>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="modal-body">
              <div className="content-1">
                <h4>Ch???n ng?????i d??ng</h4>
                <div className="form">
                  <div className="form-group">
                    <div className="row">
                      <div className="col-10">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="T??n ng?????i d??ng"
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
                <ConfirmList maKh={maKh}/>
              </div>
              <div className="content-3">
                <JoinList maKh={maKh}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="course-title">
        <NavLink className='btn btn-secondary' to={'/admin/addcourse'} state={{course:{
          maKhoaHoc: '',
          tenKhoaHoc: '',
          moTa: '',
          luotXem: 0,
          danhGia:0,
          hinhAnh: '',
          ngayTao: '',
          taiKhoanNguoiTao: '',
          maDanhMucKhoaHoc:'',
        }}}>Th??m kh??a h???c</NavLink>
      </div>
      <div className="d-flex mt-4 course-table">
        <div className="table-responsive border border-dark">
          <table className="table table-striped align-middle">
            <thead>
              <tr>
                <th className='stt'>STT</th>
                <th className='mkh'>M?? kh??a h???c</th>
                <th className='tkh'>T??n kh??a h???c</th>
                <th className='ha'>H??nh ???nh</th>
                <th className='lx'>L?????t xem</th>
                <th className='ngtao'>Ng?????i t???o</th>
                <th className='thtc'>Thao T??c</th>
              </tr>
            </thead>
            <tbody>
              {renderCourse()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
