import React from 'react'
import Login from './Login'

const Private = ({ children }) => {

    const isuth = localStorage.getItem("token")

    if (!isuth) {
        alert("You are not Logged in 🤦‍♀️!! Plaese Login🔥")
        window.location.href = "/login"

    }
    else {
        return children
    }


}

export default Private
