import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login, SignUp } from '../pages'

function LoginRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
    </div>
  )
}

export default LoginRoutes
