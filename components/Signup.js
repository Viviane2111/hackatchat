// components/Signup.js
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Modal from "react-modal";
import { X } from "lucide-react";

Modal.setAppElement("#__next");

function Signup({ isOpen, onClose }) { 
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Implement signup
    onClose();
    router.push("/home");
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Sign Up Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="flex flex-col">
        <div className="flex justify-end">
          <button onClick={onClose}>
            <X />
          </button>
        </div>
        <div className="m-auto mb-5">
          <Image src="/hackalogo.png" alt="logo" width={35} height={35} />
        </div>
        <h2 className="text-center mb-5">Create your Hackatweet account</h2>
        <form>
          <div className="flex flex-col gap-5">
            <input
              className="bg-[#111] placeholder:text-[#555555] border w-[40%] mx-auto  pl-3"
              type="text"
              placeholder="Firstname"
              required
            />
            <input
              className="bg-[#111] placeholder:text-[#555555] border w-[40%] mx-auto  pl-3"
              type="text"
              placeholder="Username"
              required
            />
            <input
              className="bg-[#111] placeholder:text-[#555555]  w-[40%] mx-auto  pl-3"
              type="password"
              placeholder="Password"
              required
            />
            <div className="mx-auto text-center bg-white w-[40%] text-black p-1 rounded-full mb-8">
              <button type="button" onClick={handleSubmit}>
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}
export default Signup