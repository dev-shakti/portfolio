import React, { useState } from 'react'

const Contact = () => {


  return (
    <div id="contact" className='w-full h-screen bg-[#0a192f] p-4 flex justify-center items-center flex-col text-gray-300'>
      <div >
        <p className='font-bold text-4xl border-b-4 border-pink-600 inline'>Contact</p>
        <p className='my-8'>//Submit the form below or shoot me an email - shakti.20k@gmail.com </p>
      </div>

      <form method="POST" action="https://getform.io/f/d364961d-ca18-4ea7-a010-2134b350c15c" className='flex flex-col w-full max-w-[600px]'>
        <input
          type="text"
          placeholder='Name'
          name="name"
          className='p-2 bg-[#ccd6f6] text-gray-800' />

        <input
          type="email"
          placeholder='Email'
          name="email"
          className='my-6 p-2 bg-[#ccd6f6] text-gray-800' />

        <textarea
          name="message"
          rows="10"
          placeholder='Message'
          className='p-2 bg-[#ccd6f6] text-gray-800'>
        </textarea>

        <button className='font-bold cursor-pointer text-white px-4 py-3  border-2 my-6 hover:bg-pink-600 hover:border-pink-600 duration-300'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
