import React, { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
type Props = {
    
}

export default function TestKhai({}: Props) {
  return (
    <>
        <Outlet/>
    </>
  )
}