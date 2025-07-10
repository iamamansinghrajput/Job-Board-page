import React, { useEffect, useState } from 'react';
import Applicationbox from './Applicationbox';
import { baseurl } from '../../config/path';

const Applicationstore = () => {
  const [combinedData, setCombinedData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch applications and corresponding jobs
  useEffect(() => {
    const fetchApplicationsWithJobs = async () => {
      try {
        // Step 1: Get all applications
        const response = await fetch(`${baseurl}/api/getUserApplication`, {
          method: 'GET',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' }
        });

        const applications = await response.json();

        if (!response.ok) {
          throw new Error(applications.message || 'Failed to fetch applications');
        }

        // Step 2: Fetch job data for each application
        const applicationsWithJobs = await Promise.all(
          applications.map(async (app) => {
            try {
              const jobRes = await fetch(`${baseurl}/api/jobs/${app.jobId}`, {
                method: 'GET',
                credentials: 'include'
              });
              console.log("Fetching job for jobId:", app.jobId);
              const jobData = await jobRes.json();

              return {
                application: app,
                job: jobData
              };
            } catch (err) {
              console.error(`Failed to fetch job for jobId: ${app.jobId}`);
              return { application: app, job: null }; // Handle missing job gracefully
            }
          })
        );

        setCombinedData(applicationsWithJobs);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load applications or jobs:', error);
        setLoading(false);
      }
    };

    fetchApplicationsWithJobs();
  }, []);

  return (
    <section className="min-h-screen px-4 py-6">
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : combinedData.length === 0 ? (
        <p className="text-gray-600">No applications found.</p>
      ) : (
        <div className="space-y-4">
          {combinedData.map((item, index) => (
            <Applicationbox key={index} application={item.application} job={item.job} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Applicationstore;
