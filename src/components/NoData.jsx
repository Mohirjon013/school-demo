import React from 'react'

import PandaImg from "../assets/images/panda.png"
import Listen from "../assets/images/listen.svg"
import BackImg from "../assets/images/back.svg"



function NoData() {

  return (
    <div className='w-full h-[420px] bg-[#FCFAFA] absolute top-0'>
        <div className="w-[372px] mx-auto text-center">
            <img src={PandaImg} alt="panda img" width={340} height={255} />
            <h2 className='mt-[10px] mb-[4px] font-semibold text-[28px] leading-[34px] text-[#4F4F4F]'>No Teachers at this time</h2>
            <p className='font-medium text-[14px] leading-[17px] text-[#4F4F4F]'>Teachers will appear here after they enroll in your school.  </p>
        </div>
        <button className='w-[180px] py-[22px] pl-[24px] bg-[#152259] rounded-[30px] flex items-center absolute right-5'>
            <img src={Listen} alt="listen" width={16} height={16} />
            <span className='font-semibold ml-[8px] mr-[39px]  text-[14px] leading-[17px] text-[#FCFAFA]'>Support</span>
            <img src={BackImg} alt="listen" width={16} height={16} />
        </button>
    </div>
  )
}

export default NoData
