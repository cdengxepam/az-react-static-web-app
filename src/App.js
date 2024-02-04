import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      fetch(`/api/httpTrigger1?name=kevin`).then(response => {
        if(response.status === 200) {
          return response.json()
        }
      }).then(data => {
        setData(data.body);
      });
    })();
  });

  console.log(JSON.stringify(data))
  return <div>{data}</div>;
}

export default App;