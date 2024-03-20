import React from "react";

function ListComponent(props){

    const {student = []} = props;
    console.log(student, "props");

    return(
        <React.Fragment>
            <h1>List Component</h1>

            {student.map((student) => {
                const { name, classs } = student;

                return(
                    <div style={{
                        display:"flex",
                        justifyContent:"space-between",
                        background:"red",
                        padding: "20px",
                        margin: "20px",
                    }}>
                        <div>{name}</div>
                        <div>{classs}</div>
    
                    </div>
                );
            })}
        </React.Fragment>
    )
}

export default ListComponent;