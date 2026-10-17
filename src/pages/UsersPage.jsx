
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import UserCard from '../components/UserCard';
const UsersPage = () => {
    const [usersData, setUsersData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    const getUsersData = async () => {
        setIsLoading(true)
        try {
            const res = await axios.get("https://fakestoreapi.com/users")
            setUsersData(res.data);
        } catch (error) {
            console.log("error in users api", error);
        }finally{
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getUsersData()
    },[])

    if(isLoading) return <h1 className='text-4xl'>Loading users...</h1>
    
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {usersData.map((user) => (
            <UserCard key={user.id} user={user} />
        ))}
    </div>
  )
}

export default UsersPage