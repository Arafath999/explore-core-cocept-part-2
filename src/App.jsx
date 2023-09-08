import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './count'
import Team from './Team'
import Users from './users'
import Friends from './friends'

function App() {

  function handleClick (){
    alert ('button click');
  }
  const handleClick2 = () => {
    alert('go back');
  }

  return (
    <>
      <h1>Dilruba's Friend</h1>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}> click me</button>
      <button onClick={handleClick2}> click me</button>
      
    </>
  )
}

export default App
