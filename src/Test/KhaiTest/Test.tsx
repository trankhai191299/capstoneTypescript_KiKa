import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CourseItem from '../../components/CourseItem/CourseItem'
import { RootState,AppDispatch } from '../../redux/configStore'
import { getAllCourseApi, CourseModel } from '../../redux/reducers/courseReducer'

type Props = {
    
}

export default function TestKhai({}: Props) {
    const {arrCourse} = useSelector((state:RootState)=>state.courseReducer)
    const dispatch:AppDispatch = useDispatch()
    useEffect(()=>{
        const action = getAllCourseApi()
        dispatch(action)
    },[])
    const rendercourse = ()=>{
        return arrCourse?.map((cou:CourseModel,index:number)=>{
            return <div className="col-3" key={index}>
                <CourseItem course={cou}></CourseItem>
            </div>
        })
    }
  return (
    <div>
        <h1 className='display-4'>Danh sach khoa hoc</h1>
        <div className="row">
            {rendercourse()}
        </div>
    </div>
  )
}