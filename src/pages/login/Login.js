import React from 'react';
import {useNavigate} from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();


    return (
        <>
        <h1>Login pagina</h1>
        <p>druk op de knop om in te loggen!</p>
            <button onClick={() => navigate("/")}>Klik hier jij</button>

        </>
    );
}