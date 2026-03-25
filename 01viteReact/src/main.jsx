import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

// function will be always in block letter
function Myapp() {
    return(
        <div>
            <h1>Custom app!</h1>
        </div>
    )
}

const anotherElement=(
    <a href="https://google.com" target='_blank'>Visit Gooogle</a>
)

const anotherUser="Alekhya Ghosh"
const reactElement=React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google',
    anotherUser
)

createRoot(document.getElementById('root')).render(
 
    // <App />
    reactElement
)
