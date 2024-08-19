// import type { Metadata } from 'next'

import './globals.css'
import React from 'react';
import { Header } from './components/header'
import { HeaderNew } from './components/headerNew';
import { Footer } from './components/footer'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { Inter } from '@next/font/google'
import { Roboto } from '@next/font/google'
import { Raleway } from '@next/font/google'
import { Ruda } from '@next/font/google'
import { Noto_Sans } from '@next/font/google'
import { Ubuntu } from '@next/font/google'
import { Dosis } from '@next/font/google'

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

const noto_sans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400'],
})


const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400'],
})

const dosis = Dosis({
  subsets: ['latin'],
  weight: ['400'],
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
    <html lang="en" data-theme="autumn">
      <head>
        <meta charSet="utf-8" />
        <title>Cynthia Guzman</title>
        <meta
          name="description"
          content="Mechanical Engineer Portfolio"/>
      </head>
      <body className="flex flex-col min-h-screen bg-base-100">
        <main className={dosis.className}>
          <HeaderNew/>
          {children}
          <Analytics />
          <Footer/>
        </main>
      </body>
    </html>
  );
}
