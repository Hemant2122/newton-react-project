
function HelloComponent(props){
console.log(props, "props");
const { name } = props;

// const name = props.name;
    return(
        // <div style={{height:"100px"}}>Hey there Hello to all of You FUNCTIONAL !!!</div>
        <div>Hey there {name} </div>
    );
}

export default HelloComponent;