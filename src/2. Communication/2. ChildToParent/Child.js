

function Child(props){
    
    const {bulletPoint, childCommunicatorHandler} = props;

    return (
        <>
            <div style={{
                margin: "30px",
                background: "yellow",
            }}>
                Child Body {bulletPoint}

                <div>
                    <button onClick={() => {
                        childCommunicatorHandler("Hey There I Am Safe!!");
                    }}>
                        Emergency Information
                    </button>
                </div>
            </div>
        </>
    )
}

export default Child;