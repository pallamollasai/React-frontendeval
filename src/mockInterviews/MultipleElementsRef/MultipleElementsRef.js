import React, {useRef, useEffect} from "react";
import "./styles.css";

const users = [
    "san fransisco",
    "paul alto",
    "alexandar",
    "alexandar",
    "sai"
]
export default function MultipleElementsRef() {
    const usersRef = useRef([]);

    useEffect(() => {
        usersRef.current.forEach((el) => {
            if(el.innerText.includes("ale")) {
                el.style.backgroundColor = 'red';
            }
        })
    }, [])

    return (
        <>
            <table>
                <tr>
                    <th>Name</th>
                </tr>
                {users.map((user, index) => (
                    <tr key={index} >
                        <td ref={el => usersRef.current[index] = el}>{user}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}