// header/Header.js

import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/solid';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <p className="hover:text-gray-300">Login</p>
          </Link>
          <div className="text-2xl font-bold flex-none">Your Logo</div>
        </div>
        <div className="flex items-center space-x-4 mx-auto">
          <Link href="/dashboard">
            <p className="hover:text-gray-300">Dashboard</p>
          </Link>
          <Link href="/analytics">
            <p className="hover:text-gray-300">Analytics</p>
          </Link>
          <Link href="/extensions">
            <p className="hover:text-gray-300">Extensions</p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
