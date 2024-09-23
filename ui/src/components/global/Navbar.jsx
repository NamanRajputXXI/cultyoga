import React, { useState } from 'react'
import { Icon } from '@iconify/react';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState('false')
  // const [hideMenu, setHideMenu] = useState('false')

  const showMenuFunction = () => {
    setShowMenu('true')
  }

  const hideMenuFunction = () => {
    setShowMenu('false')
  }

  return (
    <nav className='h-24 w-full'>
      <div className='px-[5%] flex justify-between items-center bg-slate-200 h-full'>
        <div>
          <h1 className='font-bold text-3xl'>Cult Yog</h1>
        </div>
        <ul className='hidden md:flex gap-10'>
          <li className='font-semibold cursor-pointer'>Home</li>
          <li className='font-semibold cursor-pointer'>About</li>
          <li className='font-semibold cursor-pointer'>Services</li>
          <li className='font-semibold cursor-pointer'>Products</li>
          <li className='font-semibold cursor-pointer'>Contact Us</li>
        </ul>
        <div className='hidden md:flex'>
          <button className='text-xl font-semibold bg-green-500 px-5 py-2 rounded-sm'>Log In</button>
        </div>
        <div onClick={showMenuFunction} className='cursor-pointer  md:hidden'>
          <Icon icon="icon-park:hamburger-button" className='text-4xl' />
        </div>
      </div>

      {/* -------------------------Mobile Menu-------------------------- */}
      <div className={`bg-sky-200 ${showMenu == 'true' ? 'flex' : 'hidden'} p-6 fixed w-64 h-screen flex-col gap-5 top-0 left-0`}>
        <div onClick={hideMenuFunction} className='absolute right-0 top-0 cursor-pointer'>
          <Icon icon="charm:cross" className='text-6xl' />
        </div>
        <div>
          <h1 className='font-bold text-3xl'>Cult Yog</h1>
        </div>
        <ul className='flex flex-col gap-3'>
          <li className='font-semibold cursor-pointer'>Home</li>
          <li className='font-semibold cursor-pointer'>About</li>
          <li className='font-semibold cursor-pointer'>Services</li>
          <li className='font-semibold cursor-pointer'>Products</li>
          <li className='font-semibold cursor-pointer'>Contact Us</li>
        </ul>
        <div>
          <button className='text-xl font-semibold bg-green-500 px-5 py-2 rounded-sm'>Log In</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

