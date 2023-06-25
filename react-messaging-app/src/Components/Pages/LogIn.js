import DefaultLayout from "../Layout/DefaultLayout";
import '../Styles/LogIn.css'
import logo from '../../images/bubble.svg'

const logIn = (e) => {
    e.preventDefault()
    const form = e.target
    const data = Object.fromEntries(new FormData(form))

    console.log(data)

    // fetch('/api/sessions', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    // })
    // .then(res => res.json())
    // .then(res => console.log(res))
}

const LogInPage = () => {
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