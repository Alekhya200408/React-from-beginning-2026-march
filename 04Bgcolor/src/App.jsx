import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}
    >
      <div className=' fixed flex flex-wrap inset-x-0.5 px-2  bottom-5  justify-center' >
        <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-xl outline-none'>
          <button className='outline-none px-4 text-white rounded-xl cursor-pointer' style={{backgroundColor:'green'}} onClick={() => setColor("green")}>Green</button>
          <button className='outline-none px-4 text-white rounded-xl cursor-pointer' style={{backgroundColor:'red'}} onClick={() => setColor("red")}>Red</button>
          <button className='outline-none px-4 text-white rounded-xl cursor-pointer' style={{backgroundColor:'blue'}} onClick={() => setColor("blue")}>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
