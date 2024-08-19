"use client"

import Link from "next/link"
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const HeaderNew = () => {

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
      <div className="navbar bg-base-100 fixed nav z-50 bg-opacity-95 px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links.map(({ id, link, name}) => (
              <li
                key={id}
                className="text-xl nav-links px-4 cursor-pointer capitalize font-medium text-primary-neutral hover:scale-105 hover:text-white duration-200 link-underline"
              >
                <Link href={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link 
          className="btn btn-ghost text-xl"
          href="/">
          CG
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map(({ id, link, name}) => (
            <li
              key={id}
              className="text-xl nav-links px-4 cursor-pointer capitalize font-medium text-primary-neutral hover:scale-105 hover:text-white duration-200 link-underline"
            >
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
          <Link  
            href={'https://docs.google.com/document/d/1uzCA5gz_KHHZ7ZZfMyvmKlrg1EFv_epMMTomAd0Up5k/edit?usp=sharing'}
            className="btn btn-accent"
            target="_blank"  rel="noopener noreferrer" locale={false}>
              Resume
          </Link>

      </div>
    </div>

    )
}