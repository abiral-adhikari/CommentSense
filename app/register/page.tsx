"use client";
import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { GithubIcon, GoogleIcon } from "@/components/Icons";
import PasswordField from "@/components/PasswordField";
import EmailField from "@/components/EmailField";
import Link from "next/link";
import {
  handleGithubSignIn,
  handleGoogleSignIn,
} from "@/lib/action/LoginFunctionalities";
import UserNameField from "@/components/UsernameField";
import toast, { Toaster } from "react-hot-toast";

export default function Register() {
  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPasswordError, setIsPasswordError] = useState<boolean>(false);
  const [isEmailError, setIsEmailError] = useState<boolean>(false);
  //TODO: add Error message
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");

  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log({ email, password, confirmPassword });
      const regex = /^(?=.*\d)(?=.*[a-z]).{8,}$/;

      if (!regex.test(password)) {
        setIsPasswordError(true);
        setPasswordErrorMsg(
          "Password must contain at least 8 characters,at least one lowercase letter ,at least one number"
        );
      } else {
        if (password !== confirmPassword) {
          setIsPasswordError(true);
          setPasswordErrorMsg("Passwords do not match");
        } else {
          const response = await fetch("/api/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: username,
              email: email,
              password: password,
            }),
          });
          const userInfo = await response.json();
          if (userInfo.message) {
            console.log(userInfo);
            toast.error(userInfo.message);
          } else {
            toast.success("User registration Completed");
            router.push("/login");
          }
        }
      }
    } catch (error: any) {
      toast.error(error.toString());
      console.log(`Register failed: ${error}`);
    }

    setIsLoading(false);
  };
  return (
    <main>
      <div className="h-screen w-screen items-center justify-center flex bg-cover bg-no-repeat bg-[url('https://img.freepik.com/free-photo/pile-3d-play-button-logos_1379-880.jpg?w=1380&t=st=1698775013~exp=1698775613~hmac=3cf1e4be4c648dc5d68267a53e38725d97a2dfb98497e8791b9188e3732b285f')]">
        <div className=" rounded-[16px] max-w-2xl bg-slate-800 border border-slate-400 shadow-lg backdrop-blur-sm bg-opacity-30 p-8 mx-auto">
          <div className="bg-white rounded-t-lg p-8 ">
            <p className="text-center text-sm text-gray-400 font-bold">
              Sign up with
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
              Or sign up with credentials{" "}
            </p>
            <form className="mt-6" onSubmit={handleRegisterSubmit}>
              <div className="flex flex-col gap-5">
                <UserNameField setUsername={setUsername} username={username} />
                <EmailField
                  isEmailError={isEmailError}
                  email={email}
                  setEmail={setEmail}
                />

                <PasswordField
                  errorMessage={""}
                  isPasswordError={isPasswordError}
                  label="Password"
                  password={password}
                  setPassword={setPassword}
                />

                <PasswordField
                  errorMessage={passwordErrorMsg}
                  isPasswordError={isPasswordError}
                  label="Confirm Password"
                  password={confirmPassword}
                  setPassword={setConfirmPassword}
                />
              </div>

              <div className="flex items-center justify-center mt-8">
                <Button
                  type="submit"
                  radius="full"
                  className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg px-10"
                  isLoading={isLoading}
                >
                  {isLoading ? "Creating Account" : "Create Account"}
                </Button>
              </div>
            </form>
            <hr className="mt-2 w-full h-1 bg-gray-500"></hr>
            <p className="text-center text-sm text-gray-500 font-medium mt-12 ">
              Already have a account?
              <Link
                className="text-blue-800 underline font-bold"
                href={"./login"}
              >
                {"   "}
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
// function Home1() {
//   const [isRightPanelActive, setIsRightPanelActive] = useState(false);

//   const handleSignUpClick = () => {
//     console.log("handleSignUpClick");
//     setIsRightPanelActive(true);
//   };

//   const handleSignInClick = () => {
//     console.log("handleSignInClick");
//     setIsRightPanelActive(false);
//   };
//   return (
//     <main>
//       <div
//         className={`box-border bg-white shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)] relative overflow-hidden w-[768px] max-w-full min-h-[480px] rounded-[10px] ${
//           isRightPanelActive ? "container right-panel-active" : ""
//         }`}
//         id="container"
//       >
//         <div
//           className={`absolute h-full transition-all duration-[0.6s] ease-[ease-in-out] top-0 w-6/12 opacity-0 z-[1] left-0 ${
//             isRightPanelActive
//               ? "translate-x-full opacity-100 z-[5] animate-[show_0.6s]"
//               : ""
//           } `}
//         >
//           <form
//             className=" bg-white flex items-center justify-center flex-col h-full text-center px-[50px] py-0"
//             action="#"
//           >
//             <h1 className="font-bold m-0 text-black">Create Account</h1>
//             <div className="mx-0 my-5">
//               <a
//                 href="#"
//                 className="border inline-flex justify-center items-center h-10 w-10 mx-[5px] my-0 rounded-[50%] border-solid border-[#DDDDDD] "
//               >
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//               <a
//                 href="#"
//                 className="border inline-flex justify-center items-center h-10 w-10 mx-[5px] my-0 rounded-[50%] border-solid border-[#DDDDDD]"
//               >
//                 <i className="fab fa-google-plus-g"></i>
//               </a>
//               <a
//                 href="#"
//                 className="border inline-flex justify-center items-center h-10 w-10 mx-[5px] my-0 rounded-[50%] border-solid border-[#DDDDDD] "
//               >
//                 <i className="fab fa-linkedin-in"></i>
//               </a>
//             </div>
//             <span className="text-xs text-black">
//               or use your email for registration
//             </span>
//             <input
//               className="bg-[#eee] w-full mx-0 my-2 px-[15px] py-3 border-[none]"
//               type="text"
//               placeholder="Name"
//             />
//             <input
//               className="bg-[#eee] w-full mx-0 my-2 px-[15px] py-3 border-[none]"
//               type="email"
//               placeholder="Email"
//             />
//             <input
//               className="bg-[#eee] w-full mx-0 my-2 px-[15px] py-3 border-[none]"
//               type="password"
//               placeholder="Password"
//             />
//             <button className="border bg-[#FF4B2B] text-white text-xs font-[bold] tracking-[1px] uppercase transition-transform duration-[80ms] ease-[ease-in] px-[45px] py-3 rounded-[20px] border-solid border-[#FF4B2B] active:scale-95 focus:outline-none  ">
//               Sign Up
//             </button>
//           </form>
//         </div>
//         <div
//           className={`absolute h-full transition-all duration-[0.6s] ease-[ease-in-out] top-0 w-6/12 z-[2] left-0 ${
//             isRightPanelActive ? "translate-x-full" : ""
//           }`}
//         >
//           <form
//             className="bg-white flex items-center justify-center flex-col h-full text-center px-[50px] py-0"
//             action="#"
//           >
//             <h1 className="font-bold m-0 text-black">Sign in</h1>
//             <div className="mx-0 my-5">
//               <a
//                 href="#"
//                 className="border inline-flex justify-center items-center h-10 w-10 mx-[5px] my-0 rounded-[50%] border-solid border-[#DDDDDD]"
//               >
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//               <a
//                 href="#"
//                 className="border inline-flex justify-center items-center h-10 w-10 mx-[5px] my-0 rounded-[50%] border-solid border-[#DDDDDD]"
//               >
//                 <i className="fab fa-google-plus-g"></i>
//               </a>
//               <a
//                 href="#"
//                 className="border inline-flex justify-center items-center h-10 w-10 mx-[5px] my-0 rounded-[50%] border-solid border-[#DDDDDD]"
//               >
//                 <i className="fab fa-linkedin-in"></i>
//               </a>
//             </div>
//             <span className="text-xs text-black">or use your account</span>
//             <input
//               className="bg-[#eee] w-full mx-0 my-2 px-[15px] py-3 border-[none]"
//               type="email"
//               placeholder="Email"
//             />
//             <input
//               className="bg-[#eee] w-full mx-0 my-2 px-[15px] py-3 border-[none]"
//               type="password"
//               placeholder="Password"
//             />
//             <a href="#">Forgot your password?</a>
//             <button className="border bg-[#FF4B2B] text-white text-xs font-[bold] tracking-[1px] uppercase transition-transform duration-[80ms] ease-[ease-in] px-[45px] py-3 rounded-[20px] border-solid border-[#FF4B2B] active:scale-95 focus:outline-none  ">
//               Sign In
//             </button>
//           </form>
//         </div>

//         <div className={`overlay-container  `}>
//           <div
//             className={`overlay

//             `}
//           >
//             <div className={`overlay-panel overlay-left `}>
//               <h1>Welcome Back!</h1>
//               <p>
//                 To keep connected with us please login with your personal info
//               </p>
//               <button
//                 className="border bg-[#FF4B2B] text-white text-xs font-[bold] tracking-[1px] uppercase transition-transform duration-[80ms] ease-[ease-in] px-[45px] py-3 rounded-[20px] border-solid  active:scale-95 focus: outline-none bg-transparent border-white  "
//                 id="signIn"
//                 onClick={handleSignInClick}
//               >
//                 Sign In
//               </button>
//             </div>
//             <div className={`overlay-panel overlay-right `}>
//               <h1>Hello, Friend!</h1>
//               <p>Enter your personal details and start journey with us</p>
//               <button
//                 className="border bg-[#FF4B2B] text-white text-xs font-[bold] tracking-[1px] uppercase transition-transform duration-[80ms] ease-[ease-in] px-[45px] py-3 rounded-[20px] border-solid  active:scale-95 focus: outline-none bg-transparent border-white  "
//                 id="signUp"
//                 onClick={handleSignUpClick}
//               >
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
