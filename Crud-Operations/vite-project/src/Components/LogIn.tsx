import React, { useState, useRef } from "react";

import Modal from "./Modal";

const LogIn = ({onLogIn}) => {
  const email = useRef();
  const password = useRef();
  const modal = useRef();

  function handleLogin() {
    let enteredEmail = email.current.value;
    let enteredPassword = password.current.value;

    if (enteredEmail.length < 10 || enteredPassword.length < 8) {
      modal.current.open();
    } else {
        onLogIn();
    }

  

    console.log(enteredEmail, enteredPassword);
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-20">
          Invalid Email or Password
        </h2>
        <p className="text-stone-400 mb-4">
          Opps.. looks like you forget to enter the Correct Email or Password.
        </p>
      </Modal>
      <div className="w-screen h-screen bg-[#FEAF00] flex items-center justify-center">
        <div className="card-wrapper bg-white rounded-md p-4">
          <div className="title text-2xl font-bold ">
            CRUD <br />
            OPERATIONS
          </div>

          <div className="sign-in-text text-center mt-2">
            <h2 className="text-xl font-medium ">Sign in</h2>
            <p className="text-xs text-slate-500">
              Enter your credentials to access your account
            </p>
          </div>

          <p className="flex flex-col mx-2 my-4">
            <label htmlFor="">Email</label>
            <input
              className="border-2 p-2 rounded-sm outline-0"
              type="text"
              placeholder="Enter your email"
              ref={email}
            />

            <label htmlFor="">Password</label>
            <input
              className="border-2 p-2 rounded-sm outline-0"
              type="password"
              placeholder="Enter your Password"
              ref={password}
            />

            <button
              className="bg-[#FEAF00] my-4 p-2 rounded-lg text-white"
              onClick={handleLogin}
            >
              Sign in
            </button>

            <p className="text-sm">
              Forget your password ?{" "}
              <a className="underline text-[#FEAF00]" href="">
                Reset Password
              </a>
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default LogIn;
