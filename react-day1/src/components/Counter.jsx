import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div className="section">
      <h2>Counter</h2>

      <p className="count">{count}</p>

      <button onClick={increaseCount}>Increase</button>
    </div>
  );
}

export default Counter;