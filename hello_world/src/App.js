import './App.css';
/*
import TestFunctional from './components/TestFunctional';
import TestClassComponent from './components/TestClassComponent';
import PropsFunctional from './components/PropsFunctional';
import PropsClassComponent from './components/PropsClassComponent';
*/

import StatefulClassComponent from './components/StatefulClassComponent';
import StatefulClassComponent_2 from './components/StatefulClassComponent_2';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
        /*<PropsClassComponent name="SPONGE0" >
          <p> This is a child component </p>
        </PropsClassComponent>
        <TestFunctional />
        <p>
          Edited the App.js code!
        </p>
        <TestClassComponent />
        <PropsFunctional name="SPONGE1" >
          <p> This is a child component </p>
        </PropsFunctional>
        */
        }
      <StatefulClassComponent />
      <StatefulClassComponent_2 />
      </header>
    </div>
  );
}

export default App;
