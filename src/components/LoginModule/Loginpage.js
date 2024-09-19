import React, {useState, useEffect} from "react";
import {Redirect, useHistory} from "react-router-dom";
export default function Loginpage() {
    const history = useHistory();

    // const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') ?? '');
    // console.log("data is ", isLoggedIn);    
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleUserNameInputChange = (e) => {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                username: e.target.value
            }
        })
    }

    const handlePasswordInputChange = (e) => {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                password: e.target.value
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log("username & pwd ", formData.username, formData.password);
        localStorage.setItem("isLoggedIn", "true");
        history.push("/home");
    }

    return (
        <>
            {/* { (isLoggedIn) && <Redirect to="/home" />} */}
            <h2>Login page</h2>
            <div>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" value={formData.username} onChange={handleUserNameInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={formData.password} onChange={handlePasswordInputChange}/>
                    </div>
                    <div>
                        <button type="submit">submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}