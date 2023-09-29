import React, { useState, useEffect } from 'react';
import './App.css';
import { Firestore, collection, getDocs } from 'firebase/firestore'; // Correct Firestore import path
import db from './components/Firebase';
import { Firestore } from 'firebase/firestore';

function JobListComponent() {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      // Retrieve job data from Firestore
      const querySnapshot = await getDocs(collection(db, 'jobs'));
      const jobList = [];
      querySnapshot.forEach((doc) => {
        jobList.push({ id: doc.id, ...doc.data() });
      });
      setJobs(jobList);
    };

    fetchData();
  }, []);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(filter.toLowerCase()) ||
      job.skills.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="job-list-container">
      <input
        type="text"
        placeholder="Search by title or skill"
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul className="job-list">
        {filteredJobs.map((job) => (
          <li key={job.id}>
            {/* Display job details here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobListComponent;
