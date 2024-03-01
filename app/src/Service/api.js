const URL = 'https://your-backend-api.com'; // Update with url

export const fetchGraphData = async () => {
  try {
    const response = await fetch(`${URL}/graph-data`); 
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching graph data: ", error);
    throw error;
  }
};
