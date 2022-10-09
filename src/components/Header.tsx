import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  DanhMucKhoaHoc,
  getCourseCategory,
} from "../redux/reducers/courseReducer";
import { AppDispatch, RootState } from "../redux/configStore";
type Props = {};


export default function Header({}: Props) {
  const arrCategory = useSelector(
    (rootState: RootState) => rootState?.courseReducer?.courseCategory
  );
  const dispatch: AppDispatch = useDispatch();
  React.useEffect(() => {
    //call api = action thunk
    const actionApi = getCourseCategory();
    dispatch(actionApi);
  }, []);
  const renderCategory = () => {
   return arrCategory.map((cate: DanhMucKhoaHoc,index: number) => {
     return(
      <li key={index}>
        <a href="#" className="dropdown-item">{cate.tenDanhMuc}</a>
      </li>
     )
   })
  };
  return (
    <header className="py-3 mb-3 border-bottom">
      <div
        className="container-fluid d-grid gap-3 align-items-center"
        style={{ gridTemplateColumns: "1fr 2fr" }}
      >
        <div className="dropdown row">
          <a
            href="#"
            className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none"
          >
            <img height="50" src="./img/logo-cyber-2.png" alt="..." />
          </a>
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
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
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
