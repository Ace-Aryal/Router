//Root file 📂 from which components are bundled and sent to main.jsx for render
import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Root() {
  const [count, setCount] = useState(0)
  // <outlet > : given by react router and is used to contain our componets 

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>    
      <Footer></Footer>
    </>
  )
}

export default Root
