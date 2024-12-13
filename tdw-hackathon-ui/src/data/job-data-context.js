import React from 'react';

    const JobDataContext = React.createContext({
        templates: [],
        jobs: [],
        schedules: []
    });

export default JobDataContext;