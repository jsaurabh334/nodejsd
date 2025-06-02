import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
   const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api');
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }
  , []);
  return (
    <div>
      {
        data.map((item, index) => (
          <div key={index}>
            <h2>{item.name}</h2>
            <p>{item.email}</p>
            <p><button >edit</button></p>
          </div>
        ))
      }
    </div>
  )
}

export default App
