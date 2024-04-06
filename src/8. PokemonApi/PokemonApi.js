import { useEffect, useState } from "react";

function PokemonApi() {
  // const [phase, setPhase] = useState("MOUNTING PHASE");
  // console.log(" CURRENT PHASE ::: ", phase);
  // const [countOfClap, setCountOfClap] = useState(0);
  const [selectPokemon, setSelectPokemon] = useState(null)


  const [pokemonData, setPokemonData] = useState({
    id: "",
    height: "",
    name: "",
    abilities: [],
  })

  const [loading, setLoading] = useState(false)


  function convertBigDataIntoRelaventData(pokemonData){
    const {id, height, name, abilities} = pokemonData;

    const mappedAbilityArray = abilities.map(abilitiesObj => {
      const {ability} = abilitiesObj;
      const {name} = ability;
      
       return name;
    });

    return{
      id,
      height,
      name, 
      abilities: mappedAbilityArray,
    }

  }

  useEffect(() => {

    async function fetchPokeData(){
      try{
        setLoading(true);
        // console.log("DO THE API FETCH ");
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectPokemon}`);
        const data = await response.json();

        // console.log(data, "Old Data")

        const  relaventData = convertBigDataIntoRelaventData(data);

        setTimeout(() => {
          setPokemonData(relaventData);
          setLoading(false);
        }, 8000)

        // console.log(relaventData, "New data");

        // id, height, name, abilities

      }catch (error) {
        alert("Error with the Server");
      }
    };

    fetchPokeData();

  }, [selectPokemon]);

function onSelectoinChange(event){
  const value = event.target.value;
  setSelectPokemon(value);
  
}


  return (
    <>
      {/* <h1>Pokemon</h1> */}
      {/* {console.log("SHOW THE UI")}
      <button
        onClick={() => {
          setCountOfClap((old) => old + 1);
          setPhase("UPDATE PHASE");
        }}
      >
        Clap {countOfClap}
      </button> */}


      <div>
        <h1>Select Pokemon</h1>
        <div>
          <select onChange={onSelectoinChange}>
            <option value={""}>SELECT NEXT POKEMON (pokemon)</option>
            <option value={"ditto"}>DITTO (pokemon)</option>
            <option value={"pikachu"}>PIKACHU (pokemon)</option>
            <option value={"bulbasaur"}>BULBASAUR (pokemon)</option>
          </select>
        </div>

        {selectPokemon && !loading ? (<div>
          <h1>Pokemon Card</h1>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            border: "1px solid black",
            width: "400px",
          }}>
            <div style={{display: "flex", flexDirection: "row", gap: " 10px", padding: "10px"}}>
              <p>id: {pokemonData.id}</p>
              <p>name: {pokemonData.name}</p>
            </div>

            <div style={{display: "flex", flexDirection: "row", gap: " 10px", padding: "10px"}}>
              <p>abilities: {pokemonData.abilities.join(" ")}</p>
              <p>height: {pokemonData.height}</p>
            </div>
          </div>
        </div>) : loading ? (
          <h1>LOADER..........</h1>
        ) : null}
      </div>
    </>
  );
}

export default PokemonApi;

/*
    PROBLEM: 

    1. BEFORE showing the UI you are doing the API CALL which can Block the UI.
    2. if we have the api call directly then the API call will always happen in the UPDAte PHASE 

    i.e, if we update the component 100 times then the API call will also happen 100 times which is bad.

    SOLUTION: 
    useEffect(() => {}); // this will only solve 1st point and not 2nd.

    useEffect(() => {}, []); // this will solve all the points.

*/