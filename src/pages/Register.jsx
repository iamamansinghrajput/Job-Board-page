import React, { useState } from "react";
import {baseurl} from '../config/path'

const Register = () => {

  const [formData, setFormData] = useState({
    userName: "",
    firstName: "",
    lastName:"",
    email: "",
    password: "",
    number: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
       async function senduserdb (formData){
            try {
               const response = await fetch(`${baseurl}/api/register`, {
                method: "POST",
                credentials: 'include', 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
              });

                const data= await response.json();
                if (response.ok){
                    console.log("register is succesfull");
                    alert("registration succesfull");
                }
                else{
                    console.log(data.message||"register failed");
                }
                
            } catch (error) {
                console.log(error);
            }
        }



   const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    senduserdb(formData);
  };
  return (
    <div className="mt-8 min-h-screen flex items-center justify-center bg-[#f8fbff]">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h2>
        <form id="registerForm" className="space-y-4 " onSubmit={handleSubmit} >
          
          {/* Username */}
          <div>
            <label htmlFor="userName" className="block text-gray-700 font-medium mb-1">Username</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
            onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-gray-700 font-medium mb-1">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
            onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-gray-700 font-medium mb-1">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
            onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
            onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
            onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="number" className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              type="number"
              id="number"
              name="number"
              value={formData.number}
            onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label htmlFor="dob" className="block text-gray-700 font-medium mb-1">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
            onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
