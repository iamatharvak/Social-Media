import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { profiles } from "./data/profile";
import "./styles/Profile.css";
import LocationMap from "./LocationMap";

function ProfilePage() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const foundprofile = profiles.find((p) => p.id === parseInt(id));
    setProfile(foundprofile);
  }, [id]);

  if (!profile) {
    return <div>Loading...</div>;
  }
  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src={profile.photo} alt={profile.name} className="profile-photo" />
        <h2>
          {profile.name},{profile.age}
        </h2>
        <p>{profile.loaction}</p>
      </div>
      <div className="profile-description">
        <p>{profile.description}</p>
      </div>
      <div className="profile-gallery">
        {profile.gallery.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="gallery"
            className="gallery-image"
          />
        ))}
      </div>
      <div className="profile-interests">
        {profile.interests.map((interest, index) => (
          <span key={index} className="interest-tag">
            {interest}
          </span>
        ))}
      </div>
      <LocationMap coordinates={profile.coordinates} name={profile.name} />
      <div className="profile-actions">
        <button>Edit Profile</button>
        <button>Send Message</button>
      </div>
    </div>
  );
}
export default ProfilePage;
