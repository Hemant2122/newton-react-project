import Grocery from "./Grocery";
import ReusableCompanent from "./ReusableCompanent";
import ProductDetailPage from "./ProductDetailPage";
import { useState } from "react";

function ReactAppContextProblemApi(){
    const [productCount, setProductCount] = useState(0);
    return (
        <>
            <h1>ReactAppContextProblemApi</h1>

            <Grocery productCount={productCount} setProductCount={setProductCount} />
            <ProductDetailPage productCount={productCount} setProductCount={setProductCount} />
            <ReusableCompanent productCount={productCount} setProductCount={setProductCount} />
        </>
    )
}

export default ReactAppContextProblemApi;