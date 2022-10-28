import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../redux/configStore"
import { registeredUserListApi, UserModel } from "../../../redux/reducers/userReducer"

type Props = {
  maKh:string,
}
export default function ConfirmList({maKh}: Props) {
  const {registeredUsers} = useSelector((state:RootState)=>state.userReducer)
  const dispatch:AppDispatch = useDispatch()
  const registerList = (maKh:string) =>{
    const action = registeredUserListApi(maKh)
    dispatch(action)
  }
  console.log(maKh);
  useEffect(()=>{
    registerList(maKh)
  },[maKh])
  const renderRegister = () => {
    return registeredUsers.map((user:UserModel,index:number)=>{
      return <tr className="text-center" key={index}>
      <td>{index+1}</td>
      <td>{user.taiKhoan}</td>
      <td>{user.hoTen}</td>
      <td>
        <button className="btn btn-success mx-2">Xác thực</button>
        <button className="btn btn-danger mx-2">Hủy</button>
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