import { useContext, useState } from 'react';
import JobDataContext from './data/job-data-context';
import Add from './Add';
const Display = () => {
  const { jobs } = useContext(JobDataContext);
  const [isAddJob, setIsAddJob] = useState(false);
  const [jobsData, setJobsData] = useState(jobs);
  const handleDelete = (id) => {
    setJobsData(jobsData.filter((job) => job.id !== id))
  };

  const handleAddJob = () => {
    setIsAddJob(true);
  };

  const handleSave = (data) => {
    setIsAddJob(false);
    jobsData.push(data);
  };

  const handleCancel = () => {
    setIsAddJob(false);
  }


  return (
    <div class="tdw-container">
      <div className="tdw-heading-section">
        <h2>TDW User Driven Extract</h2>
      </div>
      <h3 class="tdw-heading">TDW Jobs List</h3>
      <div className="table">
        <div className="header-row">
            <div className="header-cell">ID</div>
            <div className="header-cell">Name</div>
            <div className="header-cell">Schedule</div>
            <div className="header-cell">Job Parameters</div>
            <div className="header-cell">Actions</div>
        </div>
        {jobsData.map(job => (
            <div className="row" key={job.id}>
                <div className="cell">{job.id}</div>
                <div className="cell">{job.name}</div>
                <div className="cell">{job.schedule}</div>
                <div className="cell">
                    {job.jobParameters?.map((param, index) => (
                      <div><b>{param.name}:</b> {param.value}</div>
                    ))}
                </div>
                <div className="cell"> <button className="delete-job" onClick={() => handleDelete(job.id)}>Delete</button></div>
                <div>
            </div>
            </div>
        ))}
        </div>
        { isAddJob && <Add onSaveEvent={handleSave} onCancelEvent={handleCancel}/> }
        { !isAddJob &&<button class="add-job" onClick={handleAddJob}>Add Job</button> }
    </div>
  );
}

export default Display;