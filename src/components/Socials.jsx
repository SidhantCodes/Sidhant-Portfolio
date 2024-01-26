import React from 'react'
import { github, instagram, linkedin} from '../assets'
import { motion } from 'framer-motion'

const Socials = () => {
  
  return (
    <div className='sm:flex justify-between w-screen items-center px-12 py-12 mt-40'>
      <div className={`flex justify-center gap-20 sm:flex sm:gap-28`}>
        <a href="https://github.com/SidhantCodes" target="_blank"><motion.img whileHover={{ scale: [null, 1.1, 1.1] }} src={github} alt="github" className={`w-[30px] h-[30px] sm:w-[45px] sm:h-[45px]`} /></a>
        <a href="https://www.linkedin.com/in/smishra0110/" target="_blank"_blank><motion.img whileHover={{ scale: [null, 1.1, 1.1] }} src={linkedin} alt="linkedin" className={`w-[30px] h-[30px] sm:w-[45px] sm:h-[45px]`} /></a>
        <a href="https://www.instagram.com/_sidhant22/" target="_blank"><motion.img whileHover={{ scale: [null, 1.1, 1.1] }} src={instagram} alt="instagram" className={`w-[30px] h-[30px] sm:w-[45px] sm:h-[45px]`} /></a>
      </div>

    
      <div className="flex mt-12 sm:mt-0 sm:flex justify-center gap-8 ">
        <a href="https://drive.google.com/file/d/1d49b4HndYjiOGZintf0QuPhp5afGixtH/view?usp=sharing" className="bg-black text-white py-2 px-4 rounded-xl h-[40px] hover:bg-gray-800" target="_blank">
          Resume
        </a>
        <a href="mailto:mishrasidhant01@gmail.com" className="bg-black text-white py-2 px-4 rounded-xl h-[40px] hover:bg-gray-800">
          Email
        </a>
      </div>

    </div>
  )
}

export default Socials





