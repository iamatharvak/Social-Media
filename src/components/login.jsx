import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";

function Login() {
  const [selectedRole, setSelectedRole] = useState(""); // State for selected role
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    setSelectedRole(role); 
    setError(""); 
  };

  const handleLogin = () => {
    setError("Incorrect username or password. Please try again.");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome to Connections</h1>
        <p>Select an option to proceed:</p>
        <div className="login-buttons">
          <button
            className={`login-option ${
              selectedRole === "admin" ? "active" : ""
            }`}
            onClick={() => handleRoleSelection("admin")}
          >
            Admin Login
          </button>
          <button
            className={`login-option ${
              selectedRole === "user" ? "active" : ""
            }`}
            onClick={() => handleRoleSelection("user")}
          >
            User Login
          </button>
        </div>
        {selectedRole && (
          <form
            className="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <h2>{selectedRole === "admin" ? "Admin" : "User"} Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="login-submit">
              Login
            </button>
            {error && <p className="error-message">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
