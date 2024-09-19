import React, {useState, useEffect, useRef} from "react";
import { useFetch } from "./useFetch";

const URL = 'https://api.datamuse.com/words?rel_syn=';
export default function SynonymsFeature() {
    const [searchInput, setSearchInput] = useState('');
    const searchInputTimerRef = useRef(null);
    const [url, setUrl] = useState('');
    const {data, loading, error, fetchData} = useFetch();

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
        clearTimeout(searchInputTimerRef.current);
        searchInputTimerRef.current = setTimeout(() => {
            fetchData(`${URL}${e.target.value}`)
        }, 800);
    }

    // useEffect(() => {
    //     if(searchInput.length) {
    //         clearTimeout(searchInputTimerRef.current);
    //         searchInputTimerRef.current = setTimeout(() => {
    //             setUrl(`${URL}${searchInput}`)
    //         }, 800);
    //     }
    // }, [searchInput])

    return (
        <>
            <form >
                <label htmlFor="searchInput">Search</label>
                <input type="text" id="searchInput" onChange={handleSearchInputChange} value={searchInput}/>
            </form>
            <h2>Results are </h2>
            <ul>
                {data.map((element, index) => (
                    <>
                        <li key={index}>{element.word}</li>
                    </>
                ))}
            </ul>
        </>
    )
}