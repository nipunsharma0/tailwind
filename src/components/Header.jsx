import React from 'react'
import { FaBars } from "react-icons/fa";

const header = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center justify-center gap-4 '>
        <img src="./assets/Logo.svg" alt="logo" />
        <button className='bg-gradient-to-r from-blue-500 to-violet-500 text-xs text-white px-2.5 py-1.5 rounded-2xl'>Hoster is Hiring!</button>
      </div>
      <ul className='hidden lg:flex justify-between items-center gap-6 font-lato text-gray-400'>
        <li><a href="#">Plans</a></li>
        <li><a href="#">Search Porn</a></li>
        <li><a href="#">Why OnlyFans</a></li>
      </ul>
      <div className='hidden lg:flex items-center justify-center font-lato gap-6'>
        <a href="#" className='text-gray-400 font-lato' >Sign In</a>
        <button className='rounded-md px4 py-3 md:px-4 bg-blue-400 hover:bg-blue-500 text-white'>Join Waitlist.</button>
      </div>
      <div className='lg:hidden'>
        <FaBars />
      </div>
    </div>
  )
}

export default header