

function Child(props){
    
    const {information} = props;
    return (
        <>
            <div style={{margin: "30px", background: "yellow"}}>
                Child Body {information}
            </div>
        </>
    )
}

export default Child;