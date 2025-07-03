import React, { useState } from "react";
// import axios from "axios";

const Register = () => {
  

  return (
    <div className="container mt-5">
      <h2>Register</h2>
    <form id="registerForm">
      <label for="userName">Username</label>
      <input type="text" id="userName" name="userName" required />

      <label for="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" required />

      <label for="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" />

      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label for="password">Password</label>
      <input type="password" id="password" name="password" required />

      <label for="number">Phone Number</label>
      <input type="number" id="number" name="number" required />

      <label for="dob">Date of Birth</label>
      <input type="date" id="dob" name="dob" required />

      <button type="submit">Register</button>
    </form>

    </div>
  );
};

export default Register;
