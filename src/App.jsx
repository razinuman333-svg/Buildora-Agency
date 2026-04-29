import { useState } from 'react'

import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Trustedby from './Components/Trustedby'
import Services from './Components/Services'
import OurWork from './Components/OurWork'
import Team from './Components/Team'
import Contactus from './Components/Contactus'
import {Toaster} from 'react-hot-toast'

function App() {
 const [Theme,setTheme] = useState('light')

  return (
 <div className='dark:bg-black relative '>
  <Toaster/>
  <NavBar Theme={Theme} setTheme={setTheme}/>
  <Hero/>
  <Trustedby/>
  <Services/>
  <OurWork/>
  <Team/>
  <Contactus/>
  
 </div>
  )
}

export default App
