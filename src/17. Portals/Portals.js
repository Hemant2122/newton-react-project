import { createPortal } from "react-dom";


function Portals(props){

    const {title, content} = props;

    return(
        <>

            {createPortal(
                <>
                    <div style={{
                        position: "fixed",
                        top: "25%",
                        left: "25%",
                        background: "red",
                        color: "white",
                        border: "1px solid black",
                        padding: "10px",
                    }}>
                        {title}
                    </div>
                </>,
                document.getElementById("portal-container")
            )}
        </>
    )
}

export default Portals;