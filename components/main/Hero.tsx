import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div id='hero' className='relative flex flex-col h-full w-full'>
        <video autoPlay muted loop className='video rotate-180 absolute top-[-324px] 
        left-0 z-[1] w-full h-full object-cover'>
            <source src='/blackhole.webm' type='video/webm' />
        </video>
        <HeroContent/>
    </div>
  )
}

export default Hero