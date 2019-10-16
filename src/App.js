import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(() => 10);



  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  )
}

export default App;
