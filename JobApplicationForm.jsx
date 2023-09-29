import React, { useState } from 'react';
import './JobApplicationForm.css';

function JobApplicationForm() {
  const [jobType, setJobType] = useState('freelancer');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState('');
  const [projectLength, setProjectLength] = useState('');
  const [minPayment, setMinPayment] = useState('');
  const [maxPayment, setMaxPayment] = useState('');
  const [workingHours, setWorkingHours] = useState('');
  const [experienceField, setExperienceField] = useState('');
  const [experienceYears, setExperienceYears] = useState('');

  const handleJobTypeChange = (e) => {
    setJobType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (Firebase integration).
  };

  return (
    <div className="container">
      <h1>New Job Application</h1>
      <form onSubmit={handleSubmit}>
        <div className="job-type-selection">
          <h3>Select Job Type:</h3>
          <label>
            Freelancer
            <input
              type="radio"
              value="freelancer"
              checked={jobType === 'freelancer'}
              onChange={handleJobTypeChange}
            />
          </label>
          <label>
            Employment
            <input
              type="radio"
              value="employment"
              checked={jobType === 'employment'}
              onChange={handleJobTypeChange}
            />
          </label>
        </div>

        <div className="job-information">
          <h3>Describe Your Job:</h3>
          <label>
            Title/Position:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Job Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
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
          <label>
            Project Length:
            <input
              type="text"
              value={projectLength}
              onChange={(e) => setProjectLength(e.target.value)}
            />
          </label>
          <label>
            Payment Range:
            <input
              type="text"
              value={minPayment}
              onChange={(e) => setMinPayment(e.target.value)}
            />{' '}
            - to
            <input
              type="text"
              value={maxPayment}
              onChange={(e) => setMaxPayment(e.target.value)}
            />
          </label>
          <label>
            Working Hours:
            <input
              type="text"
              value={workingHours}
              onChange={(e) => setWorkingHours(e.target.value)}
            />
          </label>
        </div>

        {jobType === 'employment' && (
          <div className="experience">
            <h3>Experience:</h3>
            <label>
              Experienced in:
              <input
                type="text"
                value={experienceField}
                onChange={(e) => setExperienceField(e.target.value)}
              />
              for at least:
              <input
                type="text"
                value={experienceYears}
                onChange={(e) => setExperienceYears(e.target.value)}
              />{' '}
            </label>
          </div>
        )}
        <div className="submit-button-container">
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
}

export default JobApplicationForm;
