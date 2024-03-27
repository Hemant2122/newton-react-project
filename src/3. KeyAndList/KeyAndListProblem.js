import { useState } from "react";


function KeyAndListProblem (){
    
  const [studentList, setStudentList] = useState([]);
  
  return (
    <>
      <h1>Key and List Problem</h1>
      <div>
        <input id="inputBox" type="text" />
        <input type="number" />
        
        <button onClick={() => {
          const element = document.getElementById("inputBox");
          const name = element.value;

          setStudentList((oldValue) => [name, ...oldValue]);
        }}>
          Add Item In List
        </button>
      </div>

      {/* LIST OF STUDENT */}
      <div style={{margin: "10px", padding: "20px"}}>
        {studentList.map((student) => {
          return (
            <div style={{
              border: "1px solid black",
              background: "green",
              margin: "10px",
              padding: "10px"
            }}>
              {student}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default KeyAndListProblem;