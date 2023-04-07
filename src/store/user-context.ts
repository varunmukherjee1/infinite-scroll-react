import React from "react"

const userContext = React.createContext<{
    username: string,
    setUser: (name: string) => void,
    logout: () => void
}>({
    username: "null",
    setUser: (name: string) => {},
    logout: () => {}
})

export default userContext;