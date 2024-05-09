import useFetch from "./useFetch";

function PokemonApp(){

    const [data, loading, error] = useFetch(`https://pokeapi.co/api/v2/pokemon/ditto`);

    return(
        <>
            {loading ? (
                <div>Loading....</div>
            ) : !error ? (
                <div>
                    <h1>Pokemon App</h1>
                    <p>Name: {data?.name} </p>
                    <p>Id: {data?.id} </p>
                </div>
            ) : (
                <div>ERROR</div>
            )
            }
        </>
    )
}

export default PokemonApp;