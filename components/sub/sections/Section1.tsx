import React from 'react'
import Image from 'next/image'

function Section1() {
  return (
    <>
      <section id="about" className="w-full flex items-center justify-around py-20 px-6 gap-5 text-white z-10">
        <div className="relative w-100 h-125">
          <Image
            src="/hero.jpeg"
            alt="work icon"
            height={500} width={500}
            className="relative border-2 border-purple-500"
          />
          <div className="absolute top-5 left-5 w-full h-full border-2 border-purple-500 z-1"></div>
        </div>
        <div className="w-1/2 ">
          <h3 className="mb-5 text-5xl font-custom">
            About Me
          </h3>
          <h3 className="text-5xl font-light mb-10 font-custom">
            I&apos;m a <span className="font-medium border-b-2 border-purple-500">FULL STACK</span> Developer
          </h3>
          <p className="text-xl">
            Full Stack MERN Developer, I specialize in building responsive, dynamic, and scalable web applications using MongoDB, Express.js, React, and Node.js. With a strong foundation in JavaScript, I am adept at developing both client-side and server-side components, ensuring seamless integration and performance.
          </p>
        </div>
      </section>
    </>
  )
}

export default Section1
