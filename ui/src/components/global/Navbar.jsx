import React, { useEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState('false')
  const menuRef = useRef(null);

  const showMenuFunction = () => {
    setShowMenu('true')
  }

  const hideMenuFunction = () => {
    setShowMenu('false')
  }

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      hideMenuFunction();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);


  return (
    <nav className='h-24 w-full'>
      <div className='px-[5%] flex justify-between items-center h-full'>
        <div>
          <h1 className='font-bold text-3xl'>CultYog</h1>
        </div>
        <ul className='hidden md:flex gap-10'>
          <li className='font-semibold cursor-pointer'>Home</li>
          <li className='font-semibold cursor-pointer'>About</li>
          <li className='font-semibold cursor-pointer'>Services</li>
          <li className='font-semibold cursor-pointer'>Products</li>
          <li className='font-semibold cursor-pointer'>Contact Us</li>
        </ul>
        <div className='hidden md:flex'>
          <button className='text-xl text-white font-semibold bg-green-500 px-5 py-1 rounded-md'>Log In</button>
        </div>
        <div onClick={showMenuFunction} className='cursor-pointer  md:hidden'>
          <Icon icon="icon-park:hamburger-button" className='text-4xl' />
        </div>
      </div>

      {/* -------------------------Mobile Menu Slide-------------------------- */}
      <div ref={menuRef} className={`bg-gray-300 p-6 fixed w-64 h-screen flex flex-col gap-8 top-0 transform transition-transform duration-500 ease-out ${showMenu == 'true' ? 'translate-x-0' : '-translate-x-full'}`}>
        <div onClick={hideMenuFunction} className='absolute right-0 top-3 cursor-pointer'>
          <Icon icon="charm:cross" className='text-6xl' />
        </div>
        <div>
          <h1 className='font-bold text-3xl'>CultYog</h1>
        </div>
        <ul className='flex flex-col gap-4'>
          <li className='font-semibold cursor-pointer'>Home</li>
          <li className='font-semibold cursor-pointer'>About</li>
          <li className='font-semibold cursor-pointer'>Services</li>
          <li className='font-semibold cursor-pointer'>Products</li>
          <li className='font-semibold cursor-pointer'>Contact Us</li>
        </ul>
        <div>
          <button className='text-xl text-white font-semibold bg-green-500 px-5 py-2 rounded-sm'>Log In</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

