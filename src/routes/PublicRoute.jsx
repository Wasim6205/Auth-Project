import { useContext } from 'react'
import { Outlet } from 'react-router'
import { Auth } from '../context/AuthContext'
import { Navigate } from 'react-router'

const PublicRoute = () => {
    const {loggedInUser} = useContext(Auth)
    if(loggedInUser){
        return <Navigate to={'/main'} />
    }
  return <Outlet />
}

export default PublicRoute