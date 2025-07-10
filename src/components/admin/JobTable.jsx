import React, { useState, useEffect, useRef } from 'react';
import { FaEllipsisV, FaEdit, FaTrash, FaUserFriends } from 'react-icons/fa';

//jopData
const JobTable = () => {
  const jobData = [
    { title: 'Frontend Developer', company: 'Tech Corp', category: 'Engineering', location: 'Remote' },
    { title: 'UI Designer', company: 'Design Co', category: 'Design', location: 'Onsite' },
    { title: 'Frontend Developer', company: 'Tech Corp', category: 'Engineering', location: 'Remote' },
    { title: 'UI Designer', company: 'Design Co', category: 'Design', location: 'Onsite' },
  ];

  const [dropdownIndex, setDropdownIndex] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="overflow-x-auto rounded-md border border-gray-200 w-full max-w-[1400px] mx-auto relative">
      <table className="w-full bg-white text-left text-base">
        <thead className="bg-gray-50 text-gray-600 uppercase">
          <tr>
            <th className="px-6 py-4 font-semibold">Title</th>
            <th className="px-6 py-4 font-semibold">Company</th>
            <th className="px-6 py-4 font-semibold">Category</th>
            <th className="px-6 py-4 font-semibold">Location</th>
            <th className="px-6 py-4 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 relative">
          {jobData.map((job, index) => (
            <tr key={index} className="hover:bg-gray-50 relative">
              <td className="px-6 py-4 font-semibold text-black">{job.title}</td>
              <td className="px-6 py-4">{job.company}</td>
              <td className="px-6 py-4">{job.category}</td>
              <td className="px-6 py-4">{job.location}</td>
              <td className="px-6 py-4 text-gray-600 relative">
                <button onClick={() => toggleDropdown(index)}>
                  <FaEllipsisV size={16} />
                </button>

                {dropdownIndex === index && (
                  <div
                    ref={dropdownRef}
                    className="absolute right-6 top-10 bg-white shadow-lg rounded-md border z-10 w-44"
                  >
                    <a
                      href="/editjop"
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 w-full"
                    >
                      <FaEdit /> Edit
                    </a>

                    <a
                      href="/viewapplyer"
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                    >
                      <FaUserFriends /> View Applicants
                    </a>

                    <button className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full">
                      <FaTrash /> Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;
