import logo from './logo.svg';
import './App.css';
import HelloComponent from './1. BasicReact/1. HelloComponent/HelloComponent';
import CounterComponent from './1. BasicReact/2. CounterComponent/CounterComponent';
import ListComponent from './1. BasicReact/3. ListComponent/ListComponet';

function App() {
  const listStudent = [
    {
      name : "Hemant",
      classs : 11,
    },

    {
      name : "Yuvraj",
      classs : 12,
    },

    {
      name : "Utkarsh",
      classs : 10,
    },

    {
      name : "Mayank",
      classs : 9,
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

    <ListComponent student={listStudent}/>

    </>
  );
}

export default App;
