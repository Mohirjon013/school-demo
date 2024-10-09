import { Button, Input } from 'antd'
import React, { useContext } from 'react'
import { Context } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

import Loading from "../assets/images/loading.png"
import toast, { Toaster } from 'react-hot-toast'

function Login() {
    const {register, setToken} = useContext(Context)
    const {isloading, setIsloading} = useContext(Context)


    const navigate = useNavigate()
    function handleLoginSubmit(e){
        e.preventDefault()
        const data = {
            login:e.target.login.value.trim(),
            password:e.target.password.value.trim()
            
        }
        if(register){
            if(data.login == register.login && data.password == register.password){
                setIsloading(true)
                toast.success(`"Welcome Udemy school" ${data.login}`)
                setTimeout(() => {
                    setToken(data)
                }, 800);
            }
            else{
                setIsloading(true)
                setTimeout(() => {
                    toast.error("The user is not Found")
                    setIsloading(false)
                }, 800);
                e.target.reset()
            }
        }
        else{
            if(data.login == "mohirjon" && data.password == "123"){
                setIsloading(true)
                toast.success(`"Welcome Udemy school" ${data.login}`)
                setTimeout(() => {
                    setToken(data)
                }, 800);
            }
            else{
                setIsloading(true)
                setTimeout(() => {
                    toast.error("The user is not Found")
                    setIsloading(false)
                }, 800);
                e.target.reset()
            }
        }
    }
  return (
    <div className='login-body'>
        <Toaster position="top-right" reverseOrder={false}/>
      <h2 className='font-semibold text-[36px] leading-[44px] text-[#4F4F4F] mt-[184px] text-center'>Welcome, Log into you account</h2>
        <form onSubmit={handleLoginSubmit} autoComplete='off' className='w-[512px] bg-white rounded-[20px] shadow-sm pt-[72px] pl-[132px] pr-[142px] mt-[50px] mx-auto mb-[125px] pb-[40px]'>
            <h3 className='text-[#667085] text-center font-medium text-[16px] leading-[25px] mb-[14px]'>It is our great pleasure to have you on board! </h3>
            <Input className='py-[12px] w-full mb-[14px]' name='login' type="text " placeholder='Enter your Login' required />
            <Input className='py-[12px] w-full mb-[14px]' name='password' type="password" placeholder='Enter Password' required />
            <Button type='primary' htmlType='submit' className='w-full mx-auto py-[12px] mb-[14px]'>Login</Button>
            <Button onClick={() => navigate("/sign-up")} type='default' htmlType='submit' className='w-full mx-auto py-[12px] '>Sign up</Button>
            {isloading && <div className='fixed inset-0 backdrop-blur flex items-center justify-center duration-300'> <img src={Loading} alt="loading" width={200} height={200} /> </div> }

        </form>
    </div>
  )
}

export default Login
