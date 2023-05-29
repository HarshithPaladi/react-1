import logo from './logo.svg';
import './App.css';
import { MyButton } from './components/MyButton';
import { useState } from 'react';
function App() {
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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <br/>
    //     <button>Native ME!</button>
    //     <MyButton/>
    //   </header>
    // </div>
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

export default App;
