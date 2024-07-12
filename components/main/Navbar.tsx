import { Socials } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from 'react-icons/rx'

const Navbar = () => {
    return (
        <div className="nav w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[100] px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <div className='logo'>
                <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
                    <Image src='/Navlogo.png' alt='logo' width={70} height={70} className='cursor-pointer hover:animate-slowspin' />
                    <span className='font-bold ml-[10px] hidden md:block text-gray-300'>Portfolio</span>
                </a>
                </div>
                <div className="items w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">    
                        <a href="#about-me" className='cursor-pointer'>About me</a>
                        <a href="#skills" className='cursor-pointer'>Skills</a>
                        <a href="#projects" className='cursor-pointer'>Projects</a>
                        <a href="#Contact" className='cursor-pointer'> Contact</a>
                    </div>
                </div>

                <div className="icons flex gap-5 cursor-pointer text-white text-xl">
                        <a href="https://www.linkedin.com/in/mohammedrizwanka" target='_blank'><RxLinkedinLogo /></a>
                        <a href="https://github.com/Rizanriz" target='_blank'><RxGithubLogo /></a>
                        <a href="https://www.linkedin.com/in/mohammedrizwanka" target='_blank'><RxInstagramLogo /></a>
                </div>

                {/* <div className='flex flex-row gap-5 cursor-pointer'>
                    {
                        Socials.map((social) => (
                            <Image src={social.src} alt={social.name} key={social.name}
                                width={24} height={24} />
                        ))
                    }
                </div> */}

            </div>
        </div>

    )
}

export default Navbar