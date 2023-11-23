"use client"

import Link from "next/link"
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {

    const [nav, setNav] = useState(false);

    const links = [
      {
        id: 1,
        link: "/#about",
        name: "Home"
      },
      {
        id: 2,
        link: "/#experience",
        name: "experience"
      },
      {
        id: 3,
        link: "/#projects",
        name: "Projects"
      },
      {
        id: 4,
        link: "/#skills",
        name: "Skills"
      },
      {
        id: 5,
        link: "/#contact",
        name: "Contact"
      },
    ];

    return (
        // <header className="navbar sticky py-4 px-8 top-0 z-50 bg-opacity-95 bg-secondary font-extrabold text-secondary-content">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //         <label tabIndex={0} className="md:hidden">
        //             <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        //             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        //             </svg>
        //         </label>
        //         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-base-100">
        //             <li><Link href="/#about">Home</Link></li>
        //             <li><Link href="/#experience">Experience</Link></li>
        //             <li><Link href="/#projects">Projects</Link></li>
        //             <li><Link href="/#skills">Skills</Link></li>
        //             <li><Link href="/#contact">Contact</Link></li>
        //         </ul>
        //         </div>
        //         <a href="/"className="ps-4 text-xl hover:text-accent ease-in duration-150">Cynthia Guzman</a>
        //     </div>
        //     <div className="navbar-center hidden md:flex">
        //         <ul className="flex flex-row gap-4 px-1 ">
        //         <li><Link href="/#about" className="hover:text-accent ease-in duration-150">Home</Link></li>
        //         <li><Link href="/#experience" className="hover:text-accent ease-in duration-150">Experience</Link></li>
        //         <li><Link href="/#projects" className="hover:text-accent ease-in duration-150">Projects</Link></li>
        //         <li><Link href="/#skills" className="hover:text-accent ease-in duration-150">Skills</Link></li>
        //         <li><Link href="/#contact" className="hover:text-accent ease-in duration-150">Contact</Link></li>
        //         </ul>
        //     </div>
        //     <div className="navbar-end md:flex">
        //         <a href="https://docs.google.com/document/d/e/2PACX-1vSOzNIgoAq0A4Wr7jDqGKfihnPC-2OjfqiAVJLTFxi5-HFeHwFO8NuuabNttTlv9Q/pub" className="hover:text-accent ease-in duration-150" target="_blank" rel="noopener noreferrer">Resume</a>
        //     </div>
        // </header>

    <div className="flex justify-between items-center w-full h-20 px-4 text-secondary-content bg-secondary fixed nav z-50 bg-opacity-95">
      <div>
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href="/"
          >
            <img src="https://i.imgur.com/FVJ7QQI.png" alt="logo" width={50} height={50}/>
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, name}) => (
          <li
            key={id}
            className="text-xl nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
        <li className="text-xl cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"><a href="https://docs.google.com/document/d/e/2PACX-1vSOzNIgoAq0A4Wr7jDqGKfihnPC-2OjfqiAVJLTFxi5-HFeHwFO8NuuabNttTlv9Q/pub" className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline" target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="text-xl flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {name}
              </Link>
            </li>
          ))}
           <li><a href="https://docs.google.com/document/d/e/2PACX-1vSOzNIgoAq0A4Wr7jDqGKfihnPC-2OjfqiAVJLTFxi5-HFeHwFO8NuuabNttTlv9Q/pub" className="px-4 cursor-pointer capitalize py-6 text-4xl" target="_blank" rel="noopener noreferrer">Resume</a></li>
        </ul>
      )}
    </div>

    )
}