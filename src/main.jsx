import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Root'
import './index.css'
import './main.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import Home from './Components/Home/Home' 
import About from './Components/About/About'
// instead of App.jsx we import our Conditional Components here(main.jsx) and remder them accordingly by packaging them into <Outlet /> 
// we can pack them in outlet with brlow syntaxes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />, // Root Contents [header and footer] in our case
    children: [  // contents we want to pack inside outlet
      {
        path: '',
        element: <Home />,
      },
      {
        path: '',
        element: <About />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> // rea ct - router -syntax
  </React.StrictMode>
)
