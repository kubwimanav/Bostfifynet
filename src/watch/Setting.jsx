import './Setting.css'
import { FaExchangeAlt } from "react-icons/fa"; 
import { MdOutlineDarkMode } from "react-icons/md";
import { MyContext } from '../context/Context';
import { useState } from 'react';
const Setting = () => {
  
  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    window.location.href = "/";
  };
     const { loggedUser } = MyContext();

     const [user, setUser] = useState({
       firstName: `${loggedUser?.user.FullName}`,
       lastName: `${loggedUser?.user.FullName}`,
       email: `${loggedUser?.user.Email}`,
       TelNumber: `${loggedUser?.user.TelNumber}`,
       accountStatus: `${loggedUser?.user.accountStatus}`,
       role: `${loggedUser?.user.role}`,
       PaymentMethod: `${loggedUser?.user.PaymentMethod}`,
       Gender: ` ${loggedUser?.user.Gender}`,
       image: ` ${loggedUser?.user.image}`,
       Country: `${loggedUser?.user.Country}`,
     });

  
  //  const [profilePicture, setProfilePicture] = useState(
  //   "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
  // );

  // const handleUpdateProfile = () => {
  //   setUser({ ...editedUser });
  //   setEditMode(false);
  // };

  // const handleUpdateProfilePicture = (e) => {
  //   const file = e.target.files[0];

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setProfilePicture(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };
    return (
      <form className="settingss">
        <div className="setting">
          <div className="setting-parag">
            <div className="setting-detail">
              <div className="setting-d">
                <b>Profile Settings</b>

                <div className="setting-d">
                  <p>Name</p>

                  <input
                    type="text"
                    placeholder={user.lastName}
                    className="setting-input"
                  ></input>
                </div>

                <p className="setting-d">
                  <p>Phone</p>

                  <input
                    type="text"
                    placeholder={user.TelNumber}
                    className="setting-input"
                  ></input>
                </p>
                <p className="setting-d">
                  <p>Email</p>
                  <input
                    type="text"
                    placeholder={user.email}
                    className="setting-input"
                  ></input>
                </p>
              </div>

              <div className="setting-d">
                <b>Language Settings</b>
                <p> English </p>
                <p className="setting-details">
                  Change Language{" "}
                  <p>
                    <FaExchangeAlt />
                  </p>
                </p>
                <b> Account status</b>
                <input
                  type="text"
                  placeholder={user.accountStatus}
                  className="setting-input"
                ></input>
                <b> Account Role</b>
                <input
                  type="text"
                  placeholder={user.role}
                  className="setting-input"
                ></input>
              </div>
            </div>

            <div className="setting-detail">
              <div className="setting-d">
                <b>Payment Settings</b>
                <p>Payment Method</p>
                <input
                  type="text"
                  placeholder={user.PaymentMethod}
                  className="setting-input"
                ></input>
              </div>

              <div className="setting-d">
                <b>Mode Setting</b>
                <p className="setting-details">
                  Change mode:
                  <p>
                    <MdOutlineDarkMode />
                  </p>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="setting-images">
            <div>
              <img src={loggedUser?.user.image} className="setting-imag" />
            </div>
          </div>
        </div>
        <div className="settings-buttons">
          <div className="setting-d">
            <b>Logout Option</b>
            <button onClick={handleLogout} className="setting-button">Logout</button>
          </div>
          <div className="setting-d">
            <b> Save Your Edit</b>
            <button className="setting-button">Save</button>
          </div>
        </div>
      </form>
    );
} ;
export default Setting