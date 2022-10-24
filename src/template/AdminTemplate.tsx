import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import AdminHeader from "../components/Admin/AdminHeader";

type Props = {};

export default function AdminTemplate({}: Props) {
  return (
    <div className="row">
      <div className="col-lg-4">
        <AdminHeader />
      </div>
      <div className="col-lg-8">
        <Outlet />
      </div>
    </div>
  );
}
