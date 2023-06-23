import DefaultLayout from "../Layout/DefaultLayout";
import '../Styles/LogIn.css'
import logo from '../../images/bubble.png'

const LogIn = () => {
    return (
        <DefaultLayout>
            <div className="visual">
                <img src={ logo } alt="" />
                <h2>Welcome to <br/><span>Messaging App</span><br/> by Blake Varbai-Heward</h2>
            </div>

            <div className="forms">
                <form action="">
                    <div className="inputs">
                        <input type="password" placeholder="Password" name="password"/>
                        <input type="text" placeholder="Email" name="email"/>
                    </div>
                    
                    <button>Log In</button>
                </form>

                <a href="/signup">Create New Account</a>
            </div>
        </DefaultLayout>
    )
}

export default LogIn