"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({ children }) {
  const [activeTab, setActiveTab] = useState('Home');
  const router = useRouter();

  useEffect(() => {
    const path = router.pathname;
    if (path === '/') setActiveTab('Home');
    else if (path === '/farmer') setActiveTab('Farmer');
    else if (path === '/collector') setActiveTab('Collector');
  }, [router.pathname]);

  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header activeTab={activeTab} />
        <div className='app-wrapper'>
          <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
          <main className='content'>{children}</main>
        </div>
      </body>
    </html>
  );
}