import logo from './logo.svg';
import './App.css';
import HelloComponent from './1. BasicReact/1. HelloComponent/HelloComponent';
import CounterComponent from './1. BasicReact/2. CounterComponent/CounterComponent';

function App() {
  return (
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hemant Kumar</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
    */

    <>
    {/* <HelloComponent name={"Tarun"} />
    <HelloComponent name={"Hemant"} />
    <HelloComponent name={"Utkarsh"} />
    <HelloComponent name={"Akash"} />
    <HelloComponent /> */}

    {/* React is calling the counter Component Function */}
    <CounterComponent heading={"Counter Component"} />

    </>
  );
}

export default App;
