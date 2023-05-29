import './Counter.css';
import { useState } from 'react';
function Counter() {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    if (counter < 10) {
      setCounter(count => count + 1);
    }
  };
  const decrease = () => {
    if (counter > 0) {
      setCounter(count => count - 1);
    }
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <div className='counter'>
      <h1>REACT COUNTER</h1>
      <div className='counter_result'>
        <span className='counter_output'>{counter}</span>
        <div className='btn_container'>
          <button className='control_btn' onClick={increase}>+</button>
          <button className='control_btn' onClick={decrease}>-</button>
          <button className='reset' onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
