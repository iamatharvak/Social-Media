import React, { useState } from "react";
import AddEditProfileForm from "./AddEditprofileForm";
import "./styles/Admin.css";

function AdminDashboard() {
  const [profile, setProfile] = useState([
    {
      id: 1,
      name: "John Doe",
      age: 25,
      location: "New York, USA",
      description: "Love outdoor adventures and photography. Let's connect!",
      interests: ["Hiking", "Photography", "Music"],
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 24,
      location: "Los Angeles, USA",
      description: "Fitness enthusiast, book lover, and foodie.",
      interests: ["Fitness", "Books", "Food"],
    },
  ]);

  const [editingProfile, setEditingProfile] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSave = (updatedProfile) => {
    if (!loggedIn) {
      setShowModal(true);
      return;
    }

    // if (updatedProfile.id) {

    //   setProfile((prev) =>
    //     prev.map((p) => (p.id === updatedProfile.id ? updatedProfile : p))
    //   );
    // } else {

    //   setProfile((prev) => [...prev, { ...updatedProfile, id: Date.now() }]);
    // }
    // setShowForm(false);
  };

  const handleDelete = (id) => {
    if (!loggedIn) {
      setShowModal(true);
      return;
    }
    setProfile((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <button
        className="add-button"
        onClick={() => {
          if (!loggedIn) {
            setShowModal(true);
            return;
          }
          setEditingProfile(null);
          setShowForm(true);
        }}
      >
        Add Profile
      </button>
      <table className="profile-table">
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
          {profile.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.location}</td>
              <td>{p.description}</td>
              <td>
                <button
                  className="edit-button"
                  onClick={() => {
                    if (!loggedIn) {
                      setShowModal(true);
                      return;
                    }
                    setEditingProfile(p);
                    setShowForm(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(p.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showForm && (
        <AddEditProfileForm
          profile={editingProfile}
          onSave={handleSave}
          onCancel={() => setShowForm(false)}
        />
      )}

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

export default AdminDashboard;
