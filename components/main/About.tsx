"use client"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
import Section1 from '../sub/sections/Section1'
import Section2 from '../sub/sections/Section2'
import Section3 from '../sub/sections/Section3'

function About() {

  const sectionRef = useRef(null)
  const trigerRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const pin = gsap.fromTo(sectionRef.current, {
      translateX: 0
    }, {
      translateX: '-200vw',
      ease: 'none',
      duration:1,
      scrollTrigger: {
        trigger: trigerRef.current,
        start: "top top",
        end: '3000 top',
        scrub: 0.1,
        pin: true
      }
    })

    return () => {
      pin.kill()
    }
  }, [])
  return (
    <>
      <section className='scroll-section-outer' id='about-me'>
        <div ref={trigerRef}>
          <div ref={sectionRef} className='scroll-section-inner text-white'>
            <div className='scroll-section '>
              <Section1/>
            </div>
            <div className='scroll-section'>
              <Section2/>
            </div>
            <div className='scroll-section'>
              <Section3/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About