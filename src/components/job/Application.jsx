import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseurl } from '../../config/path';


const Application = () => {
  const { jobId } = useParams();

  const [formData, setFormData] = useState({
    userName: '',
    jobId: jobId,
    Name: '',
    email: '',
    number: '',
    dob: '',
    qualification: '',
    skills: ''
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, jobId })); // Ensure jobId updates if URL changes
  }, [jobId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const senduserdb = async (formData) => {
    try {
      const response = await fetch(`${baseurl}/api/addApplication`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Application posted successfully');
        alert('Applied successfully!');
         window.location.href = '/';
      } else {
        console.log(data.message || 'Application failed');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    senduserdb(formData);
  };

  return (
    <div className="mt-8 max-w-xl mx-auto bg-white rounded-lg shadow p-6 border border-gray-300">
      <a href="/jobs" className="text-sm text-blue-600 flex items-center mb-4 hover:underline">
        ← Back to Jobs
      </a>

      <h2 className="text-2xl font-bold text-gray-900">Apply for Job</h2>
      <p className="text-gray-500 mb-6">Submit your application below.</p>

      <form onSubmit={handleSubmit}>
        {/* User Name */}
        <div className="mb-4">
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-1">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Job ID (readonly) */}
        <div className="mb-4">
          <label htmlFor="jobId" className="block text-sm font-medium text-gray-700 mb-1">
            Job ID
          </label>
          <input
            type="text"
            id="jobId"
            name="jobId"
            value={formData.jobId}
            readOnly
            className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-600"
          />
        </div>

        {/* Full Name */}
        <div className="mb-4">
          <label htmlFor="Name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Number */}
        <div className="mb-4">
          <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="number"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* DOB */}
        <div className="mb-4">
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Qualification */}
        <div className="mb-4">
          <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 mb-1">
            Qualification
          </label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Skills */}
        <div className="mb-4">
          <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
            Skills
          </label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Application;
