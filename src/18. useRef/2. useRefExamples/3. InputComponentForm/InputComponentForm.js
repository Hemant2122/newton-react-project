import { useEffect, useRef } from "react";
import Input from "./CommonFormUI/Input";


function InputComponentForm(){

    const inputBoxReference = useRef();

    useEffect(() => {
        inputBoxReference.current.focus();
    })

    return (
        <>

            <h1>InputComponentForm</h1>

            <Input ref={inputBoxReference} />

        </>
    )
}

export default InputComponentForm;

// EXAMPLE OF MY OWN input component.