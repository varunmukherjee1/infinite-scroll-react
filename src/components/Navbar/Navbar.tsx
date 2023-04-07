import React from 'react'
import { Link } from 'react-router-dom';

import classes from "./navbar.module.css"

const Navbar = () => {
    return (
        <div className = {classes.container}>
            <div className = {classes.nav}>
                <Link to = "/" className = {classes.logo}>
                    <p>Users</p>
                </Link>

                <Link to = "/login" className = {classes.login}>
                    <p>Login</p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar