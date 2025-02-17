import logo from './logo.svg';
import './App.css';
import TestFunctional from './components/TestFunctional';
import TestClassComponent from './components/TestClassComponent';
import PropsFunctional from './components/PropsFunctional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestFunctional />
        <p>
          Edited the App.js code!
        </p>
        <TestClassComponent />
        <PropsFunctional name="SPONGE" >
          <p> This is a child component </p>
        </PropsFunctional>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
