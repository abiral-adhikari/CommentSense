"use client";
import { useState, MouseEvent } from "react";
import { Button, useDisclosure } from "@nextui-org/react";
import { GithubIcon, GoogleIcon } from "@/components/Icons";
import PasswordField from "@/components/PasswordField";
import EmailField from "@/components/EmailField";
import Link from "next/link";
import {
  handleGithubSignIn,
  handleGoogleSignIn,
} from "../../lib/action/LoginFunctionalities";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPasswordError, setIsPasswordError] = useState<boolean>(false);
  const [isEmailError, setIsEmailError] = useState<boolean>(false);
  //TODO: add Error message
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");

  const router = useRouter();
  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    onOpen();
    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (response?.ok) {
        router.push("./");
        toast.success("Login Successful");
      } else {
        toast.error("login failed");
      }
    } catch (error) {
      console.error(`LoginError:${error}`);
    }
    console.log({ email, password });
    setIsLoading(false);
  };

  return (
    <main>
      <div className="h-screen w-screen items-center justify-center flex bg-cover bg-no-repeat bg-[url('https://img.freepik.com/free-photo/pile-3d-play-button-logos_1379-880.jpg?w=1380&t=st=1698775013~exp=1698775613~hmac=3cf1e4be4c648dc5d68267a53e38725d97a2dfb98497e8791b9188e3732b285f')]">
        <div className=" rounded-[16px] bg-slate-800 border border-slate-400 shadow-lg backdrop-blur-sm bg-opacity-30 p-8 mx-auto">
          <div className="bg-white rounded-t-lg p-8 ">
            <p className="text-center text-sm text-gray-400 font-bold">
              Sign in with
            </p>
            <div>
              <div className="flex items-center justify-center space-x-4 mt-3">
                <button
                  onClick={handleGithubSignIn}
                  className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-black border-b border-b-black hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                >
                  <GithubIcon className="w-6 h-6 mr-3" />
                  Github
                </button>
                <button
                  onClick={handleGoogleSignIn}
                  className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-black border-b border-b-black hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                >
                  <GoogleIcon className="w-6 h-6 mr-3" />
                  Google
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
            <p className="text-center text-sm text-gray-500 font-bold">
              {" "}
              Or sign in with credentials{" "}
            </p>
            <form className="mt-6" onSubmit={handleLoginSubmit}>
              <div className="flex flex-col gap-5">
                <EmailField
                  isEmailError={isEmailError}
                  email={email}
                  setEmail={setEmail}
                />
                <div className="flex flex-col">
                  <PasswordField
                    errorMessage={passwordErrorMsg}
                    isPasswordError={isPasswordError}
                    label="Password"
                    password={password}
                    setPassword={setPassword}
                  />

                  <Link
                    className="mb-0  text-blue-800 underline font-bold text-end text-sm  "
                    href={"./register"}
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-center mt-4">
                <Button
                  type="submit"
                  // onClick={() => setIsLoading(!isLoading)}
                  radius="full"
                  className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg px-10"
                  isLoading={isLoading}
                >
                  {isLoading ? "Loging..." : "Login"}
                </Button>
              </div>
            </form>
            <hr className="mt-2 w-full h-1 bg-gray-500"></hr>
            <p className="text-center text-sm text-gray-500 font-medium mt-12 ">
              Don't have a account?
              <Link
                className="text-blue-800 underline font-bold"
                href={"./register"}
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
