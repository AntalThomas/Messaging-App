import DefaultLayout from "../Layout/DefaultLayout";
import '../Styles/Chat.css'
import arrowBack from '../../images/arrowBack.svg'
import send from '../../images/send.svg'

function sendMessage(e) {
    e.preventDefault()
    const userInput = document.querySelector('.sendMessageInput').value
    document.querySelector('.sendMessageInput').value = ""
    

    console.log(userInput)
}


const ChatPage = () => {
    return (
        <DefaultLayout>
            <section className="nav">
                <a href="/allchats" className="arrowBack">
                    <img className="arrowBackImg" src={ arrowBack } alt=""/>
                </a>

                <div className="userPictureBig">A</div>
                <h2>friend[name]</h2>
            </section>

            <section className="conversation">
                <div className="userMessage">
                    <div className="userPictureSmall">A</div>
                    <div className="messageSent">
                        HOW ARE YOU !!!!!awdw dawdawd awdjnuiawduioawu idawudhawnduaw awdb awi dabnwd iaw buiaw buidawb nd
                    </div>
                </div>

                <div className="userMessage">
                    <div className="userPictureSmall">A</div>
                    <div className="messageSent">
                        HOW ARE YOU !!!!!awdw dawdawd awdjnuiawduioawu idawudhawnduaw awdb awi dabnwd iaw buiaw buidawb nd
                    </div>
                </div>

                <div className="userMessage">
                    <div className="userPictureSmall">A</div>
                    <div className="messageSent">
                        HOW ARE YOU !!!!!awdw dawdawd awdjnuiawduioawu idawudhawnduaw awdb awi dabnwd iaw buiaw buidawb nd
                    </div>
                </div>

                <div className="userMessage">
                    <div className="userPictureSmall">A</div>
                    <div className="messageSent">
                        HOW ARE YOU !!!!!awdw dawdawd awdjnuiawduioawu idawudhawnduaw awdb awi dabnwd iaw buiaw buidawb nd
                    </div>
                </div>

                <div className="userMessage">
                    <div className="userPictureSmall">A</div>
                    <div className="messageSent">
                        HOW ARE YOU !!!!!awdw dawdawd awdjnuiawduioawu idawudhawnduaw awdb awi dabnwd iaw buiaw buidawb nd
                    </div>
                </div>

                <div className="userMessage">
                    <div className="userPictureSmall">A</div>
                    <div className="messageSent">
                        HOW ARE YOU !!!!!awdw dawdawd awdjnuiawduioawu idawudhawnduaw awdb awi dabnwd iaw buiaw buidawb nd
                    </div>
                </div>

                <div className="userMessage">
                    <div className="userPictureSmall">A</div>
                    <div className="messageSent">
                        HOW ARE YOU !!!!!awdw dawdawd awdjnuiawduioawu idawudhawnduaw awdb awi dabnwd iaw buiaw buidawb nd
                    </div>
                </div>
            </section>

            <section className="userInput">
                <form className="sendMessageForm" action="" onSubmit={ sendMessage }>
                    <input className="sendMessageInput" type="text" name="userMessage"/>
                    <button className="sendMessageButton"><img src={ send } alt=""/></button>
                </form>
            </section>
        </DefaultLayout>
    )
}

export default ChatPage