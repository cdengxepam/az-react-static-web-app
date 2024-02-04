import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = fetch(`/api/httpTrigger1`).then(response => {
        console.log(response)
      });
      setData(text);
    })();
  });

  console.log(JSON.stringify(data))
  return <div>{data}</div>;
}

export default App;