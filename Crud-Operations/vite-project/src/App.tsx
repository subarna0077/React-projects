import { useState } from 'react'
import './App.css'
import LogIn from './Components/LogIn'
import DashBoard from './Components/DashBoard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function onLogIn() {
    setIsLoggedIn(true);
  }

  const onAddStudent= ()=> {
    
  }

  return (
    <>
   {!isLoggedIn && <LogIn onLogIn={onLogIn}/>}
   {isLoggedIn && <DashBoard handleAddStudent={onAddStudent}/>}
    </>
  )
}

export default App
