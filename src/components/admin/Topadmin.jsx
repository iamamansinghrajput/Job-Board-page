import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Topadmin = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#f6fafd] px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-10 rounded-lg gap-4">
      {/* Left Side */}
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-1 sm:mt-2 text-base sm:text-lg">Manage job postings.</p>
      </div>

      {/* Add Job Button */}
      <a
        href="/addjob"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold text-sm sm:text-base transition"
      >
        <FaPlus size={16} />
        Add Job
      </a>
    </div>
  );
};

export default Topadmin;
