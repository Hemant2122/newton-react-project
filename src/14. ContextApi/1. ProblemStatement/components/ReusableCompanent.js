import Cart from "./Cart";

function ReusableCompanent(props){
    const {productCount, setProductCount} = props;
    return (
        <>
            <div style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px",
            }}>
                <h1>ReusableCompanent</h1>

                <Cart productCount={productCount} setProductCount={setProductCount} />
            </div>

        </>
    )
}

export default ReusableCompanent;