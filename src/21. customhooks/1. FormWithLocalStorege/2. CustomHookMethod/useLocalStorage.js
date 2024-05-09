import { useEffect, useState } from "react";


function useLocalStorage(props){
    console.log(props, "props");

    const [val, setVal] = useState(() => {
        // console.log("lazy initialization");
        const value = JSON.parse(localStorage.getItem("formInput"))[props];

        return value ? value : "";
    });

    useEffect(() => {

        const oldObj = JSON.parse(localStorage.getItem("formInput"));
        
        localStorage.setItem("formInput", JSON.stringify({
            ...oldObj,
            [props]: val,
        }));

    }, [val]);


    return ([val, setVal]);
}

export default useLocalStorage;

// Custom hooks are nothing but component only - JSX part.

/*
* It means we can use 
* useState useEffect, useRef ........
* Math
* EVERYTHING that a component does except returning jsx
*
*/