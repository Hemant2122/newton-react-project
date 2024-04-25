
function ProductListPage(props){

    const {productCount, setProductCount} = props;
    return (
        <>
            <div style={{background: "yellow"}}>
                <h1>ProductListPage</h1>
                <button onClick={() => {
                    setProductCount((oldValue) => oldValue + 1);
                }}>+</button>
                <p>ProductCount: {productCount}</p>
                <button onClick={() => {
                    setProductCount((oldValue) => oldValue - 1);
                }}>-</button>
            </div>
        </>
    )
}

export default ProductListPage;