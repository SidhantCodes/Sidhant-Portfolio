import React from 'react'
import { mail } from '../assets'
import { motion } from 'framer-motion'
const Contact = () => {
  return (
    <section id='contact' className='mt-60 mb-36'>
      <div className={`flex flex-col px-12 w-screen items-center justify-center`}>
        <h2 className='head px-12 flex-wrap text-[52px] text-center sm:text-[90px]'>Contact.</h2>
        <p className='para2 px-12 flex-wrap pt-6 text-[12px] sm:text-[23px]'>Shoot me an email if you want to connect! You can also find me on <a href="https://www.linkedin.com/in/smishra0110/" target="_blank" className='links'>Linkedin</a> or <a href="https://github.com/SidhantCodes" target="_blank" className='links'>GitHub</a> if that's more your speed.</p>
        <div className={`flex mt-11 mb-44`}>
          <a href="mailto:mishrasidhant01@gmail.com"><img src={mail} className={`w-[23px] mt-[2.2px] sm:mt-0 sm:w-[40px] sm:h-[32px] `} /></a>
          <a href="mailto:mishrasidhant01@gmail.com" className='mail sm:text-[24px]'>mishrasidhant01@gmail.com</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
