import React, { useState } from 'react';
import './FreelancerForm.css'; // Import your FreelancerForm CSS here

function FreelancerForm() {
  const [title, setTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [skills, setSkills] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="container">
      <h1>New Job Application</h1>
      <form onSubmit={handleSubmit}>
        <div className="job-type-selection">
          <h3>Select Job Type:</h3>
          <label>
            Freelancer
            <input type="radio" value="freelancer" checked readOnly />
          </label>
          <label>
            Employment
            <input type="radio" value="employment" readOnly />
          </label>
        </div>

        <div className="job-information">
          <h3>Describe Your Job:</h3>
          <label>
            Title/Position:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label>
            Job Description:
            <textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
          </label>
          <label>
            Skills:
            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="Please add skills that your job requires"
            />
          </label>
        </div>

        <div className="project-conditions">
          <h3>Project Conditions:</h3>
          {/* Add Project Conditions here */}
        </div>

        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default FreelancerForm;
