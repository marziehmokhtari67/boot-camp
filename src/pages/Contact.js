import React from 'react'
import {FaEnvelope} from 'react-icons/fa'
import {FaPhone} from 'react-icons/fa'
import{motion} from 'framer-motion'
function Contact() {
  return (
    <motion.div className='contact'
    intial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <section >
      <p>02191077225<FaPhone/></p>
      <p>ساعت پاسخگویی 9 الی 18</p>
      <p>MaktabSharif.ir<FaEnvelope/> </p>
    </section>
    </motion.div>
    
  )
}

export default Contact
