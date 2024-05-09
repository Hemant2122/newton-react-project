import { useEffect, useState } from "react";


function useFetch(url){

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
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
    }, [url]);


    return [data, loading, error];

}

export default useFetch;