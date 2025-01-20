import React, { useState } from "react";
import { profiles } from "./data/profile";
import "./styles/connections.css";

function Connections() {
  const [connectedprofile, setConnectedProfile] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleConnect = (profileId) => {
    if (!isLoggedIn) {
      setShowModal(true);
      return;
    }
    if (!connectedprofile.includes(profileId)) {
      setConnectedProfile((prev) => [...prev, profileId]);
    }
  };
  return (
    <div className="container">
      <h1 className="title">Connections</h1>
      <div className="grid">
        {profiles.map((profile) => (
          <div key={profile.id} className="card">
            <img src={profile.photo} alt={profile.name} className="photo" />
            <h2 className="name">{profile.name}</h2>
            <p className="age">{profile.age} years young</p>
            <p className="description">{profile.description}</p>
            <p className="interest">
              <strong>Interests:</strong>
              {profile.interests.join(", ")}
            </p>
            {connectedprofile.includes(profile.id) ? (
              <p className="location">
                <strong>Location:</strong> {profile.location}
              </p>
            ) : (
              <button
                className="connectButton"
                onClick={() => handleConnect(profile.id)}
              >
                Send Connection Request
              </button>
            )}
          </div>
        ))}
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Please Log In</h2>
            <p>You must be logged in to perform this action.</p>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Connections;
