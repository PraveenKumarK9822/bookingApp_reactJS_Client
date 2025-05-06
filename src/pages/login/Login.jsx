import React, { useContext, useState } from "react";
import "./login.scss";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ErrorIcon from "@mui/icons-material/Error";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      if (res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        navigate("/");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed to login!" },
        });
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginHeader">
          <h1>Dada booking..</h1>
          <h2>Sign in</h2>
        </div>
        <input
          type="text"
          placeholder="username"
          id="username"
          className="loginInput"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="loginInput"
          onChange={handleChange}
        />
        <button
          className="loginButton"
          disabled={loading}
          onClick={handleClick}
        >
          Login
        </button>
        {error && (
          <span>
            <ErrorIcon className="icon" />
            {error.message}
          </span>
        )}
      </div>
    </div>
  );
};

export default Login;
