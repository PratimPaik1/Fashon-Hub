import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import LastSection from './Components/LastSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-x-hidden'>
       <Section1/> 
       <Section2/>
       <Section3/>
       <LastSection/>
       
    </div>
  )
}

export default App
