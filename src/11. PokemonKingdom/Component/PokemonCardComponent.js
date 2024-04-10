import styles from "./PokemonCardComponent.module.css"

function PokemonCardComponent(props){
    const {id, name, type, image } = props;

    // CARD FOR THE POKEMON.
    return(
        <>
            {/* DISCUS about Different card container */}
            <div className={styles['card-container']}>
                <div className="number">
                    #{id}
                </div>
                <img className={styles["image"]} src={image} alt="Pokemon Image" />
                <div className="detail-wrapper">
                    <h3>{name}</h3>
                    <p>Type: {type}</p>
                </div>
                <button>Know more...</button>
            </div>
        </>
    )
}

export default PokemonCardComponent;