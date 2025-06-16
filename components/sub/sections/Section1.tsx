import React from 'react'
import Image from 'next/image'

function Section1() {
  return (
    <>
<section className="w-full flex flex-col-reverse md:flex-row items-center justify-around py-20 px-6 gap-5 text-white z-10">
        <div className="relative w-100 h-125 ">
          <Image
            src="/me.png"
            alt="work icon"
            height={350} width={350}
            className="relative border-2 border-purple-500 "
          />
        </div>
        <div className="lg:w-1/2 sm:w-full">
          <h3 className="lg:mb-5 mb-2 lg:text-5xl text-2xl font-custom">
            About Me
          </h3>
          <h3 className="lg:text-5xl text-2xl font-light lg:mb-10 mb-4 font-custom">
            I&apos;m a <span className="font-medium border-b-2 border-purple-500">FULL STACK</span> Developer
          </h3>
          <p className="lg:text-xl">
            Full Stack MERN Developer, I specialize in building responsive, dynamic, and scalable web applications using MongoDB, Express.js, React, and Node.js. With a strong foundation in JavaScript, I am adept at developing both client-side and server-side components, ensuring seamless integration and performance.
          </p>
        </div>
      </section>
    </>
  )
}

export default Section1
