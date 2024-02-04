import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = fetch(`/api/httpTrigger1`).then(response => {
        if(response.status === 200) {
          console.log(response.json())
        }
      });
      setData(text);
    })();
  });

  console.log(JSON.stringify(data))
  return <div>{data}</div>;
}

export default App;