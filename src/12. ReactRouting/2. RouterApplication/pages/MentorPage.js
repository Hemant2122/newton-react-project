import { useState } from "react";


function MentorPage(){

    const [mentorList] = useState([
        "Akash",
        "Aman",
        "Hemant",
        "Yuvraj",
        "Mayank",
        "Saurabh",
    ])

    return(
        <>
            <h1>Mentors Associated with US.</h1>

            {
                mentorList.map(mentor => {
                    return <div style={{
                        width: "200px",
                        height: "100px",
                        background: "yellow",
                        margin: "5px",
                        textAlign: "center",
                    }}>
                        {mentor}
                    </div>
                })
            }

        </>
    )
}

export default MentorPage;