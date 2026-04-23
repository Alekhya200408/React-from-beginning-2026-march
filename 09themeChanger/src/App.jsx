
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './Components/Themebtn';
import Card from './Components/Cards';

function App() {
  
  const [thememode,setThememode]=useState("light");

  const darkTheme =()=>{
    setThememode("dark")
  }
  const lightTheme =()=>{
    setThememode("light")
  }

  // How actually it change the color
  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(thememode)
  },[thememode])

  return (
    <ThemeProvider value={{thememode,darkTheme,lightTheme}}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
    
  )
}

export default App
