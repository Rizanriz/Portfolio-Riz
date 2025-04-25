import React from 'react'

const Section2 = () => {
  return (
    <>
      <section id="about" className="w-full flex flex-col items-center justify-around py-20 px-6 gap-5 text-white z-10">
        <div className="w-full text-center lg:text-left sm:pl-20 mt-5 " >
          <h3 className="mb-5 lg:text-4xl sm:text-2xl font-light font-custom ">
            AREAS OF EXPERTISE :
          </h3>
          <div className='lg:text-2xl sm:text-sm '>
            <h5 className=" text-purple-500 lg:mb-5">
              Languages: <span className="text-white italic">HTML, CSS, JavaScript, Node.js</span>
            </h5>
            <h5 className=" text-purple-500 lg:mb-5">
              Frameworks : <span className="text-white italic">Express.js, Tailwind, Bootstrap, NEXT.js</span>
            </h5>
            <h5 className=" text-purple-500 lg:mb-5">
              Dev Tools : <span className="text-white italic">VS Code, Figma, Postman, GitHub</span>
            </h5>
            <h5 className=" text-purple-500 lg:mb-5">
              Libraries : <span className="text-white italic">React.js, Redux Toolkit, Mongoose, Axios, jsonwebtoken, bcryptjs, multer</span>
            </h5>
            <h5 className=" text-purple-500 lg:mb-5">
              Familiar : <span className="text-white italic">Angular, Material UI, Framer Motion, GSAP, Three.js</span>
            </h5>
            <h5 className=" text-purple-500 lg:mb-5">
              Deployment & Hosting Platforms : <span className="text-white italic">Vercel, Netlify , Amazon Web Services (AWS), Render</span>
            </h5>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section2
