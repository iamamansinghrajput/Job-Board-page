import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { baseurl } from '../../config/path';

const Addjob = () => {
  const [formData, setFormData] = useState({
    userName: '',
    title: '',
    company: '',
    location: '',
    category: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const sendJob = async (formData) => {
    try {
      const response = await fetch(`${baseurl}/api/addJob`, {
        method: "POST",
        credentials: 'include',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Job creation successful");
        alert("Job created successfully");
      } else {
        console.log(data.message || "Job creation failed");
        alert(data.message || "Job creation failed");
      }
    } catch (error) {
      console.error("Error creating job:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    sendJob(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="relative bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <a
          href="/admin"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
          aria-label="Close"
        >
          <FaTimes />
        </a>

        <h2 className="text-2xl font-semibold mb-2 text-center">Add Job</h2>
        <p className="text-gray-600 text-center mb-6">Fill in the details for the new job posting.</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {["userName", "title", "company", "location", "category"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Job Description"
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Save Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addjob;
