import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import React from 'react';

export const metadata: Metadata = {
  title: "Cynthia Guzman",
  description: 'Mechanical Engineer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
      <header className="navbar sticky bg-base-100 py-4 px-8 top-0 z-50 bg-opacity-95">
        {/* Mobile nav */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="/#home" scroll={false}>Home</Link></li>
                <li><Link href="/#about" scroll={false}>About Me</Link></li>
                <li><Link href="/#experience" scroll={false}>Experience</Link></li>
                <li><Link href="/#projects" scroll={false}>Projects</Link></li>
                <li><Link href="/#skills" scroll={false}>Skills</Link></li>
            </ul>
          </div>
          <a href="/"className="scale-75 btn ps-4 text-xl hover:text-primary ease-in duration-150">Cynthia Guzman</a>
        </div>

        {/* desktop nav */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li><Link href="/#home" className="hover:text-primary ease-in duration-150" scroll={false}>Home</Link></li>
            <li><Link href="/#about" className="hover:text-primary ease-in duration-150" scroll={false}>About Me</Link></li>
            <li><Link href="/#experience" className="hover:text-primary ease-in duration-150" scroll={false}>Experience</Link></li>
            <li><Link href="/#projects" className="hover:text-primary ease-in duration-150" scroll={false}>Projects</Link></li>
            <li><Link href="/#skills" className="hover:text-primary ease-in duration-150" scroll={false}>Skills</Link></li>
          </ul>
        </div>

        {/* desktop resume/theme */}
        <div className="navbar-end md:flex">
          <a href="/static/resume.pdf" className="scale-75 btn hover:text-primary ease-in duration-150" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </header>
  );

  const footer = (
    <footer className="footer items-center py-4 px-8 bg-base-100 text-neutral-content">
      <aside className="items-center grid-flow-col ps-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
        <p>Copyright © 2023 - Designed and Built by <a href="https://jaredvillanueva.com/" className="underline underline-offset-4 ease-in duration-150 decoration-accent hover:text-accent">Jared Villanueva</a></p>
      </aside> 
      <nav className="pe-4 grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://www.linkedin.com/in/cynthiaguzman12?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
          <svg className="h-6 w-6 hover:text-primary ease-in duration-150 " viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
        </a>
        <a href="https://instagram.com/doublefunsized" target="_blank" rel="noopener noreferrer">
          <svg className="h-6 w-6 hover:text-primary ease-in duration-150" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
        </a>
      </nav>
    </footer>
  );
    
  return (
    <html lang="en" data-theme="dracula">
      <div className="flex flex-col min-h-screen mx-auto bg-base-200 ">
        {header}
        {children}
        {footer}
      </div>
    </html>
  );
}
