import React, { useState, useEffect } from 'react';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:1337/api/home-page?populate=deep')
      .then(response => response.json())
      .then(data => setUserData(data.data.attributes))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      {userData && (
        <>
          <p>Name: {userData.name}</p>
          <p>Address: {userData.address}</p>
          <p>School: {userData.school}</p>
          <p>Job: {userData.job}</p>
          <p>Company: {userData.company}</p>
        </>
      )}
    </div>
  );
}

export default App;
