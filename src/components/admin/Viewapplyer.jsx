import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const Viewapplyer = () => {
  const applicants = [
    {
      name: 'Regular User',
      email: 'user@jobboard.com',
      appliedOn: 'October 1st, 2023',
      status: 'Reviewed',
    },
    {
      name: 'Regular User',
      email: 'user@jobboard.com',
      appliedOn: 'October 1st, 2023',
      status: 'Reviewed',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6fafd] py-8 px-6">
      <a href="/admin"
         className="mb-6 flex items-center gap-2 text-blue-600 text-lg font-semibold cursor-pointer w-fit">
        <FaArrowLeft />
         <span>Back to Dashboard</span>
         </a>


      {/* Card */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h2 className="text-3xl font-bold text-gray-900">Applicants for Frontend Developer</h2>
        <p className="text-lg text-gray-600 mt-2">
          A list of candidates who have applied for this position at{' '}
          <span className="text-blue-500 font-semibold">Tech Corp</span>.
        </p>

        {/* Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-base">
            <thead className="text-gray-500 uppercase border-b-2">
              <tr>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Applied On</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Resume</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((applicant, index) => (
                <tr key={index} className="border-t">
                  <td className="py-4 px-4 font-medium text-gray-900">{applicant.name}</td>
                  <td className="py-4 px-4">{applicant.email}</td>
                  <td className="py-4 px-4">{applicant.appliedOn}</td>
                  <td className="py-4 px-4">
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {applicant.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="bg-white border text-blue-900 px-4 py-2 rounded-md hover:bg-gray-50 text-sm font-semibold">
                      View Resume
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Viewapplyer;
