import React, { useContext } from 'react'
import BellIcon from "../assets/images/bell-icon.svg"
import Person1 from "../assets/images/person1.svg"
import Town from "../assets/images/town.svg"
import Study from "../assets/images/studies.svg"

import Listen from "../assets/images/listen.svg"
import BackImg from "../assets/images/back.svg"
import { Context } from '../context/AuthContext'
import Model from '../components/Model'


function Dashboard() {

  const { isModelOpen, setIsModelOpen} = useContext(Context)

  function handleLogOut(){
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div className=' '>
      <div className="flex justify-between pt-[29px] pl-[124px] pb-[21px] bg-[#FCFAFA] px-[38px]">
        <div className="">
          <h2 className='font-medium text-[16px] leading-[19px] text-[#424242]'>Learn  how to launch faster</h2>
          <p className=' text-[16px] leading-[19px] text-[#424242]'>watch our webinar for tips from our experts and get a limited time offer.</p>
        </div>
        <div className="flex gap-[48px]">
          <img src={BellIcon} alt="bell icon" width={28} height={28} />
          <button type='button' onClick={() => setIsModelOpen(true)} className='py-[11px] w-[120px] bg-transparent duration-300 hover:text-white hover:bg-[#509CDB] text-black rounded-md'>Log out</button>
        </div>
      </div>
      <div className="mt-[53px] pl-[120px]">
        <h1 className='font-semibold text-[36px] leading-[44px] text-[#424242]' >Welcome to your dashboard, Udemy school</h1>
        <h2 className='font-semibold text-[24px] leading-[29px] text-[#424242] mt-[23px] ml-[100px] mb-[74px]'>Uyo/school/@teachable.com</h2>
        <ul className="ml-[70px]">
          <li className=' flex gap-5'>
            <div className="w-[36px] h-[36px] bg-[#EFF3FA] rounded-[8px]">
              <img className='mx-auto py-[6px]' src={Person1} alt="" width={24} height={24} />
            </div>
            <div className="w-[464px] space-y-4">
              <h4 className='font-semibold text-[24px] leading-[29px] text-[#424242]'>Add other admins </h4>
              <p className='text-[14px] leading-[18px] text-[#4F4F4F]'>Create rich course content and coaching products for your students.
                <br />
              When you give them a pricing plan, they’ll appear on your site!</p>
            </div>
          </li>
          <li className=' flex gap-5 mt-[51px] mb-[37px]'>
            <div className="w-[36px] h-[36px] bg-[#EFF3FA] rounded-[8px]">
              <img className='mx-auto py-[6px]' src={Town} alt="" width={24} height={24} />
            </div>
            <div className="w-[464px] space-y-4">
              <h4 className='font-semibold text-[24px] leading-[29px] text-[#424242]'>Add classes  </h4>
              <p className='text-[14px] leading-[18px] text-[#4F4F4F]'>Create rich course content and coaching products for your students.
                <br />
              When you give them a pricing plan, they’ll appear on your site!</p>
            </div>
          </li>
          <li className=' flex gap-5 '>
            <div className="w-[36px] h-[36px] bg-[#EFF3FA] rounded-[8px]">
              <img className='mx-auto py-[6px]' src={Study} alt="" width={24} height={24} />
            </div>
            <div className="w-[464px] space-y-4">
              <h4 className='font-semibold text-[24px] leading-[29px] text-[#424242]'>Add students </h4>
              <p className='text-[14px] leading-[18px] text-[#4F4F4F]'>Create rich course content and coaching products for your students.
                <br />
              When you give them a pricing plan, they’ll appear on your site!</p>
            </div>
          </li>
        </ul>
      </div>
      <button className='w-[180px] py-[22px] pl-[24px] bg-[#152259] rounded-[30px] flex items-center absolute bottom-[250px] right-[205px]'>
            <img src={Listen} alt="listen" width={16} height={16} />
            <span className='font-semibold ml-[8px] mr-[39px]  text-[14px] leading-[17px] text-[#FCFAFA]'>Support</span>
            <img src={BackImg} alt="listen" width={16} height={16} />
      </button>
        <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        <p className='font-semibold text-[35px] text-center '>Do u wanna log out ?</p>
          <div className="flex items-center justify-between mt-5">
              <button onClick={() => setIsModelOpen(false)} className='w-[49%] py-2 rounded-[30px] bg-[#1DA1F2] font-bold text-[25px] leading-[29px] text-white hover:bg-transparent hover:border-[#1DA1F2] hover:text-[#1DA1F2] border-[2px] border-transparent duration-300'>Cancel</button>
              <button  onClick={handleLogOut} className='w-[49%] py-2 rounded-[30px] bg-red-500 font-bold text-[25px] leading-[29px] text-white hover:bg-transparent hover:border-red-500 hover:text-red-500 border-[2px] border-transparent duration-300'>Yes</button>
          </div>
      </Model>
    </div>  
  )
}

export default Dashboard
