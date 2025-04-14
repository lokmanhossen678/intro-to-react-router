import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router =createBrowserRouter([
  {
    path:'/',
    element:<div>Wellcome to react router</div>
  },
  {
    path:'About',
    element:<div>About me heare</div>
  },
  {
    path:'blogs',
    element:<div>All my bloge are here</div>
  },
  {
    path:'App',
    Component:App
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
