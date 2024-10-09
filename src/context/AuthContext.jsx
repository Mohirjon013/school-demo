import { createContext, useState } from "react";

export const Context = createContext()

export const AuthContext = ({children}) => {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("token"))||null)
    const [register, setRegister] = useState(JSON.parse(localStorage.getItem("register")) || null)
    localStorage.setItem("token", JSON.stringify(token))

    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])
    localStorage.setItem("users", JSON.stringify(users))

    const [isloading, setIsloading] = useState(false)

    const [isModelOpen, setIsModelOpen] = useState(false)
    function deleteBTn(id){
        const findIndex = users.findIndex(item => item.id == id)
        users.splice(findIndex, 1)
        setUsers([...users])
    }

    return (
        <Context.Provider value={{token, setToken, isloading, setIsloading, register, setRegister, users, setUsers, deleteBTn, isModelOpen, setIsModelOpen}}>{children}</Context.Provider>
    )
}