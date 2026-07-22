import { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="mx-auto w-44 rounded-lg border border-gray-200 p-4 text-center">
      <p className="my-2 text-2xl font-bold">{isOn ? 'ON' : 'OFF'}</p>
      <button
        className="rounded-md bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
        onClick={() => setIsOn(!isOn)}
      >
        Toggle
      </button>
    </div>
  );
}

export default Toggle;