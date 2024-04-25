

function ProductDetailPage(props){
    const {productCount} = props;
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