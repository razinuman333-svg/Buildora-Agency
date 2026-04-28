import { useState } from 'react'

import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Trustedby from './Components/Trustedby'
import Services from './Components/Services'
import OurWork from './Components/OurWork'
import Team from './Components/Team'

function App() {
 const [Theme,setTheme] = useState('light')

  return (
 <div className='dark:bg-black relative '>
  <NavBar Theme={Theme} setTheme={setTheme}/>
  <Hero/>
  <Trustedby/>
  <Services/>
  <OurWork/>
  <Team/>
 </div>
  )
}

export default App
