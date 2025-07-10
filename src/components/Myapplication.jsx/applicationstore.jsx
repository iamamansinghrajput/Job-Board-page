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
    <section className="min-h-screen px-4">
      
      <div className="space-y-4">
        {user.map((item, index) => (
          <Applicationbox key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Applicationstore;
