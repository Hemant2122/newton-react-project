import { useEffect, useState } from "react";
import Users from "./Users";


function RandomUsersAPI(){
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);


    useEffect(() => {
        async function fetchData(){
            const response = await fetch(`https://randomuser.me/api/?results=10`);
            const newData = await response.json();

            newData.results.map((data) => {
                setItems((prevUser) => [...prevUser, data.name.first]);
            });
        }

        fetchData();
    }, []);

    setTimeout(() => {
        setLoading(false);
    }, 3000)

    return <Users isLoading={isLoading} items={items} />;
}

export default RandomUsersAPI;