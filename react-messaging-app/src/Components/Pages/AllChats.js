import DefaultLayout from "../Layout/DefaultLayout"
import '../Styles/AllChats.css'
import signOutImg from '../../images/signOut.svg'
import { useNavigate } from "react-router-dom"

const AllChatsPage = ({ userName, userEmail, userFriends, setUserEmail, setUserName }) => {
    let navigate = useNavigate()
    let filteredFriends = []

    function enterChat(e) {
        e.preventDefault()
        const chat = e.target.closest('.friend')
        !chat ? console.log() : console.log(chat)
    }
    
    function searchFriends(e) {
        e.preventDefault()
        const searchFriendsText = e.target.value

        for (let i = 0; i < userFriends.length; i++) {
            if (userFriends[i].toLowerCase().includes(searchFriendsText)) {
                filteredFriends.push(userFriends[i])
            }
        }

        console.log(filteredFriends)
    }
    
    async function signOut() {
        await fetch('/allusers')

        await fetch("/signout", {
            method: "DELETE"
        })
            .then(() => {
                setUserEmail("")
                setUserName("")
                navigate("/")
            })
    }

    return (
        <DefaultLayout>
            <section className="nav2">
                <div className="userPictureBig2" onClick={ signOut }>
                    <img className="signOut" src={ signOutImg } alt="" />
                    <h3 className="userName">{ userName[0] }</h3>
                </div>
                <input
                    onChange={ searchFriends }
                    className="searchChats"
                    type="text"
                    name="searchChats"
                />
            </section>

            <section onClick={ enterChat } className="allFriends">
                { userFriends.map((friend, index) => 
                    <div className="friend" key={ index }>
                        <div className="userPictureSmall">{ friend[0] }</div>
                        <div className="friendInfo">
                            <h2>{ friend }</h2>
                            <p>MOST RECENT MESSAGE SENT HERE</p>
                        </div>
                    </div>
                )}
            </section>
        </DefaultLayout>
    )
}

export default AllChatsPage