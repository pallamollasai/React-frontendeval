import React, {useState, useEffect} from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            console.log("calling api call");
            try {
                setLoading(true);
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch(err) {
                setError(err);
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return [data, loading, error];
}