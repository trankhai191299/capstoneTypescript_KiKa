import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import AdminHeader from "../components/Admin/AdminHeader";
import AdminNavbar from "../components/Admin/AdminNavbar";

type Props = {};

export default function AdminTemplate({}: Props) {
  return (
    <div className="row">
      <div className="col-lg-3">
        <AdminHeader />
      </div>
      <div className="col-lg-9">
        <AdminNavbar/>
        <Outlet />
      </div>
    </div>
  );
}
