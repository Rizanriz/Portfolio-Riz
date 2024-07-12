import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  repoUrl: string;
}

const ProjectCard = ({ src, title, description,repoUrl }: Props) => {
  return (
    <div className="card relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transition-transform">
      <Image 
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain "
      />

      <div className="relative p-4">
        <h1 className="text-2xl mt-2 font-semibold text-white">{title}</h1>
        <p className="mt-2 mb-5 text-gray-300">{description}</p>
        <a href={repoUrl} target="_blank"
        className="text-blue-500 hover:underline cursor-pointer"> View Repository</a>
      </div>
    </div>
  );
};

export default ProjectCard;