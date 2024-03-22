

function StudentItem(props) {
    const {classs, name, color="lightblue"} = props;
    return(
        <div id={name} style={{
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

}

export default StudentItem;