import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

//Public pages
import Home from './pages/public/Home';
import Login from './pages/public/Login/index.jsx'

//Private pages
import Concorrentes from './pages/private/Concorrentes/index.jsx'

//Contexts
import { SessaoProvider} from './contexts/SessaoContext.jsx'
import { MessaageBoxProvider } from './contexts/MessageBoxContext.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/concorrentes",
        element: <Concorrentes/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <SessaoProvider>
    <MessaageBoxProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </MessaageBoxProvider>
  </SessaoProvider>
)
