"use client"
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'
import React from 'react'


const SkillText = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
         <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[15px] px-[15px] border border-[#7042f88b] opacity-[0.9] mb-4" >
          <SparklesIcon className='text-[#eceaf2] mr-[10px] h-5 w-5' />
          <h1 className='Welcome-text text-[13px]'>Think better every day...</h1>
        </motion.div>

        <motion.div variants={slideInFromLeft(0.5)} className='font-mono lg:text-[30px]  text-white font-medium mt-[10px] text-center mb-[15px]'>
            Skills that i have acquired over the Years
        </motion.div>

        <motion.div variants={slideInFromRight(0.5)} 
        className='cursive lg:text-[30px] text-gray-200 mb-10 mt-[10px] text-center'>
            Making apps with modern technologies
        </motion.div>
    </div>
  )
}
  
export default SkillText