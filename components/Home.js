// components/Home.js
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";


export default function Home() {
  const router = useRouter();
  
  return (
    <div>
      <main className="custom-ubuntu-font flex flex-row min-h-screen bg-[#0e141b] text-white">
        <div className="leftSection w-1/4 border-r">
        </div>
        <div className="middleSection w-2/4"></div>
        <div className="rightSection w-1/4 border-l"></div>
      </main>
    </div>
  );
}
