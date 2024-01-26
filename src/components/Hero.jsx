import React from 'react'
import styles from '../style'
import { title } from '../assets'
const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} bg-[#FDFDF5] mt-6`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            
        <div className="flex flex-row justify-between items-center w-full px-12">
          <img src={title} alt="" />
        </div>  
        
        <p className={`${styles.paragraph} text-dimwhite max-w-[800px] mt-4 px-12`}> Python Developer | Front-end Developer | Graphic Designer </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {/* <img src={robot} alt="" className="w-100% h-100% relative z-[5]" /> */}
        {/* <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" /> */}
        {/* <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
      </div>
      {/* <div className={`w-[50%] ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  )
}

export default Hero
