import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className='bg-[#0a192f] text-gray-300 w-full h-screen'>
        {/* container */}
      <div className='w-full h-full p-4 max-w-[1100px] mx-auto flex flex-col justify-center'>
          <div>
            <p className='font-bold text-4xl border-b-4 border-gray-300 inline'> Skills</p>
            <p className='py-4'>//These are the technologies I've worked with</p>
          </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 text-center'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
                <img src="/images/html.png" alt="html" className='w-24 mx-auto'/>
                <p className='my-4'>HTML</p>
            </div> 
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
                <img src="/images/css.png" alt="css logo" className='w-24 mx-auto'/>
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
                <img src="/images/javascript.png" alt="javascript logo" className='w-24 mx-auto'/>
                <p className='my-4'>JavaScript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
                <img src="/images/react.png" alt="react logo" className='w-24 mx-auto'/>
                <p className='my-4'>ReactJS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
                <img src="/images/tailwind.png" alt="tailwind logo" className='w-24 mx-auto'/>
                <p className='my-4'>Tailwind</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' >
                <img src="/images/github.png" alt="github logo" className='w-24 mx-auto'/>
                <p className='my-4'>GitHub</p>
            </div>
            
         </div>
      </div>
    </div>
  )
}

export default Skills
