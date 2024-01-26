import React from 'react'
import styles from '../style'
import { title } from '../assets'
const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}  mt-12`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            
        <div className="flex flex-row justify-between items-center w-full px-12">

          <h1 className="title flex-1 ss:text-[102px] text-[82px] text-black ss:leading-[110.8px] leading-[95px]">
            Hello 👋, I’m {" "}
            <br className="sm:block hidden"/>Sidhant Mishra 👾
          </h1>
        </div>  
        <p className={`sub  max-w-[800px] mt-6 px-[51.3px]`}> Python Developer | Front-end Developer | Graphic Designer </p>
      </div>
      <div className='px-12 flex items-center'>
      Enthusiastic Python developer, seamlessly blending creativity.<br/> Exploring the nuances of frontend web development. I'm eager <br/> to turn innovative ideas into exceptional digital experiences.
      </div>
      {/* <div className={`para flex-1 flex ${styles.flexCenter} `}>
      Enthusiastic Python developer, seamlessly blending creativity.<br/> Exploring the nuances of frontend web development. I'm eager <br/> to turn innovative ideas into exceptional digital experiences.   
      </div> */}
      
    </section>
  )
}

export default Hero
