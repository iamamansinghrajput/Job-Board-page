import React from 'react';

const Jobbox = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto border border-t-4 border-gray-200">
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-semibold text-gray-900">Frontend Developer</h2>
        <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
          Engineering
        </span>
      </div>

      <p className="text-sm text-gray-500 mt-1">Tech Corp</p>

      <p className="text-gray-600 mt-3">
        We are looking for a skilled frontend developer to join our team.
      </p>

      <p className="text-gray-500 text-sm mt-4">Remote</p>

      <button className="mt-5 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-medium">
        Apply Now
      </button>
    </div>
  );
};

export default Jobbox;
