import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Mobils from './components/Mobils/Mobils.jsx'
import Home from './components/Home/Home.jsx'
import laptops from './components/laptops/laptops.jsx'
import Users from './components/Users/Users.jsx'
import User2 from './components/Users2/User2.jsx'


const usersPromis = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())

const router =createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
      {index:true, Component:Home},
      {path:'mobils', Component: Mobils},
      {path:"laptops", Component:laptops},
      {
        path:"users", 
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        Component:Users
      },
      {
        path:"users2",
        element: <Suspense fallback={<span>Loading...</span>}>
          <User2 usersPromis={usersPromis}></User2>
        </Suspense>
      }
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
