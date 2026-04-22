import React,{useContext} from 'react'
import UserContext from '../context/UserContext.js'
import UserContextProvider from '../context/UserContextProvider.jsx'

function Profile() {
    const {user}=useContext(UserContext)
  if (!user) return <div>Please Login</div>

  return <div>Welcome {user.username}</div>
}

export default Profile