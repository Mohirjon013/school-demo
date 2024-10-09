import React from 'react'

import Logo from "../assets/images/logo.svg"
import { BillingIcon, ExamsIcon, FeaturesIcon, HomeIcon, SittingsIcon, StudentIcon } from '../assets/images/icons'
import NavbarLink from './NavbarLink'
function Navbar() {
    const NavbarList = [
        {
            id: 1,
            title: "Dashboard",
            icon: <HomeIcon/>,
            path: "/"
        },
        {
            id: 2,
            title: "Teachers",
            icon: <HomeIcon/>,
            path: "/teachers"
        },
        {
            id: 3,
            title: "Students",
            icon: <StudentIcon/>,
            path: "/students"
        },
        {
            id: 4,
            title: "Billing",
            icon: <BillingIcon/>,
            path: "/billings"
        },
        {
            id: 5,
            title: "Settings and profile",
            icon: <SittingsIcon/>,
            path: "/settings"
        },
        {
            id: 6,
            title: "Exams",
            icon: <ExamsIcon/>,
            path: "/exams"
        },
        {
            id: 7,
            title: "Features",
            icon: <FeaturesIcon/>,
            path: "/features"
        },
    ]
  return (
    <div className='w-[20%] h-[100vh] overflow-y-auto bg-[#152259] pt-[26px] '>
        <div className="text-center border-b-[2px] border-b-[#BDBDBD] mb-[16px]">
            <img className=' mx-auto mb-[12px]' src={Logo} alt="logo img" width={65} height={65} />
            <h2 className='font-semibold text-[14px] leading-[17px] text-white pb-[40px]'>Udemy Inter. school</h2>
        </div>
        <div className="space-y-[8px]">
            {NavbarList.map(item => <NavbarLink key={item.id} item={item} />)}
        </div>
    </div>
  )
}

export default Navbar
