import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 z-10">   
    <nav className="flex items-center justify-between mx-auto max-w-full">   
    <div className="flex items-center space-x-4">         
    <div className="text-2xl font-bold flex-none"><img src="https://imgur.com/a/a3um1Nq"></img></div></div>        
    <div className="flex items-center space-x-4 flex-grow justify-around">
    <Link href="/dashboard"><p className="hover:text-gray-300">Dashboard</p>          
    </Link>          
    <Link href="/analytics"><p className="hover:text-gray-300">Analytics</p>          
    </Link>          
    <Link href="/extensions"><p className="hover:text-gray-300">Extensions</p>          
    </Link></div>        
    <div className="flex items-center space-x-4">          
    <Link href="/login"><p className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">              
    <span>Log in</span></p>          
    </Link></div></nav></header>
  );
};

export default Header;
