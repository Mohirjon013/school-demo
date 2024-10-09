import React, { useContext, useEffect, useState } from 'react'
import Bell from "../assets/images/bell.svg"
import Search from "../assets/images/search-img.svg"
import Fillter from "../assets/images/filter.svg"
import Person from "../assets/images/person.svg"
import DeleteUser from "../assets/images/delete-add.svg"
import MoreUser from "../assets/images/more-add.svg"
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/AuthContext'
import NoData from '../components/NoData'
import Model from '../components/Model'



function Teachers() {
  const navigate = useNavigate()
  const {users, deleteBTn, isModelOpen, setIsModelOpen} = useContext(Context)
  const [filterUser, setFilterUser] = useState(users)
  

  function handleSearch(e){
    const inputValue = e.target.value.toLowerCase()
    const FilterTeachers = users.filter(item => item.name.toLowerCase().includes(inputValue) || item.email.toLowerCase().includes(inputValue))
    setFilterUser(FilterTeachers)
  }

  function handleSort(e){
    const sortTeachers = [...users].sort((a, b) => a.name > b.name ? 1 : -1)
    setFilterUser(sortTeachers)
  }

  function handleLogOut(){
    localStorage.clear()
    window.location.reload()

  }
  return (
    <div className='px-[38px] pt-5'>
      <div className="flex gap-3 justify-end mb-[5px]">
        <img src={Bell} alt="beel img " width={24} height={24} />
        <button type='button' onClick={() => setIsModelOpen(true)} className='py-[11px] w-[120px] bg-transparent duration-300 hover:text-white hover:bg-[#509CDB] text-black rounded-md'>Log out</button>
      </div>
      <div className="w-full flex items-center justify-between">
        <h2 className='font-medium text-[20px] leading-[24px] text-[#4F4F4F]'>Teachers</h2>
        <button onClick={() => navigate("/teachers/add")} className='py-[11px] w-[120px] font-sans text-white bg-[#509CDB] rounded-md'>Add Teachers</button>
      </div>
      <div className="mt-[24px] flex gap-6">
        <label className='flex gap-4 w-[320px] border-[1px] border-[#D0D5DD] bg-[#FCFAFA] px-[16px] rounded-md' >
          <img className='' src={Search} alt="search img" width={16} height={16} />
          <input onInput={handleSearch} className='w-full py-[16px] bg-[#FCFAFA] text-[#8A8A8A] outline-none' type="text" placeholder='Search for a student by name or email' />
        </label>
        <button onClick={handleSort} className='w-[100px] flex items-center gap-3 justify-center rounded-md border-[1px] border-[#D0D5DD] py-[8px] bg-[#FCFAFA]'>
          <img src={Fillter} alt="filter img" width={20} height={20} />
          <p>Filters</p>
        </button>
      </div>
      <div className="w-full mt-10 relative">
        <table className="w-full">
          <thead>
            <tr>
              <th className='text-start p-2 border-b-[1px] border-[#EAECF0] text-[#424242] font-bold leading-[14px] text-[12px]'>Name</th>
              <th className='p-2 text-start border-b-[1px] border-[#EAECF0] text-[#424242] font-bold leading-[14px] text-[12px]'>Subject</th>
              <th className='p-2 text-start border-b-[1px] border-[#EAECF0] text-[#424242] font-bold leading-[14px] text-[12px]'>Class</th>
              <th className='p-2 text-start border-b-[1px] border-[#EAECF0] text-[#424242] font-bold leading-[14px] text-[12px]'>Email  address</th>
              <th className='p-2 text-start border-b-[1px] border-[#EAECF0] text-[#424242] font-bold leading-[14px] text-[12px]'>Gender</th>
              <th className='p-2 text-start border-b-[1px] border-[#EAECF0] text-[#424242] font-bold leading-[14px] text-[12px]'>Action</th>
            </tr>
            
          </thead>
          <tbody>
            {filterUser.length ?  filterUser.map(item => (
              <tr key={item.id}>
                <td className='flex items-center py-[12px] pl-[8px] gap-2'>
                  <img className='rounded-full' src={item.img ? item.img:"https://picsum.photos/800/800"} alt="person img" width={24} height={24} />
                  <span className='font-medium text-[12px] leading-[14px]'>{item.name}</span>
                </td>
                <td className='font-medium text-start text-[12px] pl-[8px] leading-[14px]'>
                  {item.subject == "1" ? "Maths" : "" }
                  {item.subject == "2" ? "French": "" }
                  {item.subject == "3" ? "Chemistry" :  "" }
                  {item.subject == "4" ? "English" : "" }
                  {item.subject == "5" ? "Social studies" : "" }
                  {item.subject == "6" ? "Home economics" :  "" }
                  {item.subject == "7" ? "Geography" : "" }
                  {item.subject == "8" ? "Pschology" : "" }
                  {item.subject == "9" ? "Physic" : ""}
                  {item.subject == "10"? "Accounting" : "" }
                  {item.subject == "11"? "C.R.s" :  "" }
                  {item.subject == "12"? "Politics" :  "" }
                </td>
                <td className='font-medium pl-[8px] text-start text-[12px] leading-[14px]'>
                  {item.class == "1" ? "N69" :""}
                  {item.class == "2" ? "N70" :""}
                  {item.class == "3" ? "N71" :""}
                </td>
                <td className='font-medium pl-[8px] text-start text-[12px] leading-[14px]'>{item.email}</td>
                <td className='font-medium pl-[8px] text-start text-[12px] leading-[14px]'>
                  {item.gender == "1" ? "Male" : ""}
                  {item.gender == "2" ? "Female" : ""}
                </td>
                <td className='flex items-center gap-5 pl-[15px]'>
                    <button onClick={() => deleteBTn(item.id)}>
                      <img className='hover:scale-[1.3] duration-300' src={DeleteUser} alt="delete img"  width={20} height={20}/>
                    </button>

                    <button onClick={() => navigate(`/teachers/${item.id}`)}>
                      <img className='hover:scale-[1.3] duration-300' src={MoreUser} alt="more img"  width={20} height={20}/>
                    </button>
                </td>
              </tr>
            )) : <NoData  /> }
              
              
          </tbody>
        </table>
      </div>
      <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        <p className='font-semibold text-[35px] text-center '>Do u wanna log out ?</p>
          <div className="flex items-center justify-between mt-5">
              <button onClick={() => setIsModelOpen(false)} className='w-[49%] py-2 rounded-[30px] bg-[#1DA1F2] font-bold text-[25px] leading-[29px] text-white hover:bg-transparent hover:border-[#1DA1F2] hover:text-[#1DA1F2] border-[2px] border-transparent duration-300'>Cancel</button>
              <button type='button' onClick={handleLogOut} className='w-[49%] py-2 rounded-[30px] bg-red-500 font-bold text-[25px] leading-[29px] text-white hover:bg-transparent hover:border-red-500 hover:text-red-500 border-[2px] border-transparent duration-300'>Yes</button>
          </div>
      </Model>
    </div>
  )
}

export default Teachers
