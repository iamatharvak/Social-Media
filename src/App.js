import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import Connections from "./components/Connections";
import Settings from "./components/Settings";
import "./App.css";
import Layout from "./components/Layout";
import ProfilePage from "./components/Profilepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
