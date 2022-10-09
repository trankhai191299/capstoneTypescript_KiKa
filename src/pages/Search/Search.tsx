import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
  // searchInput:string,
  searchCourses? : [],
}

export default function Search({searchCourses}: Props) {
  console.log(searchCourses);
  
  return (
    <div className='search'>
      <div className="container">
        <h2>Tìm thấy 3 khóa học Front End</h2>
        <div className="search-results mt-4">
          <div className="row">
            <NavLink to={'/'} className="col-12 item">
              <div className="result">
                <div className="row">
                  <div className="col-2">
                    <img src="https://picsum.photos/100/100" alt="..."/>
                  </div>
                  <div className="col-10">
                    <h4 className='title'>Lập trình font-end với react js</h4>
                    <p className='description'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam alias quam modi iure ipsa, quidem cumque numquam, repellendus rerum nisi nobis quibusdam perferendis quis repellat. Reprehenderit, possimus? Et, quod repudiandae culpa officia quam numquam, quibusdam dolorem eaque, inventore dolorum deleniti.
                    </p>
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink to={'/'} className="col-12 item">
              <div className="result">
                <div className="row">
                  <div className="col-2">
                    <img src="https://picsum.photos/100/100" alt="..."/>
                  </div>
                  <div className="col-10">
                    <h4 className='title'>Lập trình font-end với react js</h4>
                    <p className='description'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam alias quam modi iure ipsa, quidem cumque numquam, repellendus rerum nisi nobis quibusdam perferendis quis repellat. Reprehenderit, possimus? Et, quod repudiandae culpa officia quam numquam, quibusdam dolorem eaque, inventore dolorum deleniti.
                    </p>
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink to={'/'} className="col-12 item">
              <div className="result">
                <div className="row">
                  <div className="col-2">
                    <img src="https://picsum.photos/100/100" alt="..."/>
                  </div>
                  <div className="col-10">
                    <h4 className='title'>Lập trình font-end với react js</h4>
                    <p className='description'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam alias quam modi iure ipsa, quidem cumque numquam, repellendus rerum nisi nobis quibusdam perferendis quis repellat. Reprehenderit, possimus? Et, quod repudiandae culpa officia quam numquam, quibusdam dolorem eaque, inventore dolorum deleniti.
                    </p>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="list-page text-center">
            <p>prev 1 2 3 4 5 next</p>
          </div>
        </div>
      </div>
    </div>
  )
}