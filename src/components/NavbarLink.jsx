import React from 'react'
import { HomeIcon } from '../assets/images/icons'
import { NavLink } from 'react-router-dom'

function NavbarLink({item}) {
  return (
    <NavLink to={item.path} className='navlink-last w-[75%] py-[11px] flex px-[16px] mx-[28px] hover:bg-[#509CDB] duration-300 rounded-[4px] cursor-pointer relative'>
      {item.icon}
      <span className='font-semibold text-[14px] leading-[17px] text-white ml-[16px]'>{item.title}</span>
    </NavLink>
  )
}

export default NavbarLink
