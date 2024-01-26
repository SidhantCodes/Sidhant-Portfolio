import React, { useState } from 'react'
import { logo } from '../assets'
import { navlinks } from '../constants';
const Navbar = () => {
  const [active, setActive] = useState(null);
  const [toggle, setToggle] = useState(false);
  return (
    <div className='-full flex py-8 px-12 justify-between items-center navbar'>
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
    </div>
  )
}

export default Navbar
