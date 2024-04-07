import { useEffect, useState } from "react";


function DIgitalClock(){
    const [time, setTime] = useState();

    // const time = new Date().toLocaleTimeString()
    // console.log(time);

    useEffect(() => {
        const intervalId =  setInterval(() => {
          setTime(new Date().toLocaleTimeString());
        }, 1000);
        console.log(intervalId);
        
        return() => {
            clearInterval(intervalId)
        }
    }, [])

    return(
        <>
            <h1>DIgital Clock</h1>
            <div>{time}</div>
        </>
    )
}

export default DIgitalClock;