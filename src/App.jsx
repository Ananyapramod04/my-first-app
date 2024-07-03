import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'
import Add from './components/Add'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Mcard from './components/Mcard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    {/* <h1>this is from app.jsx</h1> */}
      {/* <View/>
      <Add/> */}
      <Routes>
        <Route path='/' element={<View/>}></Route>
        <Route path='/add' element={<Add person={{name:'Shreya',
      email:'shr@gmail.com',
      password:'shr123',
      address:'shr'}}/>}></Route>
        <Route path='/Mcard' element={<Mcard/>}></Route>
      </Routes>
    </>
  )
}

export default App
