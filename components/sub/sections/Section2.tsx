import React from 'react'

const Section2 = () => {
  return (
    <>
      <section id="about" className="w-full flex flex-col items-center justify-around py-20 px-6 gap-5 text-white z-10">
        <div className="w-full text-left sm:pl-20 mt-20">
          <h3 className="mb-5 lg:text-4xl sm:text-sm font-custom">EXPERIENCE :</h3>
          <h2 className='mb-5 lg:text-3xl sm:text-sm font-custom'>Luminar Technolab
            <span className='mb-5 lg:text-2xl sm:text-sm font-custom'>MERN Stack Developer Intern : January 2024 – July 2024</span>
          </h2>

          <p className="text-xs lg:text-xl lg:w-11/12 ">
            Developed responsive and dynamic web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
            Gained hands-on experience in full-stack development, enhancing technical and problem-solving abilities.
            Worked on various projects, implementing scalable features and optimizing performance for production-level applications.
            <br /> <br />
          </p>
          <h2 className='mb-5 lg:text-3xl sm:text-sm font-custom'>Druv360°
            <span className='mb-5 lg:text-2xl sm:text-sm font-custom'>Junior MERN Stack Developer : September 2024 – January 2025</span>
          </h2>

          <p className="text-xs lg:text-xl md:text-sm lg:w-11/12">
            Designed, developed, tested, and maintained scalable web applications using the MERN stack.
            Created RESTful APIs to enable seamless communication between front-end and back-end systems.
            Built responsive and user-friendly interfaces with React.js, integrating them with server-side logic.
            Managed and optimized databases using MongoDB for efficient data storage and retrieval.
            Debugged and resolved technical issues to ensure smooth application performance.
            Collaborated with cross-functional teams to deliver high-quality software solutions.
            Demonstrated expertise in state management, third-party API integration, and deployment on platforms like AWS.
            Proactively learned new technologies and consistently improved skills, contributing significantly to organizational goals.
          </p>
        </div>
      </section>
    </>
  )
}

export default Section2
