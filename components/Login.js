//  components/Login.js
import Image from "next/image";
import React from "react";
import Modal from "react-modal";
import { X } from "lucide-react";

Modal.setAppElement("#__next");

function Login({ isOpen, onClose }) {

  function handleSubmit(e) {
    e.preventDefault();
    onClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Log in Modal"
      className={"modal"}
      overlayClassName={"overlay"}
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
        <h2 className="text-center mb-5">Connect to Hackatweet</h2>
      </div>
      <form>
        <div className="flex flex-col gap-5">
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
          <div className="mx-auto text-center bg-white w-[40%] p-1 hover:font-semibold text-black rounded-full mb-8">
            <button type="button" onClick={handleSubmit}>
              Sign up
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
export default Login