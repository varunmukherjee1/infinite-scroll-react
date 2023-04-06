import React from 'react'

import classes from "./homepage.module.css"

const Homepage = () => {

    return (
        <div className = {classes.body}>
            <div className= {classes.container}>
                <div className = {classes.content}>
                    <p className = {classes.title}>To Access Users Login First !</p>
                    <div className = {classes.smileImg}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage