import { Input, Button } from "@nextui-org/react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import UserCard from "@/components/UserCard";

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <main>
      <div className="h-screen w-screen items-center justify-center flex bg-cover bg-no-repeat bg-[url('https://img.freepik.com/free-photo/pile-3d-play-button-logos_1379-880.jpg?w=1380&t=st=1698775013~exp=1698775613~hmac=3cf1e4be4c648dc5d68267a53e38725d97a2dfb98497e8791b9188e3732b285f')]">
        <div className=" rounded-[16px] bg-slate-800 border border-slate-400 shadow-lg backdrop-blur-sm bg-opacity-30 p-8 mx-auto">
          {session ? (
            <UserCard user={session?.user} pagetype={"Home"} />
          ) : (
            <h1 className="text-5xl">You Shall Not Pass!</h1>
          )}
          <div className="flex items-center justify-center mt-4"></div>
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
