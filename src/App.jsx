import { useState } from 'react'

import './App.css'
import NavBar from './Components/NavBar'

function App() {
 const [Theme,setTheme] = useState('light')

  return (
 <div className='dark:bg-black relative '>
  <NavBar Theme={Theme} setTheme={setTheme}/>
 </div>
  )
}

export default App
