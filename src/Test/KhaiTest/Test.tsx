import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import CourseItem from '../../components/CourseItem/CourseItem'
import { RootState,AppDispatch } from '../../redux/configStore'
import { getAllCourseApi, CourseModel, getCourseByName } from '../../redux/reducers/courseReducer'

type Props = {
    
}

export default function TestKhai({}: Props) {
    const {arrCourse,searchCourses} = useSelector((state:RootState)=>state.courseReducer)
    const dispatch:AppDispatch = useDispatch()
    const khoahoc = useRef('')
    let [searchParam,setSearchParam] = useSearchParams()
    const timeoutRef = useRef({})

    useEffect(()=>{
        const action = getAllCourseApi()
        dispatch(action)
    },[])
    useEffect(()=>{
        let keyword:string|null = searchParam.get('keyword')
        if(khoahoc.current!==''){
            dispatch(getCourseByName(keyword))
        }
    },[khoahoc.current])
    const renderCourse = (array:[]) => {
        return array?.map((cou:CourseModel,index:number)=>{
            return <div className="col-3" key={index}>
                <CourseItem course={cou}></CourseItem>
            </div>
        })
    }
    const handleChange = (e:any)=>{
        khoahoc.current = e.target.value
        timeoutRef.current = setTimeout(()=>{
            setSearchParam({keyword:khoahoc.current})
        },1250)
    }
    const handleSubmit = (e:any)=>{
        e.preventDefault()
        setSearchParam({keyword:khoahoc.current})
    }
    const renderAllOrSearch = ()=> {
        if(searchCourses.length !== 0 && khoahoc.current !== ''){
            return renderCourse(searchCourses)
        }else{
            return renderCourse(arrCourse)
        }
    }
  return (
    <div>
        <h1 className='display-4'>Danh sach khoa hoc</h1>

        <form className='frm' onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-6">
                    <div className="form-control">
                        <input type="text" className='form-control' name="khoahoc" id="khoahoc" placeholder='Ten Khoa Hoc' onChange={handleChange}/>
                        <button className='btn btn-primary'>Search</button>
                    </div>
                </div>
            </div>
        </form>
        <div className="row">
            {renderAllOrSearch()}
        </div>
    </div>
  )
}