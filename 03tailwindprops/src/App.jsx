import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myobj={
    fullname:"alekhya ghosh",
    age:21
  }
  let myArrr=[1,2,3,4]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-2xl'>Tailwind </h1>
     {/* <figure className="bg-gray-100 p-4 rounded-xl shadow-md w-80 mt-4">
        <img
          src="https://images.pexels.com/photos/18192646/pexels-photo-18192646.jpeg"
          alt="Hero"
          className="rounded-lg"
        />
        <figcaption className="text-center text-gray-700 mt-2">
          This is a caption
        </figcaption>
      </figure> */}
    
    <Card username="Alekhya" newobj={myobj} newarr={myArrr} />
    <Card username="Ghosh"/>
    
    
    </>
  )
}

export default App
