import { useState } from "react";
import styles from "./PokemonCardComponent.module.css"
import PokemonModalComponent from "./PokemonModalComponent";

function PokemonCardComponent(props){

    const { pokemon } = props;
    const {id, name, type, image } = pokemon;

    const [modal, setModal] = useState(false);

    // CARD FOR THE POKEMON.
    return(
        <>
            {/* DISCUS about Different card container */}
            <div className={`${styles["card-container"]} ${styles[type]}`}>
                <div className={styles.number}>
                    #{id}
                </div>
                <img className={styles.image} src={image} alt="Pokemon_Image" />
                <div className="detail-wrapper">
                    <h3 className={styles.nameStyle}>{name.toUpperCase()}</h3>
                    <p>Type: {type}</p>
                </div>
                <div className={styles.knowMoreBtn} onClick={() => {
                    setModal((old) => !old);
                }}>
                    Know more...
                </div>
            </div>

            {/* Modal */}

            {
                modal && (
                    <PokemonModalComponent pokemon={pokemon}/>
                )
            }
        </>
    )
}

export default PokemonCardComponent;