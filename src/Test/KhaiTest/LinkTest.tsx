import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

export default function LinkTest({}: Props) {
  return (
    <div className='container'>
        <div className='display-4 fw-bold text-center'>Test chỗ này nha</div>
        <hr />
        <div className="d-flex flex-column align-item-center justify-content-between">
            <NavLink to={'/testkhai/test1'} className='my-2' style={{fontSize:'15px'}}>---Test 1---</NavLink>
            <NavLink to={'/testkhai/test2'} className='my-2' style={{fontSize:'15px'}}>---Test 2---</NavLink>
            <NavLink to={'/testkhai/test3'} className='my-2' style={{fontSize:'15px'}}>---Test 3---</NavLink>
        </div>
    </div>
    
  )
}