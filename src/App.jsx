import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ServiceList from './components/Services/ServiceList'
import AddService from './components/Services/AddService'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <ServiceList/>
        <AddService/>
      
    </>
  )
}

export default App
