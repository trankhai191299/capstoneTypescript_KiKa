import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../redux/configStore';
import { getCourseDetailApi } from '../../redux/reducers/courseReducer';

type Props = {}
type CourseParams = {
  id:any,
}
export default function Detail({}: Props) {
  const {courseDetail} = useSelector((state:RootState)=>state.courseReducer)
  const dispatch:AppDispatch = useDispatch()
  const params = useParams<CourseParams>()
  const getCourseDetail = async() => {
    let {id} = params
    const action = getCourseDetailApi(id) 
    dispatch(action)
  }
  useEffect(()=>{
    getCourseDetail()
  },[params?.id])
  
  return (
    <div className="detail">
      <div className="carousel">
        <div className="container">
          <div className="row">
            <div className="col-6 left-side">
              <h2>{courseDetail?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}</h2>
              <p>Giáo viên: {courseDetail?.nguoiTao?.hoTen}</p>
              <button className="btn btn-success">Đăng ký</button>
            </div>  
            <div className="col-4 right-side">
              <img src={courseDetail?.hinhAnh} alt={courseDetail?.tenKhoaHoc} />
            </div>
          </div>
        </div>
      </div>
      <div className="course-info">
        <div className="container py-4">
          <h3>Mô tả Khóa học</h3>
          <p className='course-name'>Tên khóa học: {courseDetail?.tenKhoaHoc} - {courseDetail?.maKhoaHoc}</p>
          <p className='create-date'>Ngày tạo: {courseDetail?.ngayTao}</p>
          <p className='description'>
            {courseDetail?.moTa}
          </p>
          <p className='view'>Lượt xem: {courseDetail?.luotXem}</p>
        </div>
      </div>
    </div>
  );
}