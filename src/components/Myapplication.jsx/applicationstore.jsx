import React, { useState } from 'react';
import Applicationbox from './Applicationbox';

const Applicationstore = () => {
  const applications = [
    {
      title: "Frontend Developer",
      date: "July 5, 2025",
      status: "Submitted"
    },
    {
      title: "UX/UI Designer",
      date: "July 4, 2025",
      status: "Under Review"
    },
    {
      title: "Backend Developer",
      date: "July 3, 2025",
      status: "Interview Scheduled"
    },
    {
      title: "Web Designer",
      date: "July 2, 2025",
      status: "Submitted"
    }
  ];

  const [user, setuser] = useState(applications);

  return (
    <section className="bg-[#f8fbff] min-h-screen py-16 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        My Applications
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Track the status of your job applications.
      </p>

      <div className="space-y-4">
        {user.map((item, index) => (
          <Applicationbox key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Applicationstore;
