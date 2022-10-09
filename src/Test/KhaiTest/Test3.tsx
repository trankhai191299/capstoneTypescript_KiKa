import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useSearchParams } from 'react-router-dom'
import { history } from '../..'
import { AppDispatch, RootState } from '../../redux/configStore'
import SearchResult from './TestComponent/SearchResult'
type Props = {}

export default function Test3({}: Props) {
  const {arrCourse,searchCourses} = useSelector((state:RootState)=>state.courseReducer)
  const dispatch:AppDispatch = useDispatch()
  const searchInp = useRef('')
  let [searchParam,setSearchParam] = useSearchParams()
  const timeoutRef = useRef({})
  const handleChange = (e:any) =>{
    searchInp.current = e.target.value
    timeoutRef.current = setTimeout(()=>{
      setSearchParam({search:searchInp.current})
    },1000)
  }
  useEffect(()=>{
    let keyword:string|null = searchParam.get('keyword')
    if(searchInp.current!==''){
      
    }
  })
  return (
    <div>
      <form>
        <input type="text" name="searchInp" id="searchInp" placeholder='Search...'
        onChange={handleChange} />

      </form>
    </div>
  )
}