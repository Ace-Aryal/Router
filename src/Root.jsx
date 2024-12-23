//Root file 📂 from which components are bundled and sent to main.jsx for render
import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Root() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Outlet></Outlet> // given by react router and is used to contain our componets 
      <Footer></Footer>
    </>
  )
}

export default Root
