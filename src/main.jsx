import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import './main.scss'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './Root'
import Home from './Components/Home/Home' 
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import User from './Components/User/User'
import Github from './Components/Github/Github'
// instead of App.jsx we import our Conditional Components here(main.jsx) and remder them accordingly by packaging them into <Outlet /> 
// we can pack them in outlet with brlow syntaxes


 /* const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />, // Root Contents [header and footer] in our case
    children: [  // contents we want to pack inside outlet
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path : "/contact",
        element : <Contact />
      }
    ],
  },
])
  */

// easier syntax
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Root/>}>
      <Route path = "" element = {<Home/>} />
      <Route path='/about' element = {<About/>} />
      <Route path='/user/:userId' element = {<User/>} />
     <Route path="/contact" element= {<Contact/>} />
     <Route path="/github" element= {<Github/>} />

    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> // rea ct - router -syntax
  </React.StrictMode>
)
