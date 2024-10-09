import React, { useContext, useState } from 'react'
import Bell from "../assets/images/bell.svg"
import Imgs from "../assets/images/img.webp"
import { Context } from '../context/AuthContext'
import { json, useNavigate } from 'react-router-dom'

import Loading from "../assets/images/loading.png"
import { ClearIcon } from '../assets/images/icons'

function AddTeachers() {

  const {users, setUsers} = useContext(Context)
  const {isloading, setIsloading} = useContext(Context)
  const [teacherImg, setTeacherImg] = useState(Imgs)

  // img change start
  function handleImgChange(e){
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setTeacherImg(reader.result); 
    };
    if (file) {
      reader.readAsDataURL(file); 
    }
  }
  // img change end

  localStorage.setItem("teacherImg", JSON.stringify(teacherImg))
  const navigate = useNavigate()
  function handleSubmit(e){
    e.preventDefault()
    const data = {
      id:users.length ? users[users.length - 1].id + 1 : 1,
      name:e.target.name.value,
      email:e.target.email.value,
      subject:e.target.subject.value,
      about:e.target.about.value,
      class:e.target.class.value,
      gender:e.target.gender.value,
      age:e.target.age.value,
      img:teacherImg
    }
    setIsloading(true)
    setTimeout(() => {
      setIsloading(false)
      setUsers([...users, data])
      setTeacherImg(Imgs)
      navigate(-1)
    }, 800);
    e.target.reset()
  }
  return (
    <div className='px-[38px] pt-5'>
      <div className="flex gap-3 justify-end mb-[5px]">
        <img src={Bell} alt="beel img " width={24} height={24} />
        <button className='py-[11px] w-[120px] bg-transparent duration-300 hover:text-white hover:bg-[#509CDB] text-black rounded-md'>Log out</button>
      </div>
      
      <form onSubmit={handleSubmit} autoComplete='off'>
        <div className="w-full flex items-center justify-between mb-[50px]">
          <h2 className='font-medium text-[20px] leading-[24px] text-[#4F4F4F]'>Add teacher</h2>
          <button type='submit' className='py-[11px] w-[120px] font-sans text-white bg-[#509CDB] rounded-md'>Save</button>
        </div>
        <div className="flex">
          <div className="w-[49%] flex flex-col gap-8">
            <label>
              <span className='block font-medium text-[14px] leading-[17px] text-[#8A8A8A] mb-[5px]'>Full Name</span>
              <input className='w-[407px] py-[12px] rounded-[4px] border-[2px] border-[#A7A7A7] outline-none px-[10px]' required type="text" name="name" placeholder='Full Name' />
            </label>
            <label>
              <span className='block font-medium text-[14px] leading-[17px] text-[#8A8A8A] mb-[5px]'>Email address</span>
              <input className='w-[407px] py-[12px] rounded-[4px] border-[2px] border-[#A7A7A7] outline-none px-[10px]' required type="email" name="email" placeholder='Full Name' />
            </label>
            <label>
              <span className='block font-medium text-[14px] leading-[17px] text-[#8A8A8A] mb-[5px]'>Subject</span>
              <select className='w-[407px] py-[12px] rounded-[4px] border-[2px] border-[#A7A7A7] outline-none px-[10px] text-[#8A8A8A]' name="subject">
                <option value="1">Maths</option>
                <option value="2">French</option>
                <option value="3">Chemistry</option>
                <option value="4">English</option>
                <option value="5">Social studies</option>
                <option value="6">Home economics</option>
                <option value="7">Geography</option>
                <option value="8">Pschology</option>
                <option value="9">Physic</option>
                <option value="10">Accounting</option>
                <option value="11">C.R.s </option>
                <option value="12"> Politics</option>
              </select>
            </label>
            <label>
              <span className='block font-medium text-[14px] leading-[17px] text-[#8A8A8A] mb-[5px]'>About</span>
              <textarea className='rounded-[4px] border-[2px] border-[#A7A7A7] outline-none px-[9px] pt-[14px]' required name="about" placeholder='About' rows={10} cols={48} ></textarea>
            </label>
            
          </div>
          <div className="w-[49%] flex flex-col gap-8">
            <label>
              <span className='block font-medium text-[14px] leading-[17px] text-[#8A8A8A] mb-[5px]'>Class</span>
              <select className='w-[407px] py-[12px] rounded-[4px] border-[2px] border-[#A7A7A7] outline-none px-[10px] text-[#8A8A8A]' name="class">
                <option value="1">N69</option>
                <option value="2">N70</option>
                <option value="3">N71</option>
              </select>
            </label>
            <label>
              <span className='block font-medium text-[14px] leading-[17px] text-[#8A8A8A] mb-[5px]'>Gender</span>
              <select className='w-[407px] py-[12px] rounded-[4px] border-[2px] border-[#A7A7A7] outline-none px-[10px] text-[#8A8A8A]' name="gender">
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
            </label>
            <label>
              <span className='block font-medium text-[14px] leading-[17px] text-[#8A8A8A] mb-[5px]'>Age </span>
              <input className='w-[407px] py-[12px] rounded-[4px] border-[2px] border-[#A7A7A7] outline-none px-[10px]' required type="text" name="age" placeholder='Age' />
            </label>
            <label className='relative'>
              <input onChange={handleImgChange} type="file" className='hidden' />
              <button onClick={() => setTeacherImg(Imgs)} type='button' className='absolute top-9  right-[275px]'>
                <ClearIcon/>
              </button>
              <img className='rounded-md mt-[25px] cursor-pointer border-[1px] border-zinc-600 w-[300px] ' src={teacherImg} alt="img" width={230}/>
            </label>
          </div>
        </div>
      </form>
      {isloading && <div className='fixed inset-0 backdrop-blur flex items-center justify-center duration-300'> <img src={Loading} alt="loading" width={200} height={200} /> </div> }
    </div>
  )
}

export default AddTeachers
