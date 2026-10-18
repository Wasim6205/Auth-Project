import { useContext } from "react"
import { NavLink } from "react-router"
import { Auth } from "../context/AuthContext"
import { toast } from 'react-toastify';

const Navbar = () => {
    const {setLoggedInUser} = useContext(Auth)
    const handleLogout = () => {
        localStorage.removeItem("loggedInUser")
        setLoggedInUser(null)
        toast.warn("user logged out")
    }
  return (
    <div className="border-r border-gray-500 p-3 flex flex-col justify-between">
        <div className="flex flex-col gap-10">
            <h1 className="text-3xl font-semibold">E-comm</h1>
            <div className="flex flex-col gap-4 ml-5">
                <NavLink className={({isActive}) => isActive ? "font-semibold text-red-500 border-b border-gray-500" : "text-black border-b border-gray-500"} to={"/main"} end>Home</NavLink>
                <NavLink className={({isActive}) => isActive ? "font-semibold text-red-500 border-b border-gray-500" : "text-black border-b border-gray-500"} to={"/main/users"}>Users</NavLink>
                <NavLink className={({isActive}) => isActive ? "font-semibold text-red-500 border-b border-gray-500" : "text-black border-b border-gray-500"} to={"/main/products"}>Products</NavLink>
            </div>
        </div>

        <button onClick={handleLogout} className="py-3 bg-red-600 text-white rounded cursor-pointer">Logout</button>
    </div>
  )
}

export default Navbar