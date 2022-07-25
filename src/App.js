import './App.css';

import rs from "randomstring";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Slučajno generirani string</h1>
        <p>{rs.generate()}</p>
      </header>
    </div>
  );
}

export default App;
