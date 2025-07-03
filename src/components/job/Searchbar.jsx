import React from 'react';

const Searchbar = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by title or company..."
          className="bg-gray-100 rounded-md px-4 py-2 w-full sm:w-3/4 text-gray-700 outline-none"
        />

        {/* Category Dropdown */}
        <select className="bg-gray-100 rounded-md px-4 py-2 w-full sm:w-1/4 text-gray-700 outline-none">
          <option>All Categories</option>
          <option>Engineering</option>
          <option>Marketing</option>
          <option>Design</option>
        </select>
      </div>
    </div>
  );
};

export default Searchbar;
