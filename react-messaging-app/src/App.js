import './App.css';
import { Route, Routes } from 'react-router-dom'
import AllChatsPage from './Components/Pages/AllChats'
import ChatPage from './Components/Pages/Chat'
import HomePage from './Components/Pages/Home'
import SignUpPage from './Components/Pages/SignUp'
import React from 'react';

function App() {
  return (
    <>
      <Routes>
          <Route path="/allchats" element={ <AllChatsPage /> } />
          <Route path="/chat" element={ <ChatPage /> } />
          <Route path="/signup" element={ <SignUpPage /> } />
          <Route path="/" element={ <HomePage /> } />
      </Routes>
    </>
  );
}

export default App;
