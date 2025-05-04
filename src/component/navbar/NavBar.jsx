import React, { useContext } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navBar">
      <div className="navContainer">
        <Link to="/" className="logoWrapper">
          <span className="logo">Dada booking</span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <button className="navbutton">Register</button>
            <button className="navbutton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
