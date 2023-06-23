import './App.css';
import { Route, Routes } from 'react-router-dom'
import AllChats from './Components/Pages/AllChats'
import Chat from './Components/Pages/Chat'
import Home from './Components/Pages/Home'
import SignUp from './Components/Pages/SignUp'

function App() {
  return (
    <>
      <Routes>
          <Route path="/allchats" element={ <AllChats /> } />
          <Route path="/chat" element={ <Chat /> } />
          <Route path="/signup" element={ <SignUp /> } />
          <Route path="/" element={ <Home /> } />
      </Routes>
    </>
  );
}

export default App;
