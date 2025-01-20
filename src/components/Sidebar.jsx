import React from "react";
import "./styles/Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active-link">
              Search
            </NavLink>
          </li>
          <li>
            <NavLink to="/connections" activeClassName="active-link">
              Connections
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeClassName="active-link">
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active-link">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
