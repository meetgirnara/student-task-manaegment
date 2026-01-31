import './App.css'
import Header from './components/header'
import Login from './pages/Login'
import Register from './pages/Register'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
const route = createBrowserRouter([
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  }
])

    return<RouterProvider router={route}/>

}

export default App
