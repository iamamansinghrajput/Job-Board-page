import React from 'react';

const Application = () => {
  return (
    <div className="mt-8 max-w-xl mx-auto bg-white rounded-lg shadow p-6 border border-gray-300 ">
      <a href="/jobs" className="text-sm text-blue-600 flex items-center mb-4 hover:underline">
        ← Back to Jobs
      </a>

      <h2 className="text-2xl font-bold text-gray-900">Apply for Frontend Developer</h2>
      <p className="text-gray-500 mb-6">Submit your application to Tech Corp.</p>

      <form>
        <div className="mb-4">
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-1">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="jobIde" className="block text-sm font-medium text-gray-700 mb-1">
            Job ID
          </label>
          <input
            type="text"
            id="jobIde"
            className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="gmail" className="block text-sm font-medium text-gray-700 mb-1">
            G-mail
          </label>
          <input
            type="text"
            id="gmail"
            className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
            Number
          </label>
          <input
            type="number"
            id="number"
            className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth
          </label>
          <input
            type="text"
            id="dob"
            className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 mb-1">
            Qualification
          </label>
          <input
            type="text"
            id="qualification"
            className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="skill" className="block text-sm font-medium text-gray-700 mb-1">
            Skills
          </label>
          <input
            type="text"
            id="skill"
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
