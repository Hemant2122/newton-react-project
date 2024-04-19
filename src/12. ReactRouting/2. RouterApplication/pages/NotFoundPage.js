import { useNavigate } from "react-router-dom";


function NotFoundPage(){

    const  navigate = useNavigate();
    
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyItems: "center",
                alignItems: "center",
                gap: "10px",
            }}>
                <h1>Page not Found</h1>
                <button style={{
                    background: "#006cfc",
                    color: "#fff",
                }} onClick={() => {
                   navigate("/");
                }}>
                    Go to HomePage
                </button>
            </div>
        </>
    )
}

export default NotFoundPage;