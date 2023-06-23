import DefaultLayout from "../Layout/DefaultLayout";
import '../Styles/LogIn.css'
import logo from '../../images/bubble.png'

const SignUp = () => {
    return (
        <DefaultLayout>
            <div className="visual">
                <img src={ logo } alt="" />
                <h2>Please sign up for <br/><span>Messaging App</span><br/> by Blake Varbai-Heward</h2>
            </div>

            <div className="forms">
                <form action="">
                    <div className="inputs">
                        <input type="text" placeholder="Name" name="name"/>
                        <input type="text" placeholder="Email" name="email"/>
                        <input type="password" placeholder="Password" name="password"/>
                    </div>
                    <button>Log In</button>
                </form>

                <a href="/">Back</a>
            </div>
        </DefaultLayout>
    )
}

export default SignUp