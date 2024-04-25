import { useContext } from "react";
import CardContexApi from "../context/CardContextApi";

function ProductListPage(props){

    const contextData = useContext(CardContexApi);
    const {productCount, setProductCount = () => {}} =  contextData;

    return (
        <>
            <div style={{background: "yellow"}}>
                <h1>ProductListPage</h1>
                <button onClick={() => {
                    setProductCount((oldVal) => oldVal + 1);
                }}>+</button>
                <p>ProductCount: {productCount}</p>
                <button onClick={() => {
                    setProductCount((oldVal) => oldVal - 1);
                }}>-</button>
            </div>
        </>
    )
}

export default ProductListPage;