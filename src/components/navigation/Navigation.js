import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.css'


export default function Navigation({isAuthent}) {
    return(
        <nav>
            <div className="menu">
                <li> <NavLink to="/">Home</NavLink></li>
                    {/*//Make Link only show when isAuth is false (when user is not logged in)*/}
                {isAuthent === false ?  <><li><NavLink to="/login">Login</NavLink></li></> :
                <><li><NavLink to="/login">Logout</NavLink></li></> }
                {isAuthent === true && <li><NavLink to="/blogposts">Blog Overzicht</NavLink></li>}

            </div>

        </nav>
    )
}