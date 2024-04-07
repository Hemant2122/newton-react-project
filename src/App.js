import logo from './logo.svg';
import './App.css';
import HelloComponent from './1. BasicReact/1. HelloComponent/HelloComponent';
import CounterComponent from './1. BasicReact/2. CounterComponent/CounterComponent';
import ListComponent from './1. BasicReact/3. ListComponent/ListComponet';
import ConditionalRendering from './1. BasicReact/4. ConditionalRendering/ConditionalRendering';
import MultipleState from './1. BasicReact/5. MultipleState/1. Multiple__Use__State/MultipleState';
import SingleUseState from './1. BasicReact/5. MultipleState/2.Single__USe__State/SingleUseState';
import BeautifulWrapper from './1. BasicReact/6. WrapperBeautifulComponent/BeautifulWrapper';
import MainContentComponent from './1. BasicReact/6. WrapperBeautifulComponent/MainContentComponent';
// import Parent from './2. Communication/1. ParentToChild/Parent';
import Parent from './2. Communication/2. ChildToParent/Parent';
import ParentSibling from './2. Communication/3. Sibling/ParentSibling';
import KeyAndListProblem from './3. KeyAndList/KeyAndListProblem';
import KeyAndListSolution from './3. KeyAndList/KeyAndListSolution';
import OwnForms from './5. Forms/1. OwnForms/OwnForms';
import LifeCycleOfFunctionalComponent from './6. LifeCycleOfComponent/FunctionalComponent/LifeCycleOfFunctionalComponent';
import HookUseEffect from './7. Hook useEffect/HookUseEffect';
import { useState } from 'react';
import ImageDimensionResizer from './Assignments/ImageDimensionResizer';
import ValidateLoginForm from './Assignments/ValidateLoginForm';
import CreateBoxes from './Assignments/CreateBoxes';
import InlineCssStyle from './Assignments/InlineCssStyle/InlineCssStyle';
import PokemonApi from './8. PokemonApi/PokemonApi';
import ShoppingScroller from './Assignments/ShoppingScroller';
import RandomUsersAPI from './Assignments/RandomUsersAPI/RandomUsersAPI';
import DIgitalClock from './9. DIgitalClock/DIgitalClock';






function App() {

  const [flag, setFlag] = useState(true);


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
      {/* Assignments */}

      {/* <ImageDimensionResizer /> */}
      {/* <ValidateLoginForm /> */}
      {/* <CreateBoxes /> */}
      {/* <InlineCssStyle /> */}
      {/* <ShoppingScroller /> */}
      {/* <RandomUsersAPI /> */}

      {/* Assignments */}



    {/* <HelloComponent name={"Tarun"} />
    <HelloComponent name={"Hemant"} />
    <HelloComponent name={"Utkarsh"} />
    <HelloComponent name={"Akash"} />
    <HelloComponent /> */}

    {/* React is calling the counter Component Function */}
    {/* <CounterComponent heading={"Counter Component"} /> */}

    {/* <ListComponent student={listStudent}/> */}

    {/* <ConditionalRendering /> */}

    {/* <MultipleState /> */}

    {/* <SingleUseState/> */}

    {/* <BeautifulWrapper  beauty={"hemant"}>
      <MainContentComponent/>
      <MainContentComponent/>
      <MainContentComponent/>
    </BeautifulWrapper> */}

    {/* <Parent /> */}

    {/* <Parent /> */}

    {/* <ParentSibling />  */}

    {/* <KeyAndListProblem /> */}

    {/* <KeyAndListSolution /> */}

    <OwnForms />

    {/* <LifeCycleOfFunctionalComponent /> */}

    {/* {flag && <HookUseEffect />}
    <button style={{margin: "10px"}} onClick={() => {
      setFlag((oldVal) => !oldVal)
    }}>
      APP BUTTON TO HIDE
    </button> */}

    {/* <PokemonApi /> */}

    {/* <DIgitalClock /> */}

    </>
  );
}

export default App;
