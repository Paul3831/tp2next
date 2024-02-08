import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="flex items-center p-x-10 text-white justify-between">
      <div className='logo'>Logo</div>
      <div className='flex items-center gap-4'>
        <Link href="/dashboard">Dashbord</Link>
        <Link href="/analytics">Analytics</Link>
        <Link href="/extensions">Extenssion</Link>
      </div>
      <Link href="/login"><p className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
        <span>Log in</span></p>
      </Link>
    </header>
  )
};

export default Header;
