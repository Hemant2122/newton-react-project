import { useSearchParams } from "react-router-dom";
import Dog from "../../components/Animal/Dog";
import Cat from "../../components/Animal/Cat";

function AnimalPage(){
    // console.log(window.location.search, "geting serach non convebtional way"); // we shoule never do this.

    let [searchParams, setSearchParams] = useSearchParams();
    const typeOfAnimal = searchParams.get("q");

    function showUI(type){

        switch(type){
            case "dog":
                return <Dog />;
            case "cat":
                return <Cat />;
            default:
                return (<h4>No animal like this in  animal kindom</h4>);
        }
    }

    return(
        <>
            <h1>Animals</h1>

            {showUI(typeOfAnimal)}

            {/* {typeOfAnimal === "dog" && <h4>DOGS</h4>}
            {typeOfAnimal === "cat" && <h4>CATS</h4>} */}
        </>
    )
}

export default AnimalPage;