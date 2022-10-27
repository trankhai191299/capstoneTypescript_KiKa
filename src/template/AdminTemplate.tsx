import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import AdminHeader from "../components/Admin/AdminHeader";

type Props = {};

export default function AdminTemplate({}: Props) {
  return (
    <div className="d-flex flex-row">
      <div>
        <AdminHeader />
      </div>
      <div className="ms-5">
        <Outlet />
      </div>
    </div>
  );
}
