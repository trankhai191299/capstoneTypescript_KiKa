import React from 'react'
import { CourseModel } from '../../redux/reducers/courseReducer'

type Props = {
    course:CourseModel,
}

export default function CourseItem({course}: Props) {
  return (
    <div className='card mb-2'>
        {/* <img src={course.hinhAnh} alt={course.tenKhoaHoc} className='img-fluid'/> */}
        <div className="card-body p-2">
            <p className='lead'>{course.tenKhoaHoc}</p>
            <p className='lead'>Instructor: {course.nguoiTao.hoTen}</p>
            <p className='lead'>Rating: 5.0</p>
            <button className='btn btn-success'>Go to Detail</button>
        </div>
    </div>
  )
}