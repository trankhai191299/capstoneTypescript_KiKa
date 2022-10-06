import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CourseCategory from '../../components/CourseCategory/CourseCategory'
import { RootState,AppDispatch } from '../../redux/configStore'
import {DanhMucKhoaHoc, getCourseCategory} from '../../redux/reducers/courseReducer'
type Props = {}

export default function Test2({}: Props) {
    const {courseCategory} = useSelector((state:RootState)=>state.courseReducer)
    const dispatch:AppDispatch = useDispatch()
    useEffect(()=>{
        const action = getCourseCategory()
        dispatch(action)
    },[])
    const renderCategory = () =>{
        return courseCategory?.map((cate:DanhMucKhoaHoc,index:number)=>{
            return <CourseCategory cate={cate} key={index}></CourseCategory>
        })
    }
  return (
    <div className='container'>
        <h3>Danh muc khoa hoc</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>Ma</th>
                    <th>Ten</th>
                </tr>
            </thead>
            <tbody>
                {renderCategory()}
            </tbody>
        </table>
    </div>
  )
}