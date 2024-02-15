import React from 'react';
import Image from 'next/image';
export default function Logo() {
  return (

  <div><Image
  src="/logo2.jpg"
  width={200}
  height={200}
  alt="Logo"
  /></div>
    );
}
