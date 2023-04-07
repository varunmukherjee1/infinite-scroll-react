import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import classes from "./homepage.module.css"

const Homepage = () => {

    return (
        <>
            <Navbar/>
            <div className = {classes.body}>
                <div className= {classes.container}>
                    <div className = {classes.content}>
                        <p className = {classes.title}>To Access Users Login First !</p>
                        <div className = {classes.smileImg}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage