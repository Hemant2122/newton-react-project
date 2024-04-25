import { useContext } from "react";
import CardContextApi from "../context/CardContextApi";


function ProductDetailPage(props){

    const contextData = useContext(CardContextApi);
    const {productCount} =  contextData;

    return (
        <>
            <div style={{background: "yellow"}}>
                <h1>ProductDetailPage</h1>
                <p>ProductCount: {productCount}</p>
            </div>
        </>
    )
}

export default ProductDetailPage;