import React, { useEffect, useRef } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  DanhMucKhoaHoc,
  getCourseByName,
  getCourseCategory,
} from "../redux/reducers/courseReducer";
import { AppDispatch, RootState } from "../redux/configStore";
import Search from "../pages/Search/Search";
import { history } from "..";
type Props = {};


export default function Header({}: Props) {
  const arrCategory = useSelector(
    (rootState: RootState) => rootState?.courseReducer?.courseCategory
  );
  const {searchCourses} = useSelector((state:RootState)=>state.courseReducer)
  const dispatch: AppDispatch = useDispatch();
  const searchKhoaHoc = useRef('')
  let [searchParam,setSearchParam] = useSearchParams()
  const timeoutRef = useRef({})
  React.useEffect(() => {
    //call api = action thunk
    const actionApi = getCourseCategory();
    dispatch(actionApi);
  }, []);
  useEffect(()=>{
    let keyword:string|null = searchParam.get('keyword')
    if(searchKhoaHoc.current!==''){
      dispatch(getCourseByName(keyword))
    }
  },[searchKhoaHoc.current])
  useEffect(()=>{
    renderSearchOrHome()
  },[searchCourses])
  const renderCategory = () => {
   return arrCategory.map((cate: DanhMucKhoaHoc,index: number) => {
     return(
      <li key={index}>
        <a href="#" className="dropdown-item">{cate.tenDanhMuc}</a>
      </li>
     )
   })
  };
  const handleChange = (e:any) =>{
    searchKhoaHoc.current = e.target.value
    timeoutRef.current = setTimeout(()=>{
      setSearchParam({keyword:searchKhoaHoc.current})
    },1000)
  }
  const renderSearchOrHome = () =>{
    if(searchCourses.length !== 0 || searchKhoaHoc.current !== ''){
      history.push('/search',searchCourses)
    }else if(searchKhoaHoc.current === ''){
      history.push('/home')
    }
  }
  
  return (
    <header className="py-3 border-bottom">
      <div
        className="container-fluid d-grid gap-3 align-items-center"
        style={{ gridTemplateColumns: "1fr 2fr" }}
      >
        <div className="dropdown row">
          <NavLink
            to="/"
            className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none"
          >
            <img height="50" src="./img/logo-cyber-2.png" alt="..." />
          </NavLink>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <a
            href="#"
            className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img height="20" src="./img/bar.png" alt="" />
            <p className="mt-3">Danh muc khoa hoc</p>
          </a>
          <ul className="dropdown-menu text-small shadow">
            {renderCategory()}
            {/* <li>
              <a className="dropdown-item" href="#">
                Inventory
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Customers
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Products
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Reports
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Analytics
              </a>
            </li> */}
          </ul>
          <form className="w-50 me-3" role="search">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
              name='searchKhoaHoc'
              id="searchKhoaHoc"
              onChange={handleChange}
            />
          </form>
          <div className="flex-shrink-0 dropdown">
            <a
              href="#"
              className="d-block link-dark text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://picsum.photos/200"
                alt="mdo"
                width={32}
                height={32}
                className="rounded-circle"
              />
            </a>
            <ul className="dropdown-menu text-small shadow">
              <li>
                <NavLink className="dropdown-item" to={"/userinform"}>
                  Profile
                </NavLink>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
