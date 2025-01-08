import React from 'react'

const footer = () => {
  return (
    
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className='flex font-lato gap-6 text-gray-400 font-bold'>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">OnlyFans</a>
        </li>
        <li>
          <a href="#">PornHub</a>
        </li>
      </ul>
      <div className='flex gap-2'>
        <img src="./assets/Help-Avatar.svg" alt="help" />
        <div>
          <p className='font-playfair font-thin'>Have any Questions?</p>
          <p className='font-lato font-medium'>Talk to Specialist.</p>
          </div>
      </div>
    </div>
  
    

  )
}

export default footer