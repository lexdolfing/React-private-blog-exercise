import React from 'react';
import {useNavigate} from "react-router-dom";
import App from '../../App'

export default function Login({toggleAuth}) {
    const navigate = useNavigate();

    function signIn() {
        toggleAuth(true)
        navigate("/")
    }


    return (
        <>
        <h1>Login pagina</h1>
        <p>druk op de knop om in te loggen!</p>
            <button onClick={signIn}>Klik hier jij lekker ding</button>

        </>
    );
}