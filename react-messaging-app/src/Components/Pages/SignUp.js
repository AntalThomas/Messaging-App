import DefaultLayout from "../Layout/DefaultLayout";
import '../Styles/LogIn.css'
import logo from '../../images/bubble.svg'

function signUp(e) {
    e.preventDefault()
    const form = e.target
    const data = Object.fromEntries(new FormData(form))

    fetch('/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(email => console.log(email))
}

const SignUpPage = () => {
    return (
        <DefaultLayout>
            <div className="visual">
                <img src={ logo } alt="" />
                <h2>Create your account for<br/><span>Messaging App</span><br/> by Blake Varbai-Heward</h2>
            </div>

            <div className="forms">
                <form action="" onSubmit={ signUp }>
                    <div className="inputs">
                        <input type="text" placeholder="Name" name="name"/>
                        <input type="text" placeholder="Email" name="email"/>
                        <input type="password" placeholder="Password" name="password"/>
                    </div>
                    <button>Create Account</button>
                </form>

                <a href="/">Back</a>
            </div>
        </DefaultLayout>
    )
}

export default SignUpPage