import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { history } from '..';
import { RootState } from '../redux/configStore';
import { getProfileApi } from '../redux/reducers/userReducer';
import { ACCESS_TOKEN, getStore } from '../utils/setting';

type Props = {}

export default function ThongTinCaNhan({}: Props) {
  const {userLogin} = useSelector((state:RootState)=>state.userReducer)
  useEffect(()=>{
    if (!getStore(ACCESS_TOKEN)) {
      alert("Bắt buộc phải đăng nhập trước khi vào trang này");
      history.push('/login')
    }
    if(getStore(ACCESS_TOKEN)){
      getProfileApi()
    }
  },[])
  return (
    <div className='ttcn mb-5'>
      <div className="container">
        <form className='row mt-4'>
          <div className="col-6">
            <div className="form-group">
              <p>Email</p>
              <input type="email" name="email" className='form-control mb-2' placeholder={userLogin.email}/>
              <p>Họ tên</p>
              <input type="text" name="hoTen" className='form-control mb-2' placeholder={userLogin.hoTen}/>
              <p>Số điện thoại</p>
              <input type="text" name="soDT" className='form-control' placeholder={userLogin.soDT}/>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p>Tài khoản</p>
              <input type="text" name="taiKhoan" className='form-control mb-2' disabled placeholder={userLogin.taiKhoan}/>
              <p>Mật khẩu</p>
              <input type="password" name="matKhau" className='form-control'/>
            </div>
            <button className='btn btn-primary mt-5'>Cập nhật</button>
          </div>
        </form>
      </div>
    </div>
  )
}