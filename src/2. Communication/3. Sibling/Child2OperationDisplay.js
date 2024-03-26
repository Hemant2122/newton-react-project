

function Child2OperationDisplay(props){

    const {info} = props;

    return (
        <div style={{
            padding: "10px",
            border: "1px solid black"
        }}>
            <h1>Operataion Details</h1>
            <div>{info ? info : "NO Operation YET"}</div>
        </div>
    )
}

export default Child2OperationDisplay;