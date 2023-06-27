import DefaultLayout from "../Layout/DefaultLayout";
import '../Styles/LogIn.css'
import logo from '../../images/bubble.svg'
import { useNavigate } from "react-router-dom"


const SignUpPage = ({ setUserEmail, setUserName }) => {
    let navigate = useNavigate()

    async function signUp(e) {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))
    
        await fetch('/signup', {
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
                <h2>Create your account for<br/><span>Messaging App</span><br/>by Blake Varbai-Heward</h2>
            </div>

            <div className="forms">
                <form action="" onSubmit={ signUp }>
                    <div className="inputs">
                        <input className="signUpInput" type="text" placeholder="Name" name="name"/>
                        <input className="signUpInput" type="text" placeholder="Email" name="email"/>
                        <input className="signUpInput" type="password" placeholder="Password" name="password"/>
                    </div>

                    <button>Create Account</button>
                </form>

                <a href="/">Back</a>
            </div>
        </DefaultLayout>
    )
}

export default SignUpPage