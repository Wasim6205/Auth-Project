import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { Auth } from "../context/AuthContext"
import { toast } from "react-toastify"

export const useAuth = () => {
    const {loggedInUser,setLoggedInUser,registeredUsers,setRegisteredUsers} = useContext(Auth)
    const navigate = useNavigate()
    
    const {register,handleSubmit,reset,formState:{errors,isValid}} = useForm()

    // login logic
    const loginFormSubmit = (data) => {
        let user = registeredUsers.find((user) => user.email===data.email && user.password===data.password)
        if(!user){
            toast.error("invalid credentials")
            return
        }
        setLoggedInUser(user)
        localStorage.setItem("loggedInUser",JSON.stringify(user))
        toast.success("user logged in")
        navigate("/main")
        reset()
    }

    // register logic
    const registerFormSubmit = (data) => {
            let arr = [...registeredUsers,data]
            setRegisteredUsers(arr)
            toast.success("user registered successfully")
            localStorage.setItem("registeredUsers",JSON.stringify(arr))
            reset()
    }
    
    
    return {
        register,
        handleSubmit,
        errors,
        loginFormSubmit,
        registerFormSubmit,
        isValid
    }
}