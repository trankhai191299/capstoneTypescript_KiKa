import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { CourseModel } from '../../redux/reducers/courseReducer'

type Props = {
  // searchInput:string,
}

export default function Search({}: Props) {
 
  const location = useLocation()
  const arrSearch = location.state
  const renderSearch = () =>{
    return arrSearch?.map((item:CourseModel,index:number)=>{
      return (
        <NavLink to={"/"} className="col-12 item" key={index}>
          <div className="result">
            <div className="row">
              <div className="col-2">
                <img src={item.hinhAnh} alt={item.biDanh} />
              </div>
              <div className="col-10">
                <h4 className="title">{item.tenKhoaHoc}</h4>
                <p className="description">
                  {item.moTa.length>250?item.moTa.substring(0,250):item.moTa} ...
                </p>
              </div>
            </div>
          </div>
        </NavLink>
      );
    })
  }
  return (
    <div className='search'>
      <div className="container mt-4">
        <h2>Tìm thấy khóa học Front End</h2>
        <div className="search-results mt-4">
          <div className="row">
            {renderSearch()}
          </div>
          <div className="list-page text-center">
            <p>prev 1 2 3 4 5 next</p>
          </div>
        </div>
      </div>
    </div>
  )
}