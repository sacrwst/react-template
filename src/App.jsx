import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="bg-white m-8">Vite + React</h1>
      <div className="card text-9xl">Tailwind</div>
    </div>
  );
}

export default App;
