import logo from './logo.svg';
import './App.css';
import HelloComponent from './1. BasicReact/1. HelloComponent/HelloComponent';
import CounterComponent from './1. BasicReact/2. CounterComponent/CounterComponent';
import ListComponent from './1. BasicReact/3. ListComponent/ListComponet';
import ConditionalRendering from './1. BasicReact/4. ConditionalRendering/ConditionalRendering';
import MultipleState from './5. MultipleState/MultipleState';

function App() {
  const listStudent = [
    {
      id: 1,
      name : "Hemant",
      classs : 11,
      color : "pink"
    },

    {
      id: 2,
      name : "Yuvraj",
      classs : 12,
      color: "blue"
    },

    {
      id: 3,
      name : "Utkarsh",
      classs : 10,
    },

    {
      id: 4,
      name : "Mayank",
      classs : 9,
      color : "yellow"
    }

  ];

  return (
    
    <>
    {/* <HelloComponent name={"Tarun"} />
    <HelloComponent name={"Hemant"} />
    <HelloComponent name={"Utkarsh"} />
    <HelloComponent name={"Akash"} />
    <HelloComponent /> */}

    {/* React is calling the counter Component Function */}
    {/* <CounterComponent heading={"Counter Component"} /> */}

    {/* <ListComponent student={listStudent}/> */}

    {/* <ConditionalRendering /> */}

    <MultipleState />

    </>
  );
}

export default App;
