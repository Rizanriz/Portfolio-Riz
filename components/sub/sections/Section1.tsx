import React from 'react'
import './Section1.css'
import Image from 'next/image'

function Section1() {
  return (
    <>
       <section id="about">
             <div className='about'>
                <div className="about_img" >
                <Image
                    src="/hero.jpeg"
                    alt="work icon" height={650} width={650}
                    />
                </div>
                <div className="about_info" >
                    <h3 >About Me</h3>
                    <h3>I'm a <span>FULL STACK </span>Developer</h3>
                    <p> Full Stack MERN Developer, I specialize in building responsive, dynamic, and scalable web applications using MongoDB, Express.js, React, and Node.js. With a strong foundation in JavaScript,
                       I am adept at developing both client-side and server-side components, ensuring seamless integration and performance.</p>
                  </div>
            </div>
          </section> 
    </>
  )
}

export default Section1