import { useRef } from "react";


function UseRefBasic(){

    const DEFAULT_VAL = 12;

    const ref = useRef(DEFAULT_VAL);
    const { current } = ref;
    console.log(ref);
    


    function onClickHandler(){
        console.log("-------------------- PRE VALUE --------------------", ref.current);

        ref.current = ref.current + 1;

        console.log("-------------------- UPDATED VALUE --------------------", ref.current);

    }

    return(
        <>
            <h1>use Ref</h1>
            <p>Current Val: {current}</p>
            <button onClick={onClickHandler}>+</button>
        </>
    )
}

export default UseRefBasic;


/**
 *  useRef -> preservation of data (just like useState) but without the re-rendering.
 *  1. Not only it stores the data (number, string, boolean, character)
 *  2. It can store the REFERENCE to the OBjects (array , Object and Elements)
 *
 */