import React from 'react'

type Props = {}

export default function ThongTinCaNhan({}: Props) {
  return (
    <div className='ttcn mb-5'>
      <div className="container">
        <form className='row mt-4'>
          <div className="col-6">
            <div className="form-group">
              <p>Email</p>
              <input type="email" name="email" className='form-control mb-2' placeholder='abc@gmail.com'/>
              <p>Họ tên</p>
              <input type="text" name="hoTen" className='form-control mb-2' placeholder='abc'/>
              <p>Số điện thoại</p>
              <input type="text" name="soDT" className='form-control' placeholder='09...'/>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p>Tài khoản</p>
              <input type="text" name="taiKhoan" className='form-control mb-2' disabled placeholder='abc'/>
              <p>Mật khẩu</p>
              <input type="password" name="matKhau" className='form-control' placeholder='abc'/>
            </div>
            <button className='btn btn-primary mt-5'>Cập nhật</button>
          </div>
        </form>
      </div>
    </div>
  )
}