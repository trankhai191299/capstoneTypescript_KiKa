import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../redux/configStore"
import { registeredUserListApi, UserModel } from "../../../redux/reducers/userReducer"
import { cancelRegisterCourseApi, DangKyKhoaHoc, ghiDanhApi, MaKh } from "../../../redux/reducers/courseReducer"
type Props = {
  maKh?:any,
}
export default function ConfirmList({maKh}: Props) {
  const {registeredUsers} = useSelector((state:RootState)=>state.userReducer)
  const dispatch:AppDispatch = useDispatch()
  const mKh:MaKh={
    maKhoaHoc : maKh
  }
  const registerList = (maKh:MaKh):void =>{
    const action = registeredUserListApi(maKh)
    dispatch(action)
  }
  useEffect(()=>{
    registerList(mKh)
  },[registeredUsers?.length])
  const renderRegister = () => {
    if(registeredUsers?.length === 0){
      return <tr>
      <td colSpan={4} className='fw-bold'>Không có học viên đăng ký khóa học</td>
    </tr>
    }
    return registeredUsers.map((user:UserModel,index:number)=>{
      return <tr className="text-center" key={index}>
      <td>{index+1}</td>
      <td>{user.taiKhoan}</td>
      <td>{user.hoTen}</td>
      <td>
        <button className="btn btn-success mx-2" onClick={()=>{
          let value1:DangKyKhoaHoc = {
            maKhoaHoc : maKh,
            taiKhoan : user.taiKhoan
          }
          if(window.confirm('Bạn có muốn ghi danh học viên này?')){
            dispatch(ghiDanhApi(value1))
          }
        }}>Xác thực</button>
        <button className="btn btn-danger mx-2" onClick={()=>{
          let value2:DangKyKhoaHoc = {
            maKhoaHoc : maKh,
            taiKhoan : user.taiKhoan
          }
          if(window.confirm('Bạn có muốn hủy học viên này?')){
            dispatch(cancelRegisterCourseApi(value2))
          }
        }}>Hủy</button>
      </td>
    </tr>
    })
  }
  return (
    <div className="confirm-list">
      <div className="d-flex justify-content-between">
        <p>Học viên chờ xác thực</p>
        <input style={{width:'225px'}} className="form-control" type="text" placeholder="tài khoản hoặc sđt"/>
      </div>
        
        <table className="table table-light table-striped mt-2">
          <thead>
            <tr className="text-center">
              <th>STT</th>
              <th>Tài Khoản</th>
              <th>Họ Tên</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {renderRegister()}
            {/* <tr className="text-center">
              <td>2</td>
              <td>Hello</td>
              <td>Bruh B</td>
              <td>
                <button className="btn btn-success mx-2">Xác thực</button>
                <button className="btn btn-danger mx-2">Hủy</button>
              </td>
            </tr> */}
          </tbody>
        </table>
    </div>
  )
}