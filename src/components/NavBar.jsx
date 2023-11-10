"use client"
import Link from 'next/link'
import React, { useState} from 'react'
import NavLink from './NavLink'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'
import {Bars3Icon} from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'

 const navLinks = [
     {
         title: "Sobre mim",
         path: "#about",
        
     }, 
     {
         title: "Procedimentos",
         path: "#pro"
     },
     {
         title: "Contato",
         path: "#contact"
     }
 ]

const NavBar = () => {
    const [navbarOpen, setNavBarOpen] = useState(false)

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#885b5b] bg-opacity-90 ' id='#about'>
      <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-1'>
        <Link href={'/'} className='text-2xl md:text-5xl text-white font-semibold'>
            <Image 
            src={Logo}
            className='w-[80px] h-[80px]'
            alt='Logo'
            />
        </Link>
        <div className='mobile-menu block md:hidden'>
            {
                !navbarOpen ? (
                <button onClick={() => setNavBarOpen(true)} className='flex items-center px-3 py-2 border rounded border-b-slate-200 hover:text-whit hover:border-white  text-slate-200'>
                    <Bars3Icon className='h-5 w-5 '/>
                </button>
                    ) : (
                <button onClick={() => setNavBarOpen(false)} className='flex items-center px-3 py-2 border rounded border-b-slate-200 hover:text-whit hover:border-white  text-slate-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                    )
            }
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default NavBar
