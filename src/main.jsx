import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Carros from './pages/Carros.jsx'
import Streaming from './pages/Streaming.jsx'
import Noticias from './pages/Noticias.jsx'
import Login from './pages/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'carros',
        element: <Carros/>
      },
      {
        path: 'streaming',
        element: <Streaming/>
      },
      {
        path: 'noticias',
        element: <Noticias/>
      },
      {
        path: 'login',
        element: <Login/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
