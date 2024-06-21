
import {useRoutes, BrowserRouter} from 'react-router-dom' 

import Home from './Pages/Home'
import Account from './Pages/Account'
import Orders from './Pages/Orders'
import Signin from './Pages/Signin'
import Cart from './Pages/Cart'
import NotFound from './Pages/NotFound'

import './App.css'

const AppRoutes = () =>{
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/', element: <Account /> },
    { path: '/', element: <Orders /> },
    { path: '/', element: <Signin /> },
    { path: '/', element: <Cart /> },
    { path: '/*', element: <NotFound /> },
  
  ])

  return routes
}

const App = () => {
  
  return (
    <>
   <BrowserRouter>
   <AppRoutes></AppRoutes>
   </BrowserRouter>
    </>
  )
}

export default App
