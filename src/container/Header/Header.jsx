import React from 'react'
import './Header.scss' 
import {motion} from 'framer-motion'
import './Header.scss'
import { images } from '../../constant'
import { AppWrap, MotionWrap } from '../../wrapper'


const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <div className='app__header app__flex'>
       <motion.div
         whileInView={{x:[-100, 0], opacity:[0,1]}}
         transition={{duration:0.5}}
         className='app__header-info'
       >
         <div className='app__header-badge'>
            <div className='badge-cmp app_flex'>
               <span>👋</span>
               <div style={{marginLeft:20}}>
                  <p className='p-text'>Hello, I am</p>
                  <h1 className='head-text'>Iram</h1>
               </div>
            </div>
            <div className='tag-cmp app__flex'>
            <p className='p-text'>web developer</p>
            <p className='p-text'>Freelancer</p>
         </div>
         </div>
       </motion.div>
       <motion.div
          whileInView={{x:[-100,0],opacity:[0,1]}}
          duration={{duration:0.5, delayChildren:0.5}}
          className='app__header-img'
       >
        <img src={images.profile} alt='profile'/>
        <motion.img
           whileInView={{scale:[0,1]}}
           transition={{duration:1, ease:'easeInOut'}}
           className='app__header-img overlay_circle'
           src={images.circle}
           alt='profile-circle'
        >
        </motion.img>
       </motion.div>
       <motion.div
       variants={scaleVariants}
       whileInView={scaleVariants.whileInView}
       className='app__header-circles'
       >
       {[images.javascript, images.redux, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
       </motion.div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(Header, 'app__header'),
  'home',
)