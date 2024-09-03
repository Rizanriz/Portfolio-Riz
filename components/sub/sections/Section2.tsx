import React from 'react'

const Section2 = () => {
  return (
    <>
      <section id="about" className="w-full flex flex-col items-center justify-around py-20 px-6 gap-5 text-white z-10">
        <div className="w-full text-center sm:text-left sm:pl-20 mt-20">
          <h3 className="mb-5 text-5xl font-custom">
            EXPERIENCE :
          </h3>
          <p className="text-xl w-11/12">
            For the past seven months, I have been a part of Luminar Technolab, where I have honed my skills in the MERN stack. During this time, I have worked on various projects, enhancing my expertise in building responsive and dynamic web applications. My experience at Luminar has equipped me with hands-on knowledge in full-stack development, solidifying both my technical and problem-solving abilities.
          </p>
        </div>
        <div className="w-full text-center sm:text-left sm:pl-20 mt-5">
          <h3 className="mb-5 text-5xl font-light font-custom ">
            AREAS OF EXPERTISE :
          </h3>
          <h5 className="text-2xl text-purple-500 mb-5">
            Languages: <span className="text-white italic">HTML, CSS, JavaScript, Node.js</span>
          </h5>
          <h5 className="text-2xl text-purple-500 mb-5">
            Frameworks : <span className="text-white italic">Express.js, Tailwind, Bootstrap, NEXT.js</span>
          </h5>
          <h5 className="text-2xl text-purple-500 mb-5">
            Dev Tools : <span className="text-white italic">VS Code, Figma, Postman, GitHub</span>
          </h5>
          <h5 className="text-2xl text-purple-500 mb-5">
            Libraries : <span className="text-white italic">React.js, Redux Toolkit, Mongoose, Axios, jsonwebtoken, bcryptjs, multer</span>
          </h5>
          <h5 className="text-2xl text-purple-500 mb-5">
            Familiar : <span className="text-white italic">Angular, Material UI, Framer Motion, GSAP, Three.js</span>
          </h5>
        </div>
      </section>
    </>
  )
}

export default Section2
