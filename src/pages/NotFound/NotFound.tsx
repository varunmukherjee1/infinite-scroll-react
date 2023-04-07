import React from 'react'
import { Link } from 'react-router-dom'

import classes from "./notFound.module.css"

const NotFound = () => {
    return (
        <div className = {classes.body}>
            <div className = {classes.container}>
                <div className = {classes.content}>
                    <p className = {classes.heading}>404 Page Not Found ❌</p>
                    <p className = {classes.link}>
                     👉🏻 <Link to = "/">Homepage</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NotFound