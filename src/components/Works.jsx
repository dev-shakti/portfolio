import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { data } from "../data/data.js";

const Works = () => { 
  return (
    <div  id="works" className='bg-[#0a192f] text-gray-300 w-full md:h-screen '>
      {/* container */}
      <div className='p-4 flex flex-col justify-center max-w-[1100px] mx-auto w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-gray-300'>Works</p>
          <p className='py-6'>//Check out some of my recent work</p>
        </div>
        
        {/* grid card */}
        <div className='grid sm:grid-cols-3 gap-4'>
          {
              data.map((item,index) => {
                return  <div  style={{ backgroundImage: `url(${item.image})` }} className='group container shadow-lg shadow-[#040c16] rounded-md flex justify-center text-center items-center mx-auto content-div '>
                {/* overlay */}
                 <div className="opacity-0 group-hover:opacity-100 ">
                  <span className='font-bold text-2xl text-white tracking-wider'> {item.name}</span>
                  <div className='pt-8'>
                    <a href={item.github} target="_blank">
                      <button  className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Demo</button>
                    </a>
                    <a href={item.live} target="_blank">
                      <button  className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Live</button>
                    </a>
                  </div>
                 </div>
               </div>
              })
          }         
        </div>
      </div>
    </div>
  )
}

export default Works
