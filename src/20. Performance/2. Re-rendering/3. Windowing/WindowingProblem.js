import { useCallback } from "react";
import Card from "./Component/Card";
import data from "./data/data";
import styles from "./WindowingProblem.module.css";

import { FixedSizeList as ListPerfComponent } from "react-window";

function WindowingProblem(){

    const Row = useCallback((props) => {
        const { index } = props;
        const cardData = data[index];

        return(
            <div>
                <Card {...cardData} />
            </div>
        )
    }, [data])

    return(
        <>
            <h1>Windowing Problem</h1>
        
            {/* EXAMOLE OF WHOLE LIST DISPLAY */}
            {/* <div className={styles.container}>
                {data.map((item) => {
                return <Card key={item.id} {...item} />;
                })}
            </div> */}

            {/* REACT.WINDOW */}

            <ListPerfComponent 
                height={600}
                width={700}
                itemCount={data.length}
                itemSize={100}
            >
                {Row}
            </ListPerfComponent>
        </>
    )
}

export default WindowingProblem;