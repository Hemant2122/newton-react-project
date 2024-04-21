import { useEffect } from "react";
import { useParams } from "react-router-dom";

function RendomMenProducts() {

    let params = useParams();
    const {id} = params;

    useEffect(() => {
        console.log("Hey Making API CALL for" + id);
    }, [id])
  return (
    <>
      <div>Rendom men Product {id} </div>
    </>
  );
}

export default RendomMenProducts;
