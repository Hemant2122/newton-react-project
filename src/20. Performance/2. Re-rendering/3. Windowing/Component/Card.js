import styles from "./Card.module.css";

function Card(props){

    const { albumId, id, title, thumbnailUrl } = props;

    // console.log(props);

    return(
        <>
            <div className={styles["card-container"]}>
                <img src={thumbnailUrl} alt="Image" className={styles.image} />

                <div className={styles["card-info"]} key={id}>
                    <h3>albumId: {albumId}</h3>
                    <h3>title: {title}</h3>
                </div>
            </div>
        </>
    )
}

export default Card;