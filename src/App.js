import React from 'react'
import  { useSelector } from 'react-redux'
import Login from './Components/Login'
import Logout from './Components/Logout'
import { selectUser } from './features/userSlice'
import './App.css'

const App = () => {
    const user = useSelector(selectUser)

    return (
        <div>
            {user ? <Logout /> : <Login />}
        </div>
    )
}

export default App
