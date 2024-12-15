import { useContext, useState } from 'react';
import JobDataContext from './data/job-data-context';

const Add = ({ onSaveEvent, onCancelEvent }) => {
  const [inputs, setInputs] = useState({});
  const [templateParams, setTemplateParams] = useState([]);
  const { jobs, templates, schedules } = useContext(JobDataContext);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
    if(name === 'template') {
      setTemplateParams(templates.find(x => x.id === value).templateParameters)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formElement = event.target;
    const isValid = formElement.checkValidity();
    if(!isValid) {
      alert('Please enter data');
      return;
    }
    const newId = Math.max(...jobs.map(x => parseInt(x.id))) + 1;
    const jobParams = [];
    const selectedTemplateParams = templates.find(x => x.id === inputs.template).templateParameters;
    selectedTemplateParams.forEach(template => {
      const value = inputs[template.id];
      template.value = value;
      jobParams.push({...template});
    });
    const newJob = {id: newId, name: inputs.name, templateId: inputs.template, schedule: inputs.schedule, jobParameters: jobParams};
    onSaveEvent(newJob);
  }

  const handleCancel = () => {
    onCancelEvent();
  }

  
  return (
    <form onSubmit={handleSubmit} class="job-form">
      <h3>Please Enter the Job details below to add a job:</h3>
      <div>
        <label className="field-name">Enter Job Title:</label>
        <input 
            type="text" 
            name="name" 
            onChange={handleChange}
            placeholder='Job Title'
            required
          />
      </div>   
      <div>
         <label className="field-name">Select Job Template:</label>
         <select onChange={handleChange} name="template" required>
                <option value="">Please select a template</option>
                {templates.map((option, index) => {
                    return (
                        <option key={index} value={option.id}>
                            {option.name}
                        </option>
                    );
                })}
            </select>
            {templateParams.map((template, index) => {
                    return (
                      <div>
                        <label className="field-name">Enter {template.name}: </label>
                        <input 
                            type={template.type} 
                            name={template.id}
                            onChange={handleChange}
                            required
                          />
                    </div>
                    );
                })}
      </div>   
      <div>
      <label className="field-name">Select Job Schedule:</label>
      <select onChange={handleChange} name="schedule" required>
              <option value="">Please pick a schedule</option>
              {schedules.map((option, index) => {
                  return (
                      <option key={index} value={option.name}>
                          {option.name}
                      </option>
                  );
              })}
          </select>
      </div>
      <div>
      <input type="submit" value={'Save Job'} />
      <button class="cancel-job" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
}
export default Add;