// src/components/Login.js
import React from "react";
import { useDispatch } from "react-redux";

const Login = ({ username, password }) => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch({ type: "LOGIN", payload: { username, password } });
  };

  return (
    <div>
      <input type="text" placeholder="Username" value={username} />
      <input type="password" placeholder="Password" value={password} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
