import React, { useState } from "react";
import { MyContext } from "../context/Context";
import "./ProfileView.css";

const Profileview = () => {
  const { loggedUser } = MyContext();

  const [user, setUser] = useState({
    firstName: `${loggedUser?.user.FullName}`,
    lastName: `${loggedUser?.user.FullName}`,
    email: `${loggedUser?.user.Email}`,
    accountStatus: `${loggedUser?.user.accountStatus}`,
    role: `${loggedUser?.user.role}`,
    PaymentMethod: `${loggedUser?.user.PaymentMethod}`,
    Gender: ` ${loggedUser?.user.Gender}`,
    Country: `${loggedUser?.user.Country}`,
  });

  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });
  const [profilePicture, setProfilePicture] = useState(
    "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
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
    <div className="profile-contents">
      <div className="user-profile">
        <div className="profile-columns">
          <div className="profile-picture">
            <img src={profilePicture} alt="Profile" />
            {editMode && (
              <div className="file-input">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUpdateProfilePicture}
                  style={{ color: "#1919" }}
                  className="file-input"
                />
              </div>
            )}
          </div>
        </div>
        <div className="info-column">
          <div className="user-informp">
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
                  className="profile-input"
                />
              ) : (
                <input
                  placeholder={user.firstName}
                  className="profiles-input"
                ></input>
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
                  className="profile-input"
                />
              ) : (
                <input
                  style={{ color: "#191943" }}
                  placeholder={user.lastName}
                  className="profiles-input"
                ></input>
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
                  className="profile-input"
                />
              ) : (
                <input
                  style={{ color: "#191943" }}
                  placeholder={user.email}
                  className="profiles-input"
                ></input>
              )}
            </div>

            <div className="field">
              <span className="label" style={{ color: "#191943" }}>
                Country:
              </span>
              {editMode ? (
                <input
                  type="email"
                  value={editedUser.Country}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, Country: e.target.value })
                  }
                  className="profile-input"
                />
              ) : (
                <input
                  style={{ color: "#191943" }}
                  placeholder={user.Country}
                  className="profiles-input"
                ></input>
              )}
            </div>

            <div className="field">
              <span className="label" style={{ color: "#191943" }}>
                Gender:
              </span>
              {editMode ? (
                <input
                  type="email"
                  value={editedUser.Gender}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, Gender: e.target.value })
                  }
                  className="profile-input"
                />
              ) : (
                <input
                  style={{ color: "#191943" }}
                  placeholder={user.Gender}
                  className="profiles-input"
                ></input>
              )}
            </div>

            <div className="field">
              <span className="label" style={{ color: "#191943" }}>
                PaymentMethod:
              </span>
              {editMode ? (
                <input
                  type="email"
                  value={editedUser.PaymentMethod}
                  onChange={(e) =>
                    setEditedUser({
                      ...editedUser,
                      PaymentMethod: e.target.value,
                    })
                  }
                  className="profile-input"
                />
              ) : (
                <input
                  style={{ color: "#191943" }}
                  placeholder={user.PaymentMethod}
                  className="profiles-input"
                ></input>
              )}
            </div>

            <div className="field">
              <span className="label" style={{ color: "#191943" }}>
                Role:
              </span>
              {editMode ? (
                <input
                  type="email"
                  value={editedUser.role}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, role: e.target.value })
                  }
                  className="profile-input"
                />
              ) : (
                <input
                  style={{ color: "#191943" }}
                  placeholder={user.role}
                  className="profiles-input"
                ></input>
              )}
            </div>

            <div className="field">
              <span className="label" style={{ color: "#191943" }}>
                Account Status:
              </span>
              {editMode ? (
                <input
                  type="email"
                  value={editedUser.accountStatus}
                  onChange={(e) =>
                    setEditedUser({
                      ...editedUser,
                      accountStatus: e.target.value,
                    })
                  }
                  className="profile-input"
                />
              ) : (
                <input
                  style={{ color: "#191943" }}
                  placeholder={user.accountStatus}
                  className="profiles-input"
                ></input>
              )}
            </div>
          </div>
          <div className="actions">
            {editMode ? (
              <>
                <button className="button12" onClick={handleUpdateProfile}>
                  Save
                </button>
                <button className="button12" onClick={() => setEditMode(false)}>
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditMode(true)}
                className="editprofile-button"
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
export default Profileview;
