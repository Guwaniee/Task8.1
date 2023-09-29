import React from 'react';

function JobCard({ job, onDelete, onExpand }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <p>Skill: {job.skill}</p>
      <button onClick={() => onDelete(job.id)}>Delete</button>
      <button onClick={() => onExpand(job.id)}>Expand</button>
    </div>
  );
}

export default JobCard;
