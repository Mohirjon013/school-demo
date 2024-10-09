import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AddTeachers, Dashboard, SingleTeachers, Teachers } from '../pages'
import Navbar from '../components/Navbar'

function DashboardRoutes() {
  return (
    <div className="flex">
      <Navbar/>
      <div className='w-[80%] h-[100vh] overflow-y-auto bg-white'>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/teachers' element={<Teachers/>} />
          <Route path='/teachers/add' element={<AddTeachers/>} />
          <Route path='/teachers/:id' element={<SingleTeachers/>} />
        </Routes>
      </div>
    </div>
  )
}

export default DashboardRoutes
