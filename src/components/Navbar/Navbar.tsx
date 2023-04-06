import React from 'react'
import { Link } from 'react-router-dom';

import classes from "./navbar.module.css"

const Navbar: React.FC<{showModal: () => void}> = (props) => {
    return (
        <div className = {classes.container}>
            <div className = {classes.nav}>
                <Link to = "/" className = {classes.logo}>
                    <p>Users</p>
                </Link>

                <button className = {classes.login} onClick = {props.showModal}>
                    Login
                </button>
            </div>
        </div>
    )
}

export default Navbar