// components/Home.js
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";


export default function Home() {
  const router = useRouter();
  function handleLogout() {
    router.push("/");
  }

  return (
    <div>
      <main className="custom-ubuntu-font flex flex-row min-h-screen bg-[#0e141b] text-white">
        <div className="leftSection w-1/4 flex flex-col justify-between ml-5 mb-5">
          <div className="">
            <Image
              src="/hackalogo.png"
              alt="logo"
              width={35}
              height={35}
              className="mt-5"
              onClick={handleLogout}
            />
          </div>
          <div>
            <div className="flex">
              <Image
                src="/avatar.png"
                alt="avatar"
                width={50}
                height={50}
                className=""
              />
              <div className="flex flex-col ml-5">
                <p className="text-center">Your name</p>
                <p className="text-center">@yourname</p>
              </div>
            </div>
            <div className="">
              <button onClick={handleLogout} className="bg-transparent border hover:bg-gray-800 hover:text-sky-400 text-sky-700 font-medium py-1 rounded-full mt-7  w-24 text-sm">
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="middleSection w-2/4 ml-5">
          <h2 className="">Home</h2>
        </div>
        <div className="rightSection w-1/4 ml-5 ">
          <h2 className="mt-5">Trends</h2>
        </div>
      </main>
    </div>
  );
}
