import React from "react";
import { Helmet } from "react-helmet";
import "./index.scss";
const Login = () => {
  const handleloginForm = () => {};
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register Form</title>
      </Helmet>
      <div className="container">
        <div className="login">
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder=" Your Name" />
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" placeholder="Your username" />
          </form>
          <button onClick={() => handleloginForm()}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
