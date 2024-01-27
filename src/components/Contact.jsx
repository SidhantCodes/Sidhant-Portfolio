import React from 'react'
import { githubO, linkedinO, mail } from '../assets'
import { motion } from 'framer-motion'
const Contact = () => {
  return (
    <section id='contact' className='mt-60 mb-36'>
      <div className={`flex flex-col px-12 w-screen items-center justify-center`}>
        <h2 className='head px-12 flex-wrap text-[32px] text-center sm:text-[60px]'>Interested in working together?</h2>
        <p className='para2 px-12 flex-wrap pt-6 text-[15px] sm:text-[28px]'>Let's connect and kickstart the journey of transforming your ideas into tangible, <br /> innovative solutions! Reach out to get started.</p>
        <h1 className='bigtitle text-[50px] sm:text-[92px] mt-5'>sidhantmishra</h1>
        <div className={`flex gap-5 mt-1`}>
          <a href="https://github.com/SidhantCodes" target="_blank"><motion.img whileHover={{ scale: [null, 1.1, 1.1] }} src={githubO} alt="" className={`h-[35px] w-[35px] sm:w-[55px] sm:h-[55px]`} /></a>
          <a href="https://www.linkedin.com/in/smishra0110/" target="_blank"><motion.img whileHover={{ scale: [null, 1.1, 1.1] }} src={linkedinO} alt="" className={`h-[35px] w-[35px] sm:w-[55px] sm:h-[55px]`} /></a>
          <a href="mailto:mishrasidhant01@gmail.com"><motion.img whileHover={{ scale: [null, 1.1, 1.1] }} src={mail} alt="" className={`h-[35px] w-[35px] sm:w-[55px] sm:h-[55px]`} /></a>
        </div>
      </div>
    </section>
  )
}

export default Contact
