import Child from "./Child";

function Parent(){

    const information = "Hey there someone is going to pass you";
    return (
        <>
            <h1>Parent Body</h1>

            <Child information={information}/>
        </>
    )
}

export default Parent;