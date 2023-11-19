import type { Metadata } from 'next'
import { Inter } from '@next/font/google'
import { Roboto } from '@next/font/google'
import { Raleway } from '@next/font/google'
import Link from 'next/link'
import './globals.css'
import React from 'react';

const inter = Inter({
  subsets:['latin'],
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300'],
})

const raleway = Raleway({
  subsets: ['latin'],
})


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
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-base-100">
              <li><Link href="/#about">Home</Link></li>
              <li><Link href="/#experience">Experience</Link></li>
              <li><Link href="/#projects">Projects</Link></li>
              <li><Link href="/#skills">Skills</Link></li>
          </ul>
        </div>
        <a href="/"className="ps-4 text-xl hover:text-secondary ease-in duration-150">Cynthia Guzman</a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="flex flex-row gap-4 px-1 ">
          <li><Link href="/#about" className="hover:text-secondary ease-in duration-150">Home</Link></li>
          <li><Link href="/#experience" className="hover:text-secondary ease-in duration-150">Experience</Link></li>
          <li><Link href="/#projects" className="hover:text-secondary ease-in duration-150">Projects</Link></li>
          <li><Link href="/#skills" className="hover:text-secondary ease-in duration-150">Skills</Link></li>
        </ul>
      </div>
      <div className="navbar-end md:flex">
        <a href="https://docs.google.com/document/d/e/2PACX-1vSOzNIgoAq0A4Wr7jDqGKfihnPC-2OjfqiAVJLTFxi5-HFeHwFO8NuuabNttTlv9Q/pub" className="hover:text-secondary ease-in duration-150" target="_blank" rel="noopener noreferrer">Resume</a>
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
        {/* <a href="https://instagram.com/doublefunsized" target="_blank" rel="noopener noreferrer">
          <svg className="h-6 w-6 hover:text-secondary ease-in duration-150" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a> */}
      </aside>
    </footer>
  );
    
  return (
    <html lang="en" data-theme="dracula">
      <div className="flex flex-col min-h-screen text-base-content bg-base-300">
        <main className={raleway.className}>
          {header}
          {children}
          {footer}
        </main>
      </div>
    </html>
  );
}
