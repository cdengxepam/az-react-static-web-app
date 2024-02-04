import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = fetch(`/api/httpTrigger1?name=kevin`).then(response => {
        if(response.status === 200) {
          return response.json()
        }
      }).then(data => {
        console.log('data: ', data)
      });
      setData(text);
    })();
  });

  console.log(JSON.stringify(data))
  return <div>{data}</div>;
}

export default App;