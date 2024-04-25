import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloComponent from './1. BasicReact/1. HelloComponent/HelloComponent';
import HelloClassComponent from './1. BasicReact/1. HelloComponent/HelloClassComponent';
import RouterApp from './12. ReactRouting/2. RouterApplication/RouterApp';
import { BrowserRouter, HashRouter, MemoryRouter } from 'react-router-dom';
import App from './Assignments/Authentication_using_react_router/component/App';
import ReactAppContextProblemApi from './14. ContextApi/1. ProblemStatement/components/ReactAppContextProblemApi';
import ReactAppContextSolutionApi from './14. ContextApi/2. SolutionUsingContextAPI/components/ReactAppContextSolutionApi';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* Assiment APP */}
    {/* <App /> */}

    {/* ------------------ NORMAL APP --------------- */}
    {/* <App /> */}


    {/* Context Api */}

    {/* <ReactAppContextProblemApi /> */}
    <ReactAppContextSolutionApi />

    {/*------------------- ROUTER APP ---------------- */}
    {/* <BrowserRouter>
      <RouterApp />
    </BrowserRouter> */}



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
