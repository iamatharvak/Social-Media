import React, { useState } from "react";
import "./styles/styles.css";
import { profiles } from "./data/profile";
import { Link } from "react-router-dom";

function HomeScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredprofiles, setFilteredProfiles] = useState(profiles);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = profiles.filter(
      (profile) =>
        profile.name.toLowerCase().includes(value.toLowerCase()) ||
        profile.description.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProfiles(filtered);
  };

  return (
    <div className="home-screen">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for profiles..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="profile-list">
        {searchTerm && filteredprofiles.length > 0 ? (
          filteredprofiles.map((profile) => (
            <div className="profile-card" key={profile.id}>
              <img src={profile.photo} alt={profile.name} />
              <h3>{profile.name}</h3>
              <p>{profile.description}</p>
              <Link to={`profile/${profile.id}`}>
                <button>View profile</button>
              </Link>
            </div>
          ))
        ) : (
          <p>Start Connecting</p>
        )}
      </div>
    </div>
  );
}
export default HomeScreen;
