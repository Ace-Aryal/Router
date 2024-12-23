import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Root'
import './index.css'
import './main.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import Home from './Components/Home/Home'
import About from './Components/About/About'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
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
    <RouterProvider router={router} />
  </React.StrictMode>
)
