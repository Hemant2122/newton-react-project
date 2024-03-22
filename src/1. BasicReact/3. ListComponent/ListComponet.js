import React from "react";
import StudentItem from "./StudentItem";

function ListComponent(props){

    const {student = []} = props;
    console.log(student, "props");

    return(
        <React.Fragment>
            <h1>List Component</h1>

            {student.map((student, index) => {
                const { id, name, classs, color } = student;

                /*
                return(
            

                    <div style={{
                        display:"flex",
                        justifyContent:"space-between",
                        background:color,
                        padding: "20px",
                        margin: "20px",
                    }}>
                        <div>{name}</div>
                        <div>{classs}</div>
    
                    </div>
                );

                */
               return(
                <StudentItem key={id} name={name} classs={classs} color={color}/>
               );
            })}
    
        </React.Fragment>
    )
}

export default ListComponent;