import React, { useState } from "react";

const Counter = () => {
  
  const[count, setCount] = useState(0);

  const handleChange = event => {
    setCount(event.target.value)
  }

  return (
    <div>
      <p>The counter is at : {count} </p>
      <input 
        type="text" 
        name="initial-count"
        value={count}
        onChange={handleChange}
      />
      <button onClick={() => setCount(count + 1)}>>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>>
        -1
      </button>
    </div>
  );
}

export default Counter;