import { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function toggleStatus() {
    setIsOn(!isOn);
  }

  return (
    <div className="section">
      <h2>Toggle</h2>

      <p className="status">{isOn ? "ON" : "OFF"}</p>

      <button onClick={toggleStatus}>Toggle</button>
    </div>
  );
}

export default Toggle;