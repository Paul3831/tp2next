// components/MainComponent.js

import React from 'react';
import Link from 'next/link';

const MainComponent = () => {
  return (
    <div className="mt-4">

      <Link href="/upcoming-patient">
        <p className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-44   ">
          Upcoming Patient
        </p>
      </Link>

    </div>
  );
};

export default MainComponent;
