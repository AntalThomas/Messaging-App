import DefaultLayout from "../Layout/DefaultLayout"
import '../Styles/AllChats.css'

function enterChat(e) {
    e.preventDefault()
    const chat = e.target.closest('.friend')

    if (!chat) console.log()
    else console.log(chat)
}

function searchFriends(e) {
    e.preventDefault()
    const searchFriendsText = e.target.value

    console.log(searchFriendsText)
}

function signOut() {
    console.log('signout')
}

const AllChatsPage = ({ userName, userEmail, userFriends }) => {
    return (
        <DefaultLayout>
            <section className="nav2">
                <div className="userPictureBig2" onClick={ signOut }>{ userName[0] }</div>
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
                        <div className="userPictureSmall">A</div>
                        <div className="friendInfo">
                            <h2>{ friend }</h2>
                            <h3>MOST RECENT MESSAGE SENT HERE</h3>
                        </div>
                    </div>
                )}
            </section>
        </DefaultLayout>
    )
}

export default AllChatsPage