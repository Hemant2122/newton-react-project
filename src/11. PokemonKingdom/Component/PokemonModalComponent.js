import styles from "./PokemonModalComponent.module.css";
import stylesCard from "./PokemonCardComponent.module.css";


function PokemonModalComponent(props){
    const { pokemon } = props;
    const { height, weight, stats = [], id, name, type, image } = pokemon;


    return(
        <>
            <div className={`${styles.popupContainer} ${stylesCard[type]}`}>

                {/* cross sing */}
                <div className={styles.closeButton} onClick={() => {
                    console.log("close this popup");
                }}>
                    X
                </div>
                {/* left */}
                <div className={styles.leftContainer}>
                    <img className={styles.modalImage} src={image} alt={name} />
                    <h4 className={styles.nameText}>{name}</h4>
                </div>

                {/* right */}
                <div className={`${styles.rightContainer} ${stylesCard[type]}`}>

                    <div>
                        <p>Weight: {weight}</p>
                        <p>Height: {height}</p>
                    </div>

                    {/* STATS 1 */}
                    <div>
                        {Array.from(stats).map((statObj, index) => {
                            const {stat} = statObj;
                            const name = stat.name;

                            return (
                                <p>
                                    Stat{index + 1}: {name}
                                </p>
                            );
                        })}
                    </div>

                    {/* STATS 2 */}
                    <div>
                        {Array.from(stats).map((statObj, index) => {
                            const {base_stat} = statObj;

                            return (
                                <p>
                                    Bs{index + 1}: {base_stat}
                                </p>
                            );
                        })}
                    </div>

                </div>

            </div>
        </>
    )
}

export default PokemonModalComponent;