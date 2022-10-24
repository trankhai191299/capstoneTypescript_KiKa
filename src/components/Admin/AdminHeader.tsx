import React from "react";
import {NavLink} from "react-router-dom"

export default function AdminHeader() {
  return (
      <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: 280, height: "100vh" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width={40} height={32}>
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            <svg className="bi pe-none me-2" width={13} height={16}>
              <use xlinkHref="#home" />
            </svg>
            Home
          </a>
        </li>
        <li className="nav-item">
          <div>
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed text-white"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="false"
            >
              <svg className="bi pe-none me-2" width={16} height={16}>
                <use xlinkHref="#speedometer2" />
              </svg>
              Dashboard
            </button>
            <div className="collapse" id="dashboard-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <NavLink
                    to={"/admin/usermanagement"}
                    className="link-white d-inline-flex text-decoration-none rounded text-white pb-2 pt-2 ms-5"
                  >
                    User Management
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/admin/coursemanagement"}
                    className="link-white d-inline-flex text-decoration-none rounded text-white pb-2 pt-2 ms-5"
                  >
                    Courese Management
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
      {/* <hr /> */}
      {/* <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            width={32}
            height={32}
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
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
      </div> */}
    </div>
    // <header>
    //   {/* Sidebar */}
    //   <nav
    //     id="sidebarMenu"
    //     className="collapse d-lg-block sidebar collapse bg-white"
    //   >
    //     <div className="sidebar-sticky">
    //       <div className="list-group list-group-flush mx-3 mt-4">
    //         <a
    //           href="#"
    //           className="list-group-item list-group-item-action py-2 ripple"
    //           aria-current="true"
    //         >
    //           <i className="fas fa-tachometer-alt fa-fw me-3" />
    //           <span>Main dashboard</span>
    //         </a>
    //         <a
    //           href="#"
    //           className="list-group-item list-group-item-action py-2 ripple active"
    //         >
    //           <i className="fas fa-chart-area fa-fw me-3" />
    //           <span>Webiste traffic</span>
    //         </a>
    //       </div>
    //     </div>
    //   </nav>
    //   {/* Sidebar */}
    //   {/* Navbar */}
    //   <nav
    //     id="main-navbar"
    //     className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
    //   >
    //     {/* Container wrapper */}
    //     <div className="container-fluid">
    //       {/* Toggle button */}
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-mdb-toggle="collapse"
    //         data-mdb-target="#sidebarMenu"
    //         aria-controls="sidebarMenu"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <i className="fas fa-bars" />
    //       </button>
    //       {/* Brand */}
    //       <a className="navbar-brand" href="#">
    //         <img
    //           src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
    //           height={25}
    //           loading="lazy"
    //         />
    //       </a>
    //       {/* Search form */}
    //       <form className="d-none d-md-flex input-group w-auto my-auto">
    //         <input
    //           autoComplete="off"
    //           type="search"
    //           className="form-control rounded"
    //           placeholder='Search (ctrl + "/" to focus)'
    //           style={{ minWidth: 225 }}
    //         />
    //         <span className="input-group-text border-0">
    //           <i className="fas fa-search" />
    //         </span>
    //       </form>
    //       {/* Right links */}
    //       <ul className="navbar-nav ms-auto d-flex flex-row">
    //         {/* Notification dropdown */}
    //         <li className="nav-item dropdown">
    //           <a
    //             className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
    //             href="#"
    //             id="navbarDropdownMenuLink"
    //             role="button"
    //             data-mdb-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             <i className="fas fa-bell" />
    //             <span className="badge rounded-pill badge-notification bg-danger">
    //               1
    //             </span>
    //           </a>
    //           <ul
    //             className="dropdown-menu dropdown-menu-end"
    //             aria-labelledby="navbarDropdownMenuLink"
    //           >
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Some news
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Another news
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Something else here
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //         {/* Icon */}
    //         <li className="nav-item">
    //           <a className="nav-link me-3 me-lg-0" href="#">
    //             <i className="fas fa-fill-drip" />
    //           </a>
    //         </li>
    //         {/* Icon */}
    //         <li className="nav-item me-3 me-lg-0">
    //           <a className="nav-link" href="#">
    //             <i className="fab fa-github" />
    //           </a>
    //         </li>
    //         {/* Icon dropdown */}
    //         <li className="nav-item dropdown">
    //           <a
    //             className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
    //             href="#"
    //             id="navbarDropdown"
    //             role="button"
    //             data-mdb-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             <i className="united kingdom flag m-0" />
    //           </a>
    //           <ul
    //             className="dropdown-menu dropdown-menu-end"
    //             aria-labelledby="navbarDropdown"
    //           >
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 <i className="united kingdom flag" />
    //                 English
    //                 <i className="fa fa-check text-success ms-2" />
    //               </a>
    //             </li>
    //             <li>
    //               <hr className="dropdown-divider" />
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 <i className="poland flag" />
    //                 Polski
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 <i className="china flag" />
    //                 中文
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 <i className="japan flag" />
    //                 日本語
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 <i className="germany flag" />
    //                 Deutsch
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 <i className="france flag" />
    //                 Français
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 <i className="spain flag" />
    //                 Español
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 <i className="russia flag" />
    //                 Русский
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 <i className="portugal flag" />
    //                 Português
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //         {/* Avatar */}
    //         <li className="nav-item dropdown">
    //           <a
    //             className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
    //             href="#"
    //             id="navbarDropdownMenuLink"
    //             role="button"
    //             data-mdb-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             <img
    //               src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
    //               className="rounded-circle"
    //               height={22}
    //               loading="lazy"
    //             />
    //           </a>
    //           <ul
    //             className="dropdown-menu dropdown-menu-end"
    //             aria-labelledby="navbarDropdownMenuLink"
    //           >
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 My profile
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Settings
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Logout
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </div>
    //     {/* Container wrapper */}
    //   </nav>
    //   {/* Navbar */}
    // </header>
  );
}
