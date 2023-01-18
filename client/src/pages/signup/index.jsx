import React from "react";
import { Helmet } from "react-helmet";

const Register = () => {
  const handleSignUpForm = () => {};
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
            <label htmlFor="age">Age:</label>
            <input type="number" placeholder="Your Age" />
          </form>
          <button onClick={() => handleSignUpForm()}>REGISTER</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
