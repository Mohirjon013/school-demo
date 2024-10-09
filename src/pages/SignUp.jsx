import { Button, Input } from 'antd'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/AuthContext'

import Loading from "../assets/images/loading.png"
import toast, { Toaster } from 'react-hot-toast'


function SignUp() {
  const navigate = useNavigate()
  const { setRegister, setToken} = useContext(Context)
  const {isloading, setIsloading} = useContext(Context)


  function handleSignUp(e){
    e.preventDefault()
    const data = {
      login:e.target.login.value,
      password:e.target.password.value
    }
    setIsloading(true)
    toast.success(`"Welcome Udemy school" ${data.login}`)
    setTimeout(() => {
    setRegister(data)
    setIsloading(false)
    navigate(-1)
    }, 800);
  }
  return (
    <div className='login-body'>
        <Toaster position="top-right" reverseOrder={false}/>

      <h2 className='font-semibold text-[36px] leading-[44px] text-[#4F4F4F] mt-[184px] text-center'>Welcome, Sign up</h2>
        <form onSubmit={handleSignUp} autoComplete='off' className='w-[512px] bg-white rounded-[20px] shadow-sm pt-[72px] pl-[132px] pr-[142px] mt-[50px] mx-auto mb-[125px] pb-[40px]'>
            <h3 className='text-[#667085] text-center font-medium text-[16px] leading-[25px] mb-[14px]'>It is our great pleasure to have you on board! </h3>
            <Input className='py-[12px] w-full mb-[14px]' required name='login' type="text " placeholder='Create your Login' />
            <Input className='py-[12px] w-full mb-[14px]' required name='password' type="password" placeholder='Create your Password' />
            <Button type='primary' htmlType='submit' className='w-full mx-auto py-[12px] mb-[14px]'>Next</Button>
          <Button onClick={() => navigate(-1)} type='default' htmlType='button' className='w-full mx-auto py-[12px] '>Sign in</Button>
          {isloading && <div className='fixed inset-0 backdrop-blur flex items-center justify-center duration-300'> <img src={Loading} alt="loading" width={200} height={200} /> </div> }
        </form>
    </div>
  )
}

export default SignUp

