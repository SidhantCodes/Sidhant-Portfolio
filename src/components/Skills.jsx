import React from 'react'

const Skills = () => {
  return (
    <section id='skills' className='mt-8'>
      <div className={`w-screen flex justify-center`}>
        <h2 className={`skills`}>Skills</h2>
      </div>
      <div className='px-12'>
        <h4 className='skillsub mt-[50px]'>LANGUAGES</h4>
        <div className={`flex py-7 gap-7`}>
          <div className="badge badge-outline badge-neutral badge-lg">Python</div>
          <div className="badge badge-outline badge-neutral badge-lg">JavaScript</div>
          <div className="badge badge-outline badge-neutral badge-lg">Java</div>
          <div className="badge badge-outline badge-neutral badge-lg">C/C++</div>
          <div className="badge badge-outline badge-neutral badge-lg">HTML/CSS</div>
          <div className="badge badge-outline badge-neutral badge-lg">R</div>
          <div className="badge badge-outline badge-neutral badge-lg">Bash</div>
          <div className="badge badge-outline badge-neutral badge-lg">SQL</div>
        </div>
      </div>
      <div className='px-12'>
        <h4 className='skillsub mt-[30px]'>FRAMEWORKS</h4>
        <div className={`flex py-7 gap-7`}>
          <div className="badge badge-outline badge-neutral badge-lg">Numpy</div>
          <div className="badge badge-outline badge-neutral badge-lg">Pandas</div>
          <div className="badge badge-outline badge-neutral badge-lg">Matplotlib</div>
          <div className="badge badge-outline badge-neutral badge-lg">Seaborn</div>
          <div className="badge badge-outline badge-neutral badge-lg">ReactJs</div>
          <div className="badge badge-outline badge-neutral badge-lg">Angular</div>
          <div className="badge badge-outline badge-neutral badge-lg">Tailwind CSS</div>
          <div className="badge badge-outline badge-neutral badge-lg">Bootstrap</div>
        </div>
      </div>
      <div className='px-12'>
        <h4 className='skillsub mt-[30px]'>PLATFORMS</h4>
        <div className={`flex py-7 gap-7`}>
          <div className="badge badge-outline badge-neutral badge-lg">Windows</div>
          <div className="badge badge-outline badge-neutral badge-lg">Linux</div>
          <div className="badge badge-outline badge-neutral badge-lg">Web</div>
          <div className="badge badge-outline badge-neutral badge-lg">GitHub</div>
        </div>
      </div>
    </section>
  )
}

export default Skills
