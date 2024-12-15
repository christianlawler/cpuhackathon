import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { fetchJobs } from '../src/api/JobsApi';
import JobDataProvider from './data/JobDataProvider';
import Display from './Display';

function App() {
  return (
    <JobDataProvider>
      <Display/>
    </JobDataProvider>
  );
}

export default App;
