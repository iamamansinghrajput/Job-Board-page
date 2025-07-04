import React, { useState } from 'react';
import Jobbox from './Jobbox';

const Jobstore = () => {
  const store = [
    {
      title: "Frontend Developer",
      company: "Tech Corp",
      location: "Remote",
      category: "Engineering",
      description: "We are looking for a skilled frontend developer to join our team."
    },
    {
      title: "UX/UI Designer",
      company: "Creative Inc.",
      location: "New York, NY",
      category: "Design",
      description: "Create amazing user experiences for our products."
    },
    {
      title: "Backend Developer",
      company: "Innovate Ltd",
      location: "Bangalore",
      category: "Engineering",
      description: "Seeking backend engineers to build scalable APIs."
    },
      {
    title: "Web Designer",
    company: "Amazon.",
    location: "Hyderabad",
    category: "Engineering",
    description: "Create beautiful and user-friendly designs for websites and apps..",
  }
  ];

  const [arr, setArr] = useState(store);

  return (
    <section className="px-4 py-8 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Latest Job Openings</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {arr.map((item, index) => (
          <Jobbox key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Jobstore;