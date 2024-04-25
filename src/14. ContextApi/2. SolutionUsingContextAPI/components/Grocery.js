import ProductListPage from "./ProductListPage";

function Grocery(props) {
    const {productCount = 0} = props;
  return (
    <>
      <div style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
      }}>
        <h1>Grocery</h1>

        <ProductListPage />
      </div>
    </>
  );
}

export default Grocery;
