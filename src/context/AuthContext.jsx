import { useState } from "react";
import { createContext } from "react";

export const Auth = createContext()

export const AuthProvider = ({children}) => {
    const [registeredUsers,setRegisteredUsers] = useState(JSON.parse(localStorage.getItem("registeredUsers")) || [])
    const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("loggedInUser")))
    return <Auth.Provider value={{registeredUsers,setRegisteredUsers,loggedInUser,setLoggedInUser}}>
        {children}
    </Auth.Provider>
}