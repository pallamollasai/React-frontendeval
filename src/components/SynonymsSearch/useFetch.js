import React, { useState, useEffect } from "react"
export const  useFetch = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // instead of checking the url you can use a getter and
    // return that getter function and access it in the synonyms feature
    const fetchData = async (url) => {
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            setLoading(false);
        } catch(err) {
            setLoading(false);
            setError(true);
        }
    }
    return {data, loading, error, fetchData};
}