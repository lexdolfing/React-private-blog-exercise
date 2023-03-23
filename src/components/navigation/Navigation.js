import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.css'


export default function Navigation() {
    return(
        <nav>
            <div className="menu">
                <li> <NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/blogposts">Blog Overzicht</NavLink></li>

            </div>

        </nav>
    )
}