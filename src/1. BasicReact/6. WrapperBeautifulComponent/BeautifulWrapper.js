import styles from "./BeautifulWrapper.module.css";

function BeautifulWrapper(props){

    const {children, beauty} = props;

    return(
        <>
            <div>Beauti wrapper {beauty}</div>
            <div className={styles.container}>{children}</div>
        </>
    )
}

export default BeautifulWrapper;