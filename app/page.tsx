"use client";
import Image from "next/image";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import "./style.css";
import { MailIcon, PasswordIcon } from "@/components/Icons";
import Link from "next/link";

export default function Home() {
  // const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  // const handleSignUpClick = () => {
  //   console.log("handleSignUpClick");
  //   setIsRightPanelActive(true);
  // };

  // const handleSignInClick = () => {
  //   console.log("handleSignInClick");
  //   setIsRightPanelActive(false);
  // };
  return (
    <>
      <div
        className=" 
      h-[100vh] flex flex-col gap-5 justify-center items-center bg-cover
      "
      >
        <Input
          // color="primary"
          type="email"
          label="Email"
          placeholder="you@example.com"
          labelPlacement="outside"
          startContent={
            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        <Input
          type="password"
          label="Password"
          placeholder="*******"
          labelPlacement="outside"
          startContent={
            <PasswordIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        <span>Forgot Password?</span>
        <div>
          <span>
            New Here?<Link href={"./"}> Create an Account</Link>
          </span>
        </div>
      </div>

      <div className="bg-gray-800 rounded-[16px]">
        <div className="p-8 mx-auto">
          <div className="bg-white rounded-t-lg p-8">
            <p className="text-center text-sm text-gray-800 font-medium">
              Sign up with
            </p>
            <div className="flex flex-col gap-4">
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input
          type="email"
          label="Email"
          placeholder="you@example.com"
          labelPlacement="outside"
          startContent={
            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        <Input
          type="number"
          label="Price"
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
        />
        <Input
          type="url"
          label="Website"
          placeholder="nextui.org"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">https://</span>
            </div>
          }
        />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input
          type="email"
          label="Email"
          placeholder="you@example.com"
          labelPlacement="outside"
          endContent={
            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        <Input
          type="number"
          label="Price"
          placeholder="0.00"
          labelPlacement="outside"
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
        />
        <Input
          type="url"
          label="Website"
          placeholder="nextui"
          labelPlacement="outside"
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">.org/</span>
            </div>
          }
        />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input
          label="Email"
          placeholder="nextui"
          labelPlacement="outside"
          startContent={
            <MailIcon className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">@gmail.com</span>
            </div>
          }
        />
        <Input
          label="Price"
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
          endContent={
            <div className="flex items-center">
              <label className="sr-only" htmlFor="currency">
                Currency
              </label>
              <select
                className="outline-none border-0 bg-transparent text-default-400 text-small"
                id="currency"
                name="currency"
              >
                <option>USD</option>
                <option>ARS</option>
                <option>EUR</option>
              </select>
            </div>
          }
          type="number"
        />
        <Input
          type="url"
          label="Website"
          placeholder="nextui"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">https://</span>
            </div>
          }
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">.org</span>
            </div>
          }
        />
      </div>
    </div>  
            </div>
          </div>
          <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
            <p className="text-center text-sm text-gray-900 font-medium">
              {" "}
              Or sign up with credentials{" "}
            </p>
            <form className="mt-6">
              <div className="relative">
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Email"
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 ml-3 text-gray-400 p-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
              </div>
              <div className="relative mt-3">
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Email"
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 ml-3 text-gray-400 p-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
              <div className="relative mt-3">
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Password"
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 ml-3 text-gray-400 p-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-center mt-8">
                {" "}
                <button className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  {" "}
                  Create Account{" "}
                </button>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
function Home1() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    console.log("handleSignUpClick");
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    console.log("handleSignInClick");
    setIsRightPanelActive(false);
  };
  return (
    <main>
      <div
        className={`box-border bg-white shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)] relative overflow-hidden w-[768px] max-w-full min-h-[480px] rounded-[10px] ${
          isRightPanelActive ? "container right-panel-active" : ""
        }`}
        id="container"
      >
        <div
          className={`absolute h-full transition-all duration-[0.6s] ease-[ease-in-out] top-0 w-6/12 opacity-0 z-[1] left-0 ${
            isRightPanelActive
              ? "translate-x-full opacity-100 z-[5] animate-[show_0.6s]"
              : ""
          } `}
        >
          <form
            className=" bg-white flex items-center justify-center flex-col h-full text-center px-[50px] py-0"
            action="#"
          >
            <h1 className="font-bold m-0 text-black">Create Account</h1>
            <div className="mx-0 my-5">
              <a
                href="#"
                className="border inline-flex justify-center items-center h-10 w-10 mx-[5px] my-0 rounded-[50%] border-solid border-[#DDDDDD] "
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="border inline-flex justify-center items-center h-10 w-10 mx-[5px] my-0 rounded-[50%] border-solid border-[#DDDDDD]"
              >
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a
                href="#"
                className="border inline-flex justify-center items-center h-10 w-10 mx-[5px] my-0 rounded-[50%] border-solid border-[#DDDDDD] "
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="text-xs text-black">
              or use your email for registration
            </span>
            <input
              className="bg-[#eee] w-full mx-0 my-2 px-[15px] py-3 border-[none]"
              type="text"
              placeholder="Name"
            />
            <input
              className="bg-[#eee] w-full mx-0 my-2 px-[15px] py-3 border-[none]"
              type="email"
              placeholder="Email"
            />
            <input
              className="bg-[#eee] w-full mx-0 my-2 px-[15px] py-3 border-[none]"
              type="password"
              placeholder="Password"
            />
            <button className="border bg-[#FF4B2B] text-white text-xs font-[bold] tracking-[1px] uppercase transition-transform duration-[80ms] ease-[ease-in] px-[45px] py-3 rounded-[20px] border-solid border-[#FF4B2B] active:scale-95 focus:outline-none  ">
              Sign Up
            </button>
          </form>
        </div>
        <div
          className={`absolute h-full transition-all duration-[0.6s] ease-[ease-in-out] top-0 w-6/12 z-[2] left-0 ${
            isRightPanelActive ? "translate-x-full" : ""
          }`}
        >
          <form
            className="bg-white flex items-center justify-center flex-col h-full text-center px-[50px] py-0"
            action="#"
          >
            <h1 className="font-bold m-0 text-black">Sign in</h1>
            <div className="mx-0 my-5">
              <a
                href="#"
                className="border inline-flex justify-center items-center h-10 w-10 mx-[5px] my-0 rounded-[50%] border-solid border-[#DDDDDD]"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="border inline-flex justify-center items-center h-10 w-10 mx-[5px] my-0 rounded-[50%] border-solid border-[#DDDDDD]"
              >
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a
                href="#"
                className="border inline-flex justify-center items-center h-10 w-10 mx-[5px] my-0 rounded-[50%] border-solid border-[#DDDDDD]"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="text-xs text-black">or use your account</span>
            <input
              className="bg-[#eee] w-full mx-0 my-2 px-[15px] py-3 border-[none]"
              type="email"
              placeholder="Email"
            />
            <input
              className="bg-[#eee] w-full mx-0 my-2 px-[15px] py-3 border-[none]"
              type="password"
              placeholder="Password"
            />
            <a href="#">Forgot your password?</a>
            <button className="border bg-[#FF4B2B] text-white text-xs font-[bold] tracking-[1px] uppercase transition-transform duration-[80ms] ease-[ease-in] px-[45px] py-3 rounded-[20px] border-solid border-[#FF4B2B] active:scale-95 focus:outline-none  ">
              Sign In
            </button>
          </form>
        </div>

        <div className={`overlay-container  `}>
          <div
            className={`overlay 
           
            `}
          >
            <div className={`overlay-panel overlay-left `}>
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="border bg-[#FF4B2B] text-white text-xs font-[bold] tracking-[1px] uppercase transition-transform duration-[80ms] ease-[ease-in] px-[45px] py-3 rounded-[20px] border-solid  active:scale-95 focus: outline-none bg-transparent border-white  "
                id="signIn"
                onClick={handleSignInClick}
              >
                Sign In
              </button>
            </div>
            <div className={`overlay-panel overlay-right `}>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="border bg-[#FF4B2B] text-white text-xs font-[bold] tracking-[1px] uppercase transition-transform duration-[80ms] ease-[ease-in] px-[45px] py-3 rounded-[20px] border-solid  active:scale-95 focus: outline-none bg-transparent border-white  "
                id="signUp"
                onClick={handleSignUpClick}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        {/* <div
          className={`overlay-container ${
            isRightPanelActive ? "-translate-x-full" : ""
          } `}
        >
          <div
            className={`overlay 
            ${isRightPanelActive ? "translate-x-2/4" : ""}
            `}
          >
            <div
              className={`overlay-panel overlay-left ${
                isRightPanelActive ? "translate-x-0" : ""
              }`}
            >
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div
              className={`overlay-panel overlay-right ${
                isRightPanelActive ? " translate-x-[20%]" : ""
              }`}
            >
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div> */}

        {/* <div
          className={`absolute w-6/12 h-full overflow-hidden transition-transform duration-[0.6s] ease-[ease-in-out] z-[100] left-2/4 top-0 ${
            isRightPanelActive ? "-translate-x-full" : ""
          }`}
        >
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="font-bold m-0">Welcome Back!</h1>
              <p
                className="text-sm font-thin leading-5 tracking-[0.5px] mt-5 mb-[30px] mx-0;
"
              >
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="font-bold m-0">Hello, Friend!</h1>
              <p
                className="text-sm font-thin leading-5 tracking-[0.5px] mt-5 mb-[30px] mx-0;
"
              >
                Enter your personal details and start journey with us
              </p>
              <button className="ghost" id="signUp" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
}
