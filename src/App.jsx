
import {useRoutes, BrowserRouter} from 'react-router-dom' 

import Layout from './components/Layout'
import Home from './Pages/Home'
import Account from './Pages/Account'
import Orders from './Pages/Orders'
import Signin from './Pages/Signin'
import Cart from './Pages/Cart'
import NotFound from './Pages/NotFound'
import Navbar from './components/Navbar'

import './App.css'

const AppRoutes = () =>{
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/account', element: <Account /> },
    { path: '/orders', element: <Orders /> },
    { path: '/sign-in', element: <Signin /> },
    { path: '/cart', element: <Cart /> },
    { path: '/*', element: <NotFound /> },
  
  ])

  return routes
}

const App = () => {
  
  return (
    <>
   <BrowserRouter>
   <Navbar />
   <Layout>
   <AppRoutes  />
   </Layout>
   </BrowserRouter>
    </>
  )
}

export default App
