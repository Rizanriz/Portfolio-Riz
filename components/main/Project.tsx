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
          src="/food.png"   
          title="Modern Food Delivery App"
          description="A food delivery application crafted with the powerful MERN stack (MongoDB, Express.js, React, and Node.js)."
          repoUrl="https://github.com/Rizanriz/Food-Delivery-App"
        />
        <ProjectCard 
          src="/spotify.png" 
          title="Spotify Lite"
          description="Spotify lite using React JS and Tailwind CSS. Leveraging React DOM for seamless user experience, I've crafted a visually appealing and highly functional front end."
          repoUrl="https://github.com/Rizanriz/Spotify-Clone"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          repoUrl="https://github.com/Rizanriz/Portfolio-Riz"
        />
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 ">
        <ProjectCard
          src="/project imgs/quiz.png"   
          title="Quiz App built using React "
          description="A food delivery application crafted with the powerful MERN stack (MongoDB, Express.js, React, and Node.js)."
          repoUrl="https://github.com/Rizanriz/Food-Delivery-App"
        />
        <ProjectCard 
          src="/project imgs/ChatApp.png" 
          title="Chat app built using MERN"
          description="Spotify lite using React JS and Tailwind CSS. Leveraging React DOM for seamless user experience, I've crafted a visually appealing and highly functional front end."
          repoUrl="https://github.com/Rizanriz/Spotify-Clone"
        />
        <ProjectCard
          src="/project imgs/weatherApp.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          repoUrl="https://github.com/Rizanriz/Portfolio-Riz"
        />
      </div>
      
    </div>
  );
};

export default Projects;