import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../Img/Home/logo.svg'
import {delay, motion} from 'framer-motion'

const Navbar = () => {
  const [isopen,setIsOpen] = useState(true)
  const {pathname}  = useLocation()
  useEffect(()=>{
    setIsOpen(true)
  },[pathname])

  useEffect(()=>{
        const navbar = document.querySelectorAll('.navbar li')
        navbar.forEach((item)=>{
          const link = item.querySelector('a')
          if(link && link.getAttribute('href') === pathname){
            link.classList.add('active')
          }else{
            link.classList.remove('active')
          }
          
        })
  },[])

  const item = {
    exit:{
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "easeInOut"
      }
    }
  }
  return (
    
    <header className='bg-black text-base font-sans z-40'>
     <div className='container mx-auto  px-[4.5rem]'>

      <div className='flex justify-between items-center py-3'>
        <Link to={'/'} >
            <img src={logo} alt="" />
        </Link>
        <div onClick={()=>setIsOpen(!isopen)} className="menu w-8 h-10 relative md:hidden cursor-pointer">
          <span className={'absolute w-full h-0.5 top-[50%] left-[50%] bg-white translate-x-[-50%] translate-y-[-13px] rounded-md transition-transform duration-300' + (!isopen &&' translate-x-[-50%] translate-y-[50%] rotate-[-45deg]')}></span>
          <span className={'absolute w-full h-0.5 top-[50%] left-[50%] bg-white translate-x-[-50%] translate-y-[-50%] rounded-md transition-transform duration-300' + (!isopen && ' !w-0')}></span>
          <span className={'absolute w-full h-0.5 top-[50%] left-[50%] bg-white translate-x-[-50%] translate-y-[10px] rounded-md transition-transform duration-300' + (!isopen && ' translate-x-[-50%] translate-y-[50%] rotate-[45deg]')}></span>
        </div>
        <motion.div
          variants={item}
          initial={!isopen && {height:0,opacity:0}}
          animate={!isopen && {height:'50vh',opacity:1}}
          transition={{
            duration:0.8,
            delay: 0.3
          }}
          exit='exit'
          className={ isopen ? 'navbar hidden md:flex flex-wrap relative items-center bg-none text-gray justify-between' : 'absolute top-0 left-0 w-full mt-28 py-5 z-[1000] navbar bg-black' }>
          <ul className={'flex gap-12 text-gray ' + (!isopen && ' flex-col text-center')}>
            <li className=''>
              <NavLink to={'/'} aria-current="page" className="transition duration-300">Home</NavLink>
            </li>
            <li>
              <NavLink to={'about'} className="transition duration-300">About</NavLink>
            </li>
            <li>
              <NavLink to={'work'} className="transition duration-300">Work</NavLink>
            </li>
            <li>
              <NavLink to={'contact'} className="transition duration-300">Contact</NavLink>
            </li>
          </ul>
        </motion.div>

        <Link to={'contact'} className='text-white hidden md:block px-7 py-2 rounded-xl font-medium bg-gray-dark'>
          Let's talk
        </Link>
      </div>
     </div>
    </header>
  )
}

export default Navbar