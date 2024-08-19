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
    <div className="flex justify-between items-center x-8 w-full h-20 px-4 text-neutral-content bg-neutral fixed nav z-50 bg-opacity-95">
      <div>
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="btn btn-ghost"
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
            className="text-xl nav-links px-4 cursor-pointer capitalize font-medium text-primary-neutral hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
        <li className="text-xl cursor-pointer capitalize font-medium text-neutral-content hover:scale-105 hover:text-white duration-200 link-underline">
          {/* <a 
            // href="https://docs.google.com/document/d/e/2PACX-1vSOzNIgoAq0A4Wr7jDqGKfihnPC-2OjfqiAVJLTFxi5-HFeHwFO8NuuabNttTlv9Q/pub" 
            href="cynthiaguzman-portfolio/public/files/Cynthia Guzman Resume 2024.pdf"
            className="nav-links px-4 cursor-pointer capitalize font-medium text-neutral-content hover:scale-105 hover:text-white duration-200 link-underline" 
            target="_blank" rel="noopener noreferrer">Resume
            </a> */}
            <Link  
              href={'/public/files/Cynthia Guzman Resume 2024.pdf'}
              // className="nav-links px-4 cursor-pointer capitalize font-medium text-neutral-content hover:scale-105 hover:text-white duration-200 link-underline"   
              className="btn btn-primary"
              target="_blank"  rel="noopener noreferrer" locale={false} download>
                Resume
            </Link>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-neutral-content md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="text-xl flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-primary-content">
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
           <li>
            {/* <a href="https://docs.google.com/document/d/e/2PACX-1vSOzNIgoAq0A4Wr7jDqGKfihnPC-2OjfqiAVJLTFxi5-HFeHwFO8NuuabNttTlv9Q/pub" 
           className="px-4 cursor-pointer capitalize py-6 text-4xl text-primary-content" target="_blank" rel="noopener noreferrer">Resume</a> */}
             <a
                href="public/files/Cynthia Guzman Resume 2024.pdf"
                // className="px-4 cursor-pointer capitalize py-6 text-4xl text-primary-content"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >Resume
            </a>
           </li>
        </ul>
      )}
    </div>

    )
}