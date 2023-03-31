import React from 'react';
import {useNavigate} from "react-router-dom";
import App from '../../App'

export default function Login({toggleAuth , isAuth}) {
    const navigate = useNavigate();
    console.log("dit is gelogd in de login pagina " + isAuth)

    function signIn() {
        toggleAuth(true);
        navigate("/");
    }

    function signOut() {
        toggleAuth(false);
        navigate("/");
        console.log(isAuth)
    }

    return (
        <>
            {isAuth === false &&  <>
        <h1>Login pagina</h1>
        <p>druk op de knop om in te loggen!</p>
            <button onClick={signIn}>Klik hier jij lekker ding</button></>}
            {isAuth === true && <>
            <h1>Logout pagina</h1>
                <p>druk op de knop om uit te loggen!</p>
                <button onClick={signOut}>Klik hier jij lekker ding</button></> }


        </>
    );
}