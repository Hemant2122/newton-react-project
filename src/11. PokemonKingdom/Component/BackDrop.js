
function BackDrop(props){

    const  { children, onClose } = props;

    return(
        <div id="backDropContainer"
            onClick={(event) => {
                const element = event.target;
                const id = element.id;
                if(id === "backDropContainer"){
                    onClose();
                }
            }}

            style={{
            display: "flex",
            position: "fixed",
            height: "100vh",
            width: "100vw",
            background: "rgb(0 0 0 / 59%)",

            zIndex: "10000000000",
            top: "0px",
            left: "0px",
        }}>
            <div id="children">{children}</div>
        </div>
    )
}

export default BackDrop;
