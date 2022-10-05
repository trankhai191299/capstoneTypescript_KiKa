import React from 'react'
import { SubjectModel } from '../../redux/reducers/subjectReducer'

type Props = {
    subject:SubjectModel,
}

export default function CourseItem({subject}: Props) {
  return (
    <div className='card'>
        <img src={subject.hinhAnh} alt={subject.tenKhoaHoc} className='img-fluid'/>
        <div className="card-body p-2">
            <p className='lead'>{subject.tenKhoaHoc}</p>
            <p className='lead'>Instructor: {subject.nguoiTao.hoTen}</p>
            <p className='lead'>Rating: 5.0</p>
            <button className='btn btn-success'>Go to Detail</button>
        </div>
    </div>
  )
}