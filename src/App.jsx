
import { useContext } from 'react'
import './App.css'
import { Context } from './context/AuthContext'
import DashboardRoutes from './router/DashboardRoutes'
import LoginRoutes from './router/LoginRoutes'

function App() {
  // const token = null
    const {token} = useContext(Context)
  if(token){
    return <DashboardRoutes/>
  }
  else{
    return <LoginRoutes/>
  }
}

export default App
