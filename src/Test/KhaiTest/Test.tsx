import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CourseItem from '../../components/CourseItem/CourseItem'
import { RootState,AppDispatch } from '../../redux/configStore'
import { getAllSubjectApi, SubjectModel } from '../../redux/reducers/subjectReducer'

type Props = {
    
}

export default function TestKhai({}: Props) {
    const {arrSubject} = useSelector((state:RootState)=>state.subjectReducer)
    const dispatch:AppDispatch = useDispatch()
    useEffect(()=>{
        const action = getAllSubjectApi()
        dispatch(action)
    },[])
    const renderSubject = ()=>{
        return arrSubject?.map((sub:SubjectModel,index:number)=>{
            return <div className="col-3" key={index}>
                <CourseItem subject={sub}></CourseItem>
            </div>
        })
    }
  return (
    <div>
        <h1 className='display-4'>Danh sach khoa hoc</h1>
        <div className="row">
            {renderSubject()}
        </div>
    </div>
  )
}