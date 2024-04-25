import { useContext } from "react";
import CardContextApi from "../context/CardContextApi"

function Cart(props){

    const contextData = useContext(CardContextApi);
    const {productCount, setProductCount = () => {}} =  contextData;
    

    return (
        <>
            <div style={{background: "yellow"}}>
                <h1>Cart</h1>
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

export default Cart;