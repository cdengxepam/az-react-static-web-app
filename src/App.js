import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/httpTrigger1`));
      setData(text);
    })();
  });

  console.log(JSON.stringify(data))
  return <div>{data}</div>;
}

export default App;