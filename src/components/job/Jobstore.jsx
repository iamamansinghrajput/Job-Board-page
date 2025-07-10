import React, { useEffect, useState } from 'react';
import Jobbox from './Jobbox';
import { baseurl } from '../../config/path'; // Ensure this is correctly imported


const Jobstore = () => {
  const [arr, setArr] = useState([]);

  const jobStore = async () => {
    try {
      const response = await fetch(`${baseurl}/api/getAllJob/:id`, {
        method: "GET",
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' }
      });

      const jobData = await response.json();

      if (response.ok) {
        console.log(jobData);
        setArr(jobData);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  useEffect(() => {
    jobStore();
  }, []);

  return (
    <section className="py-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {arr.map((item, index) => (
          <Jobbox key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Jobstore;
