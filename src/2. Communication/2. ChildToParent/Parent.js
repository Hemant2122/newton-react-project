import Child from "./Child";


function Parent(){

    const bulletPoint = "Hey there someone is going to pass you :: bullet Point";

    const childCommunicatorHandler = (information) => {
        console.log(information, "information HAS BEEN RECIEVRD TO PARENT");
    };

    return(
        <>
            <h1>Parent Body</h1>

            <Child 
                childCommunicatorHandler = {childCommunicatorHandler} 

                bulletPoint = {bulletPoint}
            />
        </>

    )
}

export default Parent;