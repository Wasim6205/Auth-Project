import { useContext } from 'react'
import { Outlet } from 'react-router'
import { Auth } from '../context/AuthContext'
import { Navigate } from 'react-router'

const ProtectedRoute = () => {
    const {loggedInUser} = useContext(Auth)
    if(!loggedInUser){
        return <Navigate to={'/'} />
    }
  return <Outlet />
}

export default ProtectedRoute