import { Content } from 'antd/es/layout/layout'
import React, { useContext } from 'react'

function Model({children, isModelOpen, setIsModelOpen}) {
  return (
    <div id='wrapper' onClick={(e) => e.target.id == "wrapper" ? setIsModelOpen(false) : ""} className={ `fixed duration-300 backdrop-blur inset-0 flex justify-center items-center bg-[#00000029] z-10 ${isModelOpen ? "scale-100" : "scale-0"}`}>
      <div className="w-[700px] bg-white p-5 rounded-lg ">{children}</div>
    </div>
  )
}

export default Model