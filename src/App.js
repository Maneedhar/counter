import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState({ val: 1, maxVal: 1000 });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: parseInt(e.target.value) });
  };

  const increment = () => {
    if (input.val >= input.maxVal) {
      setError(true);
    } else {
      setInput({ ...input, val: input.val + 1 });
      setError(false);
    }
  };

  const decrement = () => {
    if (input.val > input.maxVal) {
      setError(true);
    } else {
      setInput({ ...input, val: input.val - 1 });
      setError(false);
    }
  };

  return (
    <div className="App">
      <div>
        <label>Max Value</label>
        <input
          type="number"
          name="maxVal"
          value={input.maxVal}
          className="max"
          placeholder="Enter a max value"
          onChange={handleChange}
        />
      </div>
      <div className="counter">
        <div className="minus btn" onClick={decrement}>
          -
        </div>
        <input
          type="number"
          name="val"
          max={1000}
          value={input.val}
          onChange={handleChange}
          className="value"
          disabled={error}
        />
        <div className="plus btn" onClick={increment}>
          +
        </div>
      </div>
      <div className="error">{error && 'Max limit reached'}</div>
    </div>
  );
}

export default App;
