import React, {useState} from 'react'

import userContext from "./user-context"

const UserProvider:React.FC<{
    children: React.ReactNode
}> = (props) =>{

    const [username,setUsername] = useState<string>("none")

    const logout = () => {
        setUsername("none")
    }

    const setUser = (name: string) => {
        setUsername(name);
    }

    const context = {
        username,
        logout,
        setUser
    }

    return (
        <userContext.Provider value = {context}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserProvider