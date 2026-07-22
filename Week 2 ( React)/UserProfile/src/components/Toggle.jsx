import { useState } from 'react';
import './Toggle.css';

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="toggle">
      <p className="toggle-status">{isOn ? 'ON' : 'OFF'}</p>
      <button className="toggle-button" onClick={() => setIsOn(!isOn)}>
        Toggle
      </button>
    </div>
  );
}

export default Toggle;