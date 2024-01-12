import React, { useState } from "react";
import "../Styles/Profile.css";
import { MyContext } from "../context/Context";

const Profile = () => {
  const { loggedUser } = MyContext();

  const [user, setUser] = useState({
    firstName: `${loggedUser?.user?.FullName}`,
    lastName: `${loggedUser?.user?.FullName}`,
    email: `${loggedUser?.user?.Email}`,
  });

  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const [profilePicture, setProfilePicture] = useState(
    `${loggedUser?.user?.image}`
  );

  const handleUpdateProfile = () => {
    setUser({ ...editedUser });
    setEditMode(false);
  };

  const handleUpdateProfilePicture = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-cont">
      <div className="user-profile">
        <div className="profile-column">
          <div className="profile-picture">
            <img src={profilePicture} alt="Profile" />
            {editMode && (
              <div className="file-input">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUpdateProfilePicture}
                  style={{ color: "#191943" }}
                />
              </div>
            )}
          </div>
        </div>
        <div className="info-column">
          <div className="user-info">
            <div className="field">
              <span className="label" style={{ color: "#191943" }}>
                First Name:
              </span>
              {editMode ? (
                <input
                  type="text"
                  value={editedUser.firstName}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, firstName: e.target.value })
                  }
                />
              ) : (
                <span style={{ color: "#191943" }}>{user.firstName}</span>
              )}
            </div>
            <div className="field">
              <span className="label" style={{ color: "#191943" }}>
                Last Name:
              </span>
              {editMode ? (
                <input
                  type="text"
                  value={editedUser.lastName}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, lastName: e.target.value })
                  }
                />
              ) : (
                <span style={{ color: "#191943" }}>{user.lastName}</span>
              )}
            </div>
            <div className="field">
              <span className="label" style={{ color: "#191943" }}>
                Email:
              </span>
              {editMode ? (
                <input
                  type="email"
                  value={editedUser.email}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, email: e.target.value })
                  }
                />
              ) : (
                <span style={{ color: "#191943" }}>{user.email}</span>
              )}
            </div>
          </div>
          <div className="actions">
            {editMode ? (
              <>
                <button
                  className="button1"
                  onClick={handleUpdateProfile}
                  style={{ backgroundColor: "#191943", color: "white" }}
                >
                  Save
                </button>
                <button
                  className="button1"
                  onClick={() => setEditMode(false)}
                  style={{ backgroundColor: "#191943", color: "white" }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditMode(true)}
                style={{ backgroundColor: "#191943", color: "white" }}
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
