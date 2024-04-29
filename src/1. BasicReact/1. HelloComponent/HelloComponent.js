
function HelloComponent(props){
console.log(props, "props");
const { name } = props;

// const name = props.name;
    return(
        // <div style={{height:"100px"}}>Hey there Hello to all of You FUNCTIONAL !!!</div>
        <div style={{background: "red"}}>Hey there {name} </div>
    );
}

export default HelloComponent;

// JSX -> JavaScript XML
// It looks like it is HTML BUT IT IS NOT  HTML.
// Behind the SCENES the above code (look like HTML) is COnverted to BELOW CODE.
// React.createElement("div", {}, "Hey there Hello to all of you FUNCTIONAL!!!.")

// COMPONENT -> HelloComponent

// Props -> Are nothing but EXTRA information that we can Provide to a COMPONENT.

// State -> Lets Create Counter app.

// LIMITATION OF JSX ->
/*
  0. JSX is not HTML.
  1. JSX is not HTML and that is why we have to TRANSCOMPILE it. (Transform + compile).
  2. JSX behind the scenes is REACT CODE -> JAVASCRIPT CODE ->  (small amout of code) NATIVE CODE (C++)
  3. Vue.js, AnuglarJS -> HTML LIKE STRUCTURE  so can use Design interchangebally (somewhat).
   -> JSX in react can be only used in react and can never be used in ANgular or Vue.js.
*/