import React from 'react'
import styles from '../style'

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}  mt-12`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 `}>
            
        <div className="flex flex-row justify-between items-center w-full px-12">

          <h1 className="title flex-1 text-[45px] leading-[40px] sm:text-[92px] sm:leading-[90.5px]">
            Hello 👋, I’m {" "}
            <br className="sm:block hidden"/>Sidhant Mishra 👾
          </h1>
        </div>  
        <p className={`sub max-w-[500px] text-[13.3px] sm:max-w-[800px] mt-6 px-12 sm:text-[25px]`}> Python Developer | Front-end Developer | Graphic Designer </p>
      </div>
      <div className='px-[3rem] pt-20 text-[13px] justify-center sm:flex items-center sm:text-[15px]'>
      Enthusiastic Python developer, seamlessly blending creativity.<br/> Exploring the nuances of development. I'm eager to turn <br />innovative ideas into exceptional digital experiences.
      </div>      
    </section>
  )
}

export default Hero
