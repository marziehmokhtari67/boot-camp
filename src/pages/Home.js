import React from 'react'
import {Link} from 'react-router-dom'
import{motion} from 'framer-motion'
function Home() {
  return (
    <motion.div className='container'
    intial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
        <section>
            <h1>
            React JS
            </h1>
            <Link to='MaktabSharif.ir'>MaktabSharif.ir</Link>
            <p>(React.js)زبان برنامه نویسی ری‌‌اکت</p>
        </section>
      
    </motion.div>
  )
}

export default Home
