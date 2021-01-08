import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(42);
  
  return (
    <div className="App">
      <header className="App-header">
        {count}
        <button onClick={() => setCount((curr) => { return curr + 1})}>click me</button>
      </header>
    </div>
  );
}

export default App;
