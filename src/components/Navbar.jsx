import React, { useState } from 'react'
import { logo,menu,close } from '../assets'
import { navlinks } from '../constants';
const Navbar = () => {
  const [active, setActive] = useState(null);
  const [toggle, setToggle] = useState(false);
  return (
      <div className='flex py-8 px-12 justify-between items-center '>
        <img src={logo} alt="" className={`h-[30px] `} />
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navlinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`cursor-pointer  mt-3 ${
                active === nav.title ? "text-gray-700" : "text-black"
              } hover:text-gray-700 ${index === navlinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => {
                setActive(nav.title);
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
            
          ))}
        </ul>
        <div className="sm:hidden flex flex-1  justify-end items-center">
          <img src={toggle? close : menu} alt='menu' className="w-[22px] h-[22px] cursor-pointer" onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? "hidden" : "flex"} p-6 box-style absolute top-20 right-0 mx-4 my-2 min-w-[140px] backdrop-blur-lg rounded-2xl sidebar`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navlinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-Outfit font-regular  text-[16px] px-3 py-1 ${
                    active === nav.title ? "text-gray-700 font-bold" : "text-black"
                  } hover:text-red ${index === navlinks.length - 1 ? "mb-0" : "mb-3"}`}
                  onClick={() => {
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>  
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    
  )
}

export default Navbar
