import React from 'react'
import { FaPlus } from 'react-icons/fa';
function Navbar() {
  return (
    <div className='bg-[#032541] fixed top-0 w-[100%] h-[64px] flex z-10'>
      <div className='container m-auto flex flex-row gap-5 justify-between items-center'>
        <div className='flex flex-row gap-3 items-center'>
          <div className='flex flex-row items-center gap-3'>
            <p className='font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500'>Movie-DB</p>
            <div className='w-[50px] h-[20px] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500'></div>
          </div>
          <p className='text-white'>Movies</p>
          <p className='text-white'>TV Shows</p>
          <p className='text-white'>People</p>
          <p className='text-white'>More</p>
        </div>
        <div><FaPlus className='text-white' /></div>
      </div>
    </div>
  );
}

export default Navbar