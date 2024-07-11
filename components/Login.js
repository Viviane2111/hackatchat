//  components/Login.js - page d'accueil
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Signup from "./Signup";
import Signin from "./Signin";

function Login() {
  // Modals controls
  const [isSignupModalVisible, setIsSignupModalVisible] = useState(false);
  const [isSigninModalVisible, setIsSigninModalVisible] = useState(false);
  const showSignupModal = () => {
    setIsSignupModalVisible(true);
  };
  const closeSignupModal = () => {
    setIsSignupModalVisible(false);
  };
  const showSigninModal = () => {
    setIsSigninModalVisible(true);
  };
  const closeSigninModal = () => {
    setIsSigninModalVisible(false);
  };

  return (
    <div>
      <main className="custom-ubuntu-font flex flex-row min-h-screen bg-black text-white">
        <div className="leftside flex h-[100vh] bg-[url('/hackatweet.png')] w-2/5">
          <div className="m-auto">
            <Image src="/hackalogo.png" alt="logo" width={250} height={250} />
          </div>
        </div>

        <div className="rightside flex flex-col justify-center items-center w-3/5">
          <div className="mb-10">
            <Link href="/home">
              <Image src="/hackalogo.png" alt="logo" width={60} height={60} />
            </Link>
          </div>
          <h1 className="text-6xl md:text-6xl lg:text-7xl leading-normal">
            See what's <br />
            happening
          </h1>
          <p className="mt-10 text-2xl tracking-widest font-bold">
            Join Hacktweet today.
          </p>
          <div className="flex flex-col mt-2">
            <div>
              <button
                onClick={showSignupModal}
                type="button"
                className="bg-sky-500 hover:bg-sky-700 text-white font-medium py-1 rounded-full mt-5 mb-5 w-40"
              >
                Sign up
              </button>

              {isSignupModalVisible && (
                <Signup
                  isOpen={isSignupModalVisible}
                  onClose={closeSignupModal}
                />
              )}
            </div>
            <span>Already have an account ?</span>
            <div>
              <button
                onClick={showSigninModal}
                type="button"
                className="bg-transparent border hover:bg-gray-800 hover:text-sky-400 text-sky-700 font-medium py-1 rounded-full mt-5 mb-5 w-40"
              >
                Log in
              </button>
              {isSigninModalVisible && (
                <Signin
                  isOpen={isSigninModalVisible}
                  onClose={closeSigninModal}
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Login;
