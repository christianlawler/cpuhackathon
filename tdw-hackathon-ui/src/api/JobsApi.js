export const fetchJobs = async () => {
    try {
      const response = await fetch('/Job.json', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',          
        }
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error loading JSON data:', error);
    }
  };