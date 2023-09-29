import React from 'react';
import './App.css';
import JobList from './components/JobList';
import JobApplicationForm from './components/JobApplicationForm';

function App() {
  return (
    <div className="App">
      <h1>New Job Application</h1>
      <JobApplicationForm />
      <h2>Job Listings</h2>
      <JobList />
    </div>
  );
}

export default App;