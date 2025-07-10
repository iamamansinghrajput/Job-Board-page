import React from 'react';

const Jobbox = ({ data }) => {
  const { title, company, location, category, description } = data;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 w-full max-w-md mx-auto border border-gray-200 hover:shadow-md transition duration-200">
      {/* Job Title & Category */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
        <span className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
          {category}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 mt-4 leading-relaxed">
        {description}
      </p>

      {/* Location */}
      <p className="text-xs text-gray-400 mt-4 italic">{location}</p>

      {/* Apply Button */}
     <a href="/application" // Replace with your route
      className="mt-5 w-full block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold text-sm"
      >
      Apply Now
     </a>

    </div>
  );
};

export default Jobbox;
