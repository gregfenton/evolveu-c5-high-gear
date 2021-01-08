import { useState } from 'react';
import Adder from './Adder';
import './App.css';
import Displayer from './Displayer';

function App() {
  const [count, setCount] = useState(42);
  const [count2, setCount2] = useState(10000001);

  return (
    <div className="App">
      <header className="App-header">
        {count}
        <button onClick={() => setCount((curr) => { return curr + 1 })}>click me</button>
        <Displayer barney={count2} />
        <Adder henry={setCount2} />
      </header>
    </div>
  );
}

export default App;
