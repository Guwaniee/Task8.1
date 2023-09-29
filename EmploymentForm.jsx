import React, { useState } from 'react';
import './EmploymentForm.css'; // Import your EmploymentForm CSS here

function EmploymentForm() {
  const [title, setTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [skills, setSkills] = useState('');

  const [experienceField, setExperienceField] = useState('');
  const [experienceYears, setExperienceYears] = useState('');

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
            <input type="radio" value="freelancer" readOnly />
          </label>
          <label>
            Employment
            <input type="radio" value="employment" checked readOnly />
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

        <div className="experience">
          <h3>Experience:</h3>
          <label>
            Experienced in:
            <input
              type="text"
              value={experienceField}
              onChange={(e) => setExperienceField(e.target.value)}
            />
            for at least
            <input
              type="text"
              value={experienceYears}
              onChange={(e) => setExperienceYears(e.target.value)}
            />{' '}
            years
          </label>
        </div>

        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default EmploymentForm;
