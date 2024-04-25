import Grocery from "./Grocery";
import ReusableCompanent from "./ReusableCompanent";
import ProductDetailPage from "./ProductDetailPage";
import { useState } from "react";
import CardContextApi from "../context/CardContextApi";

function ReactAppContextSolutionApi(){
    const [productCount, setProductCount] = useState(0);

    return (
        <>
            <h1>ReactAppContextSolutionApi</h1>

        <CardContextApi.Provider value={{productCount: productCount, setProductCount: setProductCount }} >
                <Grocery />
                <ProductDetailPage />
                <ReusableCompanent />
            </CardContextApi.Provider>
        </>
    )
}

export default ReactAppContextSolutionApi;