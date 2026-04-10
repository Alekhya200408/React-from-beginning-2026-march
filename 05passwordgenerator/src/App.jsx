import { useCallback, useState,useEffect,useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [allownumbers,setallownumbers]=useState(false)
  const [allowcharacters,setallowcharacters]=useState(false)
  const [password,setpassword]=useState("")
  // useref Hook
  const passwordref=useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (allownumbers) str+="0123456789"
    if (allowcharacters) str+="!@#$%^&*()_+-=[]{}|;:'<>?/`~"

    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random() * str.length + 1) 
      
      pass+=str.charAt(char)
    }
    setpassword(pass)


  },[length,allownumbers,allowcharacters,setpassword])

  const copytoclipboard=useCallback(()=>{
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,20) //for range selection
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,allownumbers,allowcharacters,passwordGenerator])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-8 text-orange-400 bg-zinc-700 text-center'>
      <h1>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white my-3'>
      <input type="text"
             value={password}
             className='outline-none w-full py-1 px-3 text-black' 
             placeholder='password'
             readOnly
             ref={passwordref}
      />
      <button onClick={copytoclipboard} className='bg-blue-700 text-white p-0.5 cursor-pointer'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
                 min={8}
                 max={100}
                 value={length}
                 className='cursor-pointer'
                 onChange={(e)=>{setlength(e.target.value)}}
          />
          <label>Length:{length}</label>
        </div>
        <div>
          <input type="checkbox"
                 defaultChecked={allownumbers}
                 id="numberinput"
                 onChange={()=>{
                  setallownumbers((prev)=>(!prev))
                 }}
          />
          <label>Numbers</label>
        </div>
        <div>
          <input type="checkbox"
                 defaultChecked={allownumbers}
                 id="numberinput"
                 onChange={()=>{
                  setallowcharacters((prev)=>(!prev))
                 }}
          />
          <label>Characters</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
