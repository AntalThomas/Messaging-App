import DefaultLayout from "../Layout/DefaultLayout"
import '../Styles/LogIn.css'
import logo from '../../images/bubble.svg'
import React from 'react'
import { useNavigate } from "react-router-dom"

const LogInPage = ({ setUserEmail, setUserName }) => {
    let navigate = useNavigate()
    
    async function logIn(event) {
        event.preventDefault()
        const data = Object.fromEntries(new FormData(event.target))
        
        await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(user => {
                setUserEmail(user.email)
                setUserName(user.name)
                navigate("/allchats")
            })
    }

    return (
        <DefaultLayout>
            <div className="visual">
                <img src={ logo } alt="" />
                <h2>Welcome to <br/><span>Messaging App</span><br/> by Blake Varbai-Heward</h2>
            </div>

            <div className="forms">
                <form action="" onSubmit={ logIn }>
                    <div className="inputs">
                        <input className="loginInput" type="text" placeholder="Email" name="email"/>
                        <input className="loginInput" type="password" placeholder="Password" name="password"/>
                    </div>
                    
                    <button>Log In</button>
                </form>

                <a href="/signup">Create New Account</a>
            </div>
        </DefaultLayout>
    )
}

export default LogInPage