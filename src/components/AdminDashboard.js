import React, { useState } from "react";
import AddEditProfileForm from "./AddEditprofileForm";
import { profiles } from "./data/profile";

function AdminDashboard() {
  const [profile, setProfile] = useState([
    {
      id: 1,
      name: "John Doe",
      age: 25,
      location: "New York, USA",
      description: "Love outdoor adventures and photography. Let's connect!",
      // photo: image,
      // gallery: [image1, image2, image3],
      interests: ["Hiking", "Photography", "Music"],
      coordinates: { lat: 18.506048, lng: 73.804943 },
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 24,
      location: "Los Angeles, USA",
      description: "Fitness enthusiast, book lover, and foodie.",
      photo: "jane_photo_url",
      gallery: ["image4_url", "image5_url", "image6_url"],
      interests: ["Fitness", "Books", "Food"],
    },
  ]);
  const [editingProfile, setEditingProfile] = useState(null);
  const [showform, setShowForm] = useState(false);

  const handleSave = (profile) => {
    if (profile.id) {
      setProfile((prev) =>
        prev.map((p) => (p.id === profile.id ? profile : p))
      );
    } else {
      setProfile((prev) => [...prev, { ...profile, id: Date.now() }]);
    }
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setProfile((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button
        onClick={() => {
          setEditingProfile(null);
          setShowForm(true);
        }}
      >
        Add Profile
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile) => (
            <tr key={profile.id}>
              <td>{profile.name}</td>
              <td>{profile.age}</td>
              <td>{profile.location}</td>
              <td>{profile.description}</td>
              <td>
                <button
                  onClick={() => {
                    setEditingProfile(profile);
                    setShowForm(true);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(profile.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showform && (
        <AddEditProfileForm
          profile={editingProfile}
          onSave={handleSave}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
}
export default AdminDashboard;
