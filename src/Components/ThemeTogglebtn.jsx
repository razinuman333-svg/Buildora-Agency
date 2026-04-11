import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeTogglebtn = ({Theme,setTheme}) => {
    useEffect(()=>{
        if(Theme === 'dark'){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('Theme',Theme)
    },[Theme])
  return (

    <>
      <button>
        {Theme === 'dark' ? (<img className='size-8.5 p-1.5 border border-gray-500 rounded-full' onClick={()=>setTheme('light')} src={assets.sun_icon}/>):(<img className='size-8.5 p-1.5 border border-gray-500 rounded-full' onClick={()=>setTheme('dark')} src ={assets.moon_icon}/>)}
      </button>
    </>
  )
}

export default ThemeTogglebtn
