import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Mobils from './components/Mobils/Mobils.jsx'
import Home from './components/Home/Home.jsx'
import laptops from './components/laptops/laptops.jsx'

const router =createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
      {index:true, Component:Home},
      {path:'mobils', Component: Mobils},
      {path:"laptops", Component:laptops}
    ]
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
  },
  {
    path:'/App2',
    element: <App></App>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
