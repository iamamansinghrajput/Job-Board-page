import React, { useState } from 'react';
import Jobbox from './Jobbox';

const Jobstore = () => {
  const store = [
    {
      title: "Frontend Developer",
      company: "Aman",
      location: "Patna",
      category: "Designer",
      description: "I want a job."
    },
    {
      title: "Frontend Developer",
      company: "TCS",
      location: "Kolkata",
      category: "Developer",
      description: "Looking for frontend development job."
    },
    {
      title: "Frontend Developer",
      company: "Rupsa",
      location: "Ara",
      category: "Developer",
      description: "Interested in creative development opportunities."
    }
  ];

  const [arr, setArr] = useState(store);

  return (
    <section className="px-4 py-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Latest Job Openings</h2>
      <div className="space-y-5">
        {arr.map((item, index) => (
          <Jobbox key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Jobstore;
