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
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
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
          <a href="/"className="btn btn-ghost text-xl">Cynthia Guzman</a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/#home" scroll={false}>Home</Link></li>
            <li><Link href="/#about" scroll={false}>About Me</Link></li>
            <li><Link href="/#experience" scroll={false}>Experience</Link></li>
            <li><Link href="/#projects" scroll={false}>Projects</Link></li>
            <li><Link href="/#skills" scroll={false}>Skills</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
        <div className="dropdown">
          <label tabIndex={0} className="btn m-1">
          Theme
          <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
          </label>
          <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="default"/></li>
            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Light" value="light"/></li>
            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="dark"/></li>
            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cupcake" value="cupcake"/></li>
            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Emerald" value="emerald"/></li>
            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Corporate" value="corporate"/></li>
            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine"/></li>
            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Forest" value="forest"/></li>
            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Fantasy" value="fantasy"/></li>
            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Luxury" value="luxury"/></li>
            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dracula" value="dracula"/></li>
            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Autumn" value="autumn"/></li>
            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Night" value="night"/></li>
            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Winter" value="winter"/></li>
            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dim" value="dim"/></li>
            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Sunset" value="sunset"/></li>
          </ul>
        </div>
          <a href="/static/resume.pdf" className="btn" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </div>
  );

  const footer = (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
        <p>Copyright © 2023 - Designed and Built by <a href="https://jaredvillanueva.com/" className="link link-hover">Jared Villanueva</a></p>
      </aside> 
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        {/* TODO: UPDATE SOCIALS */}
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
        </a>
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
      </nav>
    </footer>
  );
    
  return (
    <html lang="en" data-theme="light">
      <div className="mx-auto bg-base-200 ">
        {header}
        {children}
        {footer}
      </div>
    </html>
  );
}
