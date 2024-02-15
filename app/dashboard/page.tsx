import React from 'react';
import Link from 'next/link';

const LoginPage: React.FC = () => {

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    window.location.href = '/dashboard';
  }; 
  return (
    <div className="flex justify-center items-center h-screen">
      <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Dashboard
		En TRAVAUX
          </label>
          
        </div>
        
        <div className="flex items-center justify-between">
          
        </div>
<div className="flex items-center justify-between">
          <Link href="/">
        <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Acceuil
        </p>
      </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
