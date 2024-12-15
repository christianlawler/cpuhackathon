import React from "react";
import JobDataContext from './job-data-context';

const JobDataProvider = (props) => {
    const jobDataContext = {
        templates: [
            {
                id: '1',
                name: 'Template 1',
                templateParameters: [
                    {"id":"1", "name":"Parameter", "type":"text", "required":"true"},
                    {"id":"2", "name":"Client Name", "type":"number", "required":"true"}
                ]
            },
            {
                id: '2',
                name: 'Template 2',
                templateParameters: [
                    {"id":"3", "name":"Parameter", "type":"number", "required":"true"},
                    {"id":"4", "name":"Loan Type", "type":"text", "required":"true"},
                    {"id":"5", "name":"Loan Period in Years", "type":"number", "required":"true"}
                ]
            }
        ],
        jobs: [
            {
                id: '1',
                name: 'Job 1',
                templateId: '1',
                schedule: 'daily',
                jobParameters: [
                    {"id":"1", "name":"Parameter", "type":"number", "required":"true", "value":"100"},
                    {"id":"2", "name":"Client Name", "type":"text", "required":"true", "value":"Client Name 1"}
                ]
            },
            {
                id: '2',
                name: 'Job 2',
                templateId: '2',
                schedule: 'monthly',
                jobParameters: [
                    {"id":"3", "name":"Parameter", "type":"number", "required":"true", "value":"300.50"},
                    {"id":"4", "name":"Loan Type", "type":"text", "required":"true", "value":"Fixed"},
                    {"id":"5", "name":"Loan Period in Years", "type":"number", "required":"true", "value":"30"}
                ]
            },
        ],
        schedules: [
            { id: '1', name: 'daily'},
            { id: '2', name: 'weekly'},
            { id: '3', name: 'monthly'}
        ]
    };

    return <JobDataContext.Provider value={jobDataContext}>
        {props.children}
    </JobDataContext.Provider>
};

export default JobDataProvider;