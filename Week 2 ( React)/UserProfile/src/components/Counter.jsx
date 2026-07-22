import { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;