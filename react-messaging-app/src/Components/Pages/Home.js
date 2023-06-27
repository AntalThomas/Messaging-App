import { Routes, Route } from 'react-router-dom'
import AllChatsPage from './AllChats'
import ChatPage from './Chat'
import SignUpPage from './SignUp'
import LogInPage from './LogIn'
import React, { useState } from 'react'


function HomePage () {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('JackEmail')
    const [userFriends, setUserFriend] = useState(["Jason", "Hugh", "Blake", "Kade", "Kate", "Hayley", "Kanye", "Joseph"])
    const [userChats, setUserChat] = useState([])
  
    const setUserNameFunc = (name) => { setUserName(name) }
    const setUserEmailFunc = (email) => { setUserEmail(email) }
    const setUserFriendFunc = (friend) => { setUserFriend([...userFriends, friend]) }
    const setUserChatFunc = (chat) => { setUserChat([...userChats, chat]) }
    
    
    return (
        <Routes>
          <Route path="/allchats" element={ <AllChatsPage 
            userName={ userName } 
            userEmail={ userEmail }
            userFriends={ userFriends }
            setUserEmail={ setUserEmailFunc }
            setUserName={ setUserNameFunc }/> } />
          <Route path="/chat" element={ <ChatPage /> } />
          <Route path="/signup" element={ <SignUpPage 
            setUserEmail={ setUserEmailFunc }
            setUserName={ setUserNameFunc }/> } />
          <Route path="/" element={ <LogInPage 
            setUserEmail={ setUserEmailFunc }
            setUserName={ setUserNameFunc }/> } />
        </Routes>
    )
}

export default HomePage