const { useEffect, useState } = require("react")


function PokemonApp(){

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/ditto`;
        setLoading(true);

        async function fetchData(){
            try{
                const responese = await fetch(url);
                const data = await responese.json();

                setData(data);

            }catch (error){
                setError(error);
            }finally{
                setLoading(false);
            }

        }
        fetchData();
    }, [])


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