import React from "react";
import {
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";


const Footer = () => {
    return (
        <div className="footer w-full h-full bg-transparent text-gray-200 shadow-lg z-[99] ">
            <div className=" font-bold text-[25px] mb-10 flex justify-center">REACH OUT  / CONNECT  </div>
            <div className="footer min-w-[200px] h-auto flex items-center justify-evenly px-5 mb-10">
                <p className="flex flex-row items-center cursor-pointer hover:text-purple-500 hover:scale-110  transition-transform " >
                    <RxGithubLogo />
                    <a href="https://github.com/Rizanriz" target="_blank" className="text-[20px] ml-[6px]">Github</a>
                </p>
                <p className="flex flex-row items-center cursor-pointer  hover:text-purple-500 hover:scale-110  transition-transform ">
                    <RxTwitterLogo />
                    <a href="https://x.com/Rizwan_Rizz_" target="_blank" className="text-[20px] ml-[6px]">Twitter</a>
                </p>
                <p className="flex flex-row items-center cursor-pointer  hover:text-purple-500 hover:scale-110  transition-transform ">
                    <RxLinkedinLogo />
                    <a href="https://www.linkedin.com/in/mohammedrizwanka" target="_blank" className="text-[20px] ml-[6px]">Linkedin</a>
                </p>
                <p className="flex flex-row items-center cursor-pointer  hover:text-purple-500 hover:scale-110  transition-transform ">
                    <RxInstagramLogo />
                    <a href="https://www.instagram.com/riz_z_z_?igsh=NTlram95Nm9qbmx1" target="_blank" className="text-[20px] ml-[6px]">Instagram</a>
                </p>
            </div>
        </div>
    )
}

export default Footer