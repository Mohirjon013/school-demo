import React, { useContext } from 'react'
import { Context } from '../context/AuthContext'
import { useParams } from 'react-router-dom'
import Study from "../assets/images/study.svg"
import Call from "../assets/images/call.svg"
import Mess from "../assets/images/mess.svg"
import Bell from "../assets/images/bell.svg"
import Person from "../assets/images/person.svg"






function SingleTeachers() {
    const {users} = useContext(Context)
    const {id} = useParams()

    const filter = users.find(Item => Item.id == id)
    console.log(filter);
    
  return (
    <div>
        <div className="flex gap-3 justify-end mb-[5px]">
            <img src={Bell} alt="beel img " width={24} height={24} />
            <button className='py-[11px] w-[120px] bg-transparent duration-300 hover:text-white hover:bg-[#509CDB] text-black rounded-md'>Log out</button>
        </div>
        <div className="flex justify-between mt-[83px] px-[230px]">
            <div className=" w-[48%] text-center ">
                <img className='rounded-full mb-[50px] mx-auto' src={filter.img} alt="" width={280} height={280} />
                <strong className='font-bold text-[16px] leading-[19px] text-[#1A1A1A]'>{filter.name}</strong>
                <span className='block text-[12px] leading-[14px] text-[#4F4F4F]'>{filter.email}</span>
                <ul className="w-[230px] mt-[40px] flex gap-[25px] mx-auto">
                    <li className="w-[60px] py-[15px] bg-[#EFF3FA] rounded-md">
                        <img className='mx-auto' src={Study} alt="" width={30} height={30} />
                    </li>
                    <li className="w-[60px] py-[15px] bg-[#EFF3FA] rounded-md">
                        <img className='mx-auto' src={Call} alt="" width={30} height={30} />
                    </li>
                    <li className="w-[60px] py-[15px] bg-[#EFF3FA] rounded-md">
                        <img className='mx-auto' src={Mess} alt="" width={30} height={30} />
                    </li>
                </ul>
            </div>
            <div className="w-[48%] mt-[50px]">
                <div className="w-full ">
                    <strong className='font-bold text-[16px] leading-[19px] text-[#1A1A1A]'>About</strong>
                    <p className='text-[16px] leading-[21px] text-[#A7A7A7] line-clamp-6'>{filter.about} </p>
                </div>
                <div className="flex py-[25px] w-[250px] justify-between mx-auto mt-10">

                    <div className=''>
                        <div className='space-y-[7px] mb-[30px]'>
                            <strong className='font-semibold text-[12px] leading-[14px] text-[#1A1A1A]'>Subject</strong>
                            <p className='font-medium text-[14px] leading-[17px] text-[#A7A7A7]'>
                                {filter.subject == "1" ? "Maths" : "" }
                                {filter.subject == "2" ? "French": "" }
                                {filter.subject == "3" ? "Chemistry" :  "" }
                                {filter.subject == "4" ? "English" : "" }
                                {filter.subject == "5" ? "Social studies" : "" }
                                {filter.subject == "6" ? "Home economics" :  "" }
                                {filter.subject == "7" ? "Geography" : "" }
                                {filter.subject == "8" ? "Pschology" : "" }
                                {filter.subject == "9" ? "Physic" : ""}
                                {filter.subject == "10" ? "Accounting" : "" }
                                {filter.subject == "11" ? "C.R.s" :  "" }
                                {filter.subject == "12" ? "Politics" :  "" }
                            </p>
                        </div>
                        <div className='space-y-[7px]'>
                            <strong className='font-semibold text-[12px] leading-[14px] text-[#1A1A1A]'>Age</strong>
                            <p className='font-medium text-[14px] leading-[17px] text-[#A7A7A7]'>{filter.age}</p>
                        </div>
                    </div>
                    <div>
                        <div className='space-y-[7px] mb-[30px]'>
                            <strong className='font-semibold text-[12px] leading-[14px] text-[#1A1A1A]'>Class</strong>
                            <p className='font-medium text-[14px] leading-[17px] text-[#A7A7A7]'>
                                {filter.class == "1" ? "N69" :""}
                                {filter.class == "2" ? "N70" :""}
                                {filter.class == "3" ? "N71" :""}
                            </p>
                        </div>
                        <div className='space-y-[7px]'>
                            <strong className='font-semibold text-[12px] leading-[14px] text-[#1A1A1A]'>Gender</strong>
                            <p className='font-medium text-[14px] leading-[17px] text-[#A7A7A7]'>
                                {filter.gender == "1" ? "Male" : ""}
                                {filter.gender == "2" ? "Female" : ""}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleTeachers
