import React from "react";
import "./styles/styles.css";
import { useNavigate } from "react-router-dom";

function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="home-screen">
     
      <div className="content">
        <h1>Welcome to DashBoard</h1>
        <p>Select an option from sidebar to get started</p>
      </div>
    </div>
  );
}
export default HomeScreen;
