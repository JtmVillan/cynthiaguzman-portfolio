import type { Metadata } from 'next'
import { Inter } from '@next/font/google'
import { Roboto } from '@next/font/google'
import { Raleway } from '@next/font/google'
import './globals.css'
import React from 'react';
import { Header } from './components/header'
import { Footer } from './components/footer'

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

  return (
    <html lang="en" data-theme="nord">
      <div className="flex flex-col min-h-screen text-base-content bg-base-300">
        <main className={raleway.className}>
          <Header/>
          {children}
          <Footer/>
        </main>
      </div>
    </html>
  );
}
