import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <section id='skills' className='mt-8'>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className={`w-screen flex justify-center`}>
        <h2 className={`skills`}>Skills</h2>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className='px-12'>
        <h4 className='skillsub mt-[50px]'>LANGUAGES</h4>
        <div className={`flex py-7 gap-7`}>
          <motion.div whileHover={{scale:1.2, transitionDelay:0.5}} className="badge badge-outline badge-neutral badge-lg">Python</motion.div>
          <motion.div whileHover={{scale:1.2, transitionDelay:0.5}} className="badge badge-outline badge-neutral badge-lg">JavaScript</motion.div>
          <motion.div whileHover={{scale:1.2, transitionDelay:0.5}} className="badge badge-outline badge-neutral badge-lg">Java</motion.div>
          <motion.div whileHover={{scale:1.2, transitionDelay:0.5}} className="badge badge-outline badge-neutral badge-lg">C/C++</motion.div>
          <motion.div whileHover={{scale:1.2, transitionDelay:0.5}} className="badge badge-outline badge-neutral badge-lg">HTML/CSS</motion.div>
          <motion.div whileHover={{scale:1.2, transitionDelay:0.5}} className="badge badge-outline badge-neutral badge-lg">R</motion.div>
          <motion.div whileHover={{scale:1.2, transitionDelay:0.5}} className="badge badge-outline badge-neutral badge-lg">Bash</motion.div>
          <motion.div whileHover={{scale:1.2, transitionDelay:0.5}} className="badge badge-outline badge-neutral badge-lg">SQL</motion.div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className='px-12'>
        <h4 className='skillsub mt-[30px]'>FRAMEWORKS</h4>
        <div className={`flex py-7 gap-7`}>
          <motion.div whileHover={{scale:1.2, transitionDelay:0.5}} className="badge badge-outline badge-neutral badge-lg">Numpy</motion.div>
          <motion.div whileHover={{scale:1.2, transitionDelay:0.5}} className="badge badge-outline badge-neutral badge-lg">Pandas</motion.div>
          <motion.div whileHover={{scale:1.2, transitionDelay:0.5}} className="badge badge-outline badge-neutral badge-lg">Matplotlib</motion.div>
          <motion.div whileHover={{scale:1.2, transitionDelay:0.5}} className="badge badge-outline badge-neutral badge-lg">Seaborn</motion.div>
          <motion.div whileHover={{scale:1.2, transitionDelay:0.5}} className="badge badge-outline badge-neutral badge-lg">ReactJs</motion.div>
          <motion.div whileHover={{scale:1.2, transitionDelay:0.5}} className="badge badge-outline badge-neutral badge-lg">Angular</motion.div>
          <motion.div whileHover={{scale:1.2, transitionDelay:0.5}} className="badge badge-outline badge-neutral badge-lg">Tailwind CSS</motion.div>
          <motion.div whileHover={{scale:1.2, transitionDelay:0.5}} className="badge badge-outline badge-neutral badge-lg">Bootstrap</motion.div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className='px-12'>
        <h4 className='skillsub mt-[30px]'>PLATFORMS</h4>
        <div className={`flex py-7 gap-7`}>
          <motion.div whileHover={{scale:1.2, transitionDelay:0.5}} className="badge badge-outline badge-neutral badge-lg">Windows</motion.div>
          <motion.div whileHover={{scale:1.2, transitionDelay:0.5}} className="badge badge-outline badge-neutral badge-lg">Linux</motion.div>
          <motion.div whileHover={{scale:1.2, transitionDelay:0.5}} className="badge badge-outline badge-neutral badge-lg">Web</motion.div>
          <motion.div whileHover={{scale:1.2, transitionDelay:0.5}} className="badge badge-outline badge-neutral badge-lg">GitHub</motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
