import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import CourseItem from '../../components/CourseItem/CourseItem'
import { RootState,AppDispatch } from '../../redux/configStore'
import { getAllCourseApi, CourseModel, getCourseByName } from '../../redux/reducers/courseReducer'
import Slider,{Settings} from "react-slick";
type Props = {
    
}

export default function Test1({}: Props) {
    const {arrCourse,searchCourses} = useSelector((state:RootState)=>state.courseReducer)
    const dispatch:AppDispatch = useDispatch()
    const khoahoc = useRef('')
    let [searchParam,setSearchParam] = useSearchParams()
    const timeoutRef = useRef({})
    const settings:Settings = {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite:false,
        draggable:true,
    }
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
                <CourseItem course={cou} index={index}></CourseItem>
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
    <div className='container'>
      <h3 className="display-4">Danh sach khoa hoc</h3>

      <form className="frm" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <div className="form-group mb-4">
              <div className="row">
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="khoahoc"
                    id="khoahoc"
                    placeholder="Ten Khoa Hoc"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-4">
                  <button className="btn btn-primary">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Slider {...settings} className="row">{renderAllOrSearch()}</Slider>
    </div>
  );
}