import React from 'react'
import{motion} from 'framer-motion'
function About() {
  return (
    <motion.div className='about'
    intial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <h1>اولین بوت کمپ آموزشی- استخدامی در ایران</h1>
    </motion.div>
  )
}

export default About
