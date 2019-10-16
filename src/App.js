import React, { useState } from 'react';


function App() {
  const [{ count1, count2 }, setCount] = useState({ count1: 10, count2: 20 });



  return (
    <div>
      <div>{count1}</div>
      <button onClick={() => setCount(c => ({  ...c, count1: c.count1 +1 }))}>+</button>
      <div>{count2}</div>
      <button onClick={() => setCount(c => ({ ...c, count2: c.count2 +1 }))}>+</button>
    </div>
  )
}

export default App;
