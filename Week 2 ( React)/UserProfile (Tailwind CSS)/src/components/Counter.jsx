import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-auto w-44 rounded-lg border border-gray-200 p-4 text-center">
      <p className="my-2 text-3xl font-bold">{count}</p>
      <button
        className="rounded-md bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;