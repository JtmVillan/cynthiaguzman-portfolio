import type { Metadata } from 'next'
import { Inter } from '@next/font/google'
import { Roboto } from '@next/font/google'
import { Raleway } from '@next/font/google'
// import localFont from '@next/font/local'
import Link from 'next/link'
import './globals.css'
import React from 'react';

const inter = Inter({
  subsets:['latin'],
  // variable: '--font-inter',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300'],
})

const raleway = Raleway({
  subsets: ['latin'],
})

// const myFont = localFont({ src: ''})

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
      <header className="navbar sticky py-4 px-8 top-0 z-50 bg-opacity-95 bg-base-100 font-extrabold">
        {/* Mobile nav */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-base-100">
                {/* <li><Link href="/#home" scroll={false}>Home</Link></li> */}
                <li><Link href="/#about" scroll={false}>Home</Link></li>
                <li><Link href="/#experience" scroll={false}>Experience</Link></li>
                <li><Link href="/#projects" scroll={false}>Projects</Link></li>
                <li><Link href="/#skills" scroll={false}>Skills</Link></li>
            </ul>
          </div>
          <a href="/"className="ps-4 text-xl hover:text-secondary ease-in duration-150">Cynthia Guzman</a>
        </div>

        {/* desktop nav */}
        <div className="navbar-center hidden md:flex">
          <ul className="flex flex-row gap-4 px-1 ">
            {/* <li><Link href="/#home" className="hover:text-secondary ease-in duration-150" scroll={false}>Home</Link></li> */}
            <li><Link href="/#about" className="hover:text-secondary ease-in duration-150" scroll={false}>Home</Link></li>
            <li><Link href="/#experience" className="hover:text-secondary ease-in duration-150" scroll={false}>Experience</Link></li>
            <li><Link href="/#projects" className="hover:text-secondary ease-in duration-150" scroll={false}>Projects</Link></li>
            <li><Link href="/#skills" className="hover:text-secondary ease-in duration-150" scroll={false}>Skills</Link></li>
          </ul>
        </div>

        {/* desktop resume/theme */}
        <div className="navbar-end md:flex">
          <a href="/static/resume.pdf" className="hover:text-secondary ease-in duration-150" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </header>
  );

  const footer = (
    <footer className="footer flex flex-row justify-between py-4 px-8 bg-neutral text-neutral-content">
      <aside className="flex flex-row">
        <p>
          © 2023 
            <a href="https://jaredvillanueva.com/" className="ease-in duration-150 decoration-secondary hover:text-secondary" target="_blank" rel="noopener noreferrer"> Jared Villanueva</a>
        </p>
      </aside>
      <aside className="flex flex-row">
        <a href="https://www.linkedin.com/in/cynthiaguzman12?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
          <svg className="h-6 w-6 hover:text-secondary ease-in duration-150 " viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="https://instagram.com/doublefunsized" target="_blank" rel="noopener noreferrer">
          <svg className="h-6 w-6 hover:text-secondary ease-in duration-150" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
      </aside>
    </footer>
  );
    
  return (
    <html lang="en" data-theme="dark">
      <div className="flex flex-col min-h-screen text-base-content">
        {/* <main className={'${inter.variable} font-sans'}> */}
        <main className={raleway.className}>
          {header}
          {children}
          {footer}
        </main>
      </div>
    </html>
  );
}
