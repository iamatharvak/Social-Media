import React from "react";
import Sidebar from "./Sidebar";
import "./styles/Layout.css";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
