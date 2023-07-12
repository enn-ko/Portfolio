import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import logo from '../../Img/Home/logo.svg'

const Footer = () => {
  return (
    <footer className='pt-32 pb-20 bg-black'>
      <div className='container'>
        <div className="flex justify-center items-center text-sm font-Inter flex-col">
          <Link to={'/'}>
            <img src={logo} alt="logo svg" />
          </Link>
          <ul className='flex mt-8 mb-9 gap-11 font-base text-gray'>
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
          <p className='text-gray'>
          © All rights reserved by {" "}
          <span className='text-primary'> WordPressRiver</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer