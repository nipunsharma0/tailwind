import React from 'react'

const body = () => {
  return (
    <div className='space-y-4 lg:flex lg:'>
      <div className='flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end'>
        <img src="./assets/Blue-Shape.svg" alt="1st" className=' -rotate-45 h-64 md:h-72 lg:h-[400px]'/>
        <img src="./assets/Pink-Shape.svg" alt="2nd" className='absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]' />
        <img src="./assets/Purple-Shape.svg" alt="3rd"className='absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]' />
        <img src="./assets/Hero-model.png" alt="hero" className='absolute h-64 md:h-72 lg:h-[400px]'/>
      </div>

      <div className='lg:flex-1 lg:order-1'>
        <h1 className='text-5xl font-bold font-playfair leading-tight '>Host your website in less than 5 Mins.</h1>
        <p className='font-lato text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, at amet. Suscipit illum porro asperiores et. Non earum expedita quibusdam!</p>
        <form action="" className='flex flex-col gap-4 md:flex-row'>
          <input type="email" placeholder="Enter email address." className='rounded-md px-4 py-3 placeholder:text-gray-400' />
          <button className='rounded-md px4 py-3 md:px-4 bg-blue-400 hover:bg-blue-500 text-white'>Join Waitlist.</button>
        </form>
        <div className='flex gap-2'>
          <img className="" src="./assets/Checkmark.svg" alt="checkmark" />
          <p className='font-lato text-gray-400'>No spam, Lawda/Lessun. Guaranteed.</p>
        </div>
        </div>
        
    </div>
  )
}

export default body