import React from 'react'

import User from '../../models/user'
import classes from "./userCard.module.css"

const UserCard: React.FC<{
    userData: User
}> = (props) => {

    const name = `${props.userData.name.first} ${props.userData.name.last}`
    const pic = props.userData.img;

    return (
        <div className = {classes.card}>
            <p>{name}</p>
            <img src= {pic} alt="user pic" />
        </div>
    )
}

export default UserCard