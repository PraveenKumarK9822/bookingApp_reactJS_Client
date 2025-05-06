import React, { useContext, useState } from "react";
import "./NavBar.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="navBar">
      <div className="navContainer">
        <Link to="/" className="logoWrapper">
          <span className="logo">Dada booking</span>
        </Link>
        {user ? (
          <div className="rightItems">
            <img
              src={user?.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
              alt={user.username}
              className="avatar"
            />
            <span className="username">{user.username}</span>
            <FontAwesomeIcon
              icon={faBars}
              className="icon"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        ) : (
          <div className="navItems">
            <button className="navbutton">Register</button>
            <button className="navbutton" onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
        )}
      </div>
      {isOpen && (
        <div className="dropdown">
          <div className="dropdownItem">Profile</div>
          <div className="dropdownItem">Settings</div>
          <div className="dropdownItem" onClick={handleLogout}>
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
