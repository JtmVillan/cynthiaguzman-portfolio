// import type { Metadata } from 'next'
import { Inter } from '@next/font/google'
import { Roboto } from '@next/font/google'
import { Raleway } from '@next/font/google'
import { Ruda } from '@next/font/google'
import './globals.css'
import React from 'react';
import { Header } from './components/header'
import { Footer } from './components/footer'
import type { Metadata } from 'next'

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

const ruda = Ruda({
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
    <html lang="en" data-theme="mytheme">
      <head>
        <meta charSet="utf-8" />
        <title>Cynthia Guzman</title>
        <meta
          name="description"
          content="Mechanical Engineer Portfolio"/>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="apple-touch-icon" sizes="180x180" href="/public/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/public/images/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/public/images/favicon-16x16.png" />
      </head>
      <body className="flex flex-col min-h-screen bg-neutral">
        <main className={ruda.className}>
          <Header/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
