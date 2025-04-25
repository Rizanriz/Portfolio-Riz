import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center z-[99]"
      id="projects" >

      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-10 ">
        <ProjectCard 
          src="/project imgs/spotify.png" 
          title="Spotify Lite"
          description="Spotify lite using React JS and Tailwind CSS. Leveraging React DOM for seamless user experience, I've crafted a visually appealing and highly functional front end."
          repoUrl="https://github.com/Rizanriz/Spotify-Clone"
        />
        <ProjectCard
          src="/food.png"   
          title="Modern Food Delivery App"
          description="This food delivery application, built with the MERN stack, It integrates Stripe for secure transactions and features an admin panel for managing orders, deployed on Render for scalability.."
          repoUrl="https://github.com/Rizanriz/Food-Delivery-App"
        />
        <ProjectCard
          src="/project imgs/auth.png"
          title="User Authentication"
          description="This project is a User Authentication Web Application built with the MERN stack and access a dashboard once authenticated. Welcome and reset password emails are sent using Mailtrap for testing purposes.."
          repoUrl="https://github.com/Rizanriz/Auth"
        />
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 ">
        <ProjectCard
          src="/project imgs/iphone.png"   
          title="Iphone Website Clone  "
          description="IPhone website clone using React, GSAP, and Three.js. This interactive site features a 3D model of the iPhone where users can change colors and explore the design."
          repoUrl="https://github.com/Rizanriz/Quiz-App"
        />
        <ProjectCard 
          src="/project imgs/ChatApp.png" 
          title="Chat App"
          description="Real-time chat application integrating Socket.io for instant messaging and live user status updates. The application features JWT-based authentication, efficient global state management with Zustand, and a responsive UI styled with TailwindCSS and Daisy UI."
          repoUrl="https://github.com/Rizanriz/ChatBox"
        />
        <ProjectCard
          src="/project imgs/weatherApp.png"
          title="Weather App"
          description="This weather app provides real-time weather updates by fetching current conditions via an API call, delivering accurate and up-to-date information for any location."
          repoUrl="https://github.com/Rizanriz/React-Weather-App"
        />
      </div>
      
    </div>
  );
};

export default Projects;