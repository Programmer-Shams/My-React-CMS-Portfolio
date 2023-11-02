import React from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client, urlFor } from '../../client'
import { useState, useEffect } from 'react'

const About = () => {
  const [abouts, setAbouts] = useState([])
  useEffect(() => {
    const qurey = '*[_type == "abouts"]'
    client.fetch(qurey) 
    .then((data) => setAbouts(data))
  }, [])
  
  return (
    <>
    <h2 className='head-text'>
      I Know that <span>Good Dev </span> Means <span>Good Business</span>
    </h2>
    <div className='app__profiles'>
      {abouts.map((about, i) =>(
        <motion.div
        whileInView={{opacity: 1}}
        whileHover={{scale: 1.1}}
        transition={{duration: 0.5, type: 'tween'}}
        className='app__profile-item'
        key={about.title + i}
        >
          <img src={urlFor(about.imgUrl)} alt={about.title} />
          <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
          <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
        </motion.div> 
      ))}
    </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about',
  "app__whitebg"
  )