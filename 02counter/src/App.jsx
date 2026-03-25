import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter,setCounter]=useState(5)

  // let counter=15
  const addValue=()=>{
    setCounter(counter+1)
    // console.log(counter,"Value added",Math.round(Math.random()*10));
  }

  const removeValue=()=>{
    if (counter>0) {
      setCounter(counter-1)
      
    }
  }

  return (
    <>
    
    <h1>Hello this is react</h1>
    <h2>Count number:{counter}</h2>

    <button onClick={addValue}>add number</button>
    <br />
    <button onClick={removeValue}>remove number</button>
    </>
  )
}

export default App
