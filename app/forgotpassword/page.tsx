"use client";
import { useState } from "react";
import { Button, useDisclosure } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { EmailField } from "@/components/TextField";
import {
  IS_SHOW_ERROR_MODAL,
  IS_SHOW_SUCESS_MODAL,
} from "@/lib/store/Reducer/constant";

export default function ForgotPassword() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEmailError, setIsEmailError] = useState<boolean>(false);

  const handleForgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Forgot Password");
    e.preventDefault();
    setIsLoading(true);
    dispatch({
      type: IS_SHOW_ERROR_MODAL,
      payload: {
        isShow: true,
        title: "Error",
        description:
          "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,consequatur ",
      },
    });
  };
  return (
    <main>
      <div className="h-screen items-center justify-center flex  ">
        <div className=" rounded-[16px] bg-slate-800 border border-slate-400 shadow-lg backdrop-blur-sm bg-opacity-30 p-8 mx-auto">
          {" "}
          <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
            <p className="text-center text-sm text-gray-500 font-bold">
              {" "}
              Forgot Password?
            </p>
            <form className="mt-6" onSubmit={handleForgotPassword}>
              <div className="flex flex-col gap-2">
                <EmailField
                  isEmailError={isEmailError}
                  email={email}
                  setEmail={setEmail}
                />
              </div>

              <div className="flex items-center justify-center mt-4">
                <Button
                  type="submit"
                  radius="full"
                  className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg px-10"
                  isLoading={isLoading}
                >
                  {isLoading ? "Reseting password..." : "Reset Password"}
                </Button>
              </div>
            </form>
            <hr className="mt-2 w-full h-1 bg-gray-500"></hr>
            <p className="text-center text-sm text-gray-500 font-medium mt-12 ">
              Remember your password?
              <Link
                className="text-blue-800 pl-1 underline font-bold"
                href={"./login"}
              >
                LogIn here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

// // Component definition
// function MyModal() {
//   const dispatch = useDispatch();
//   // State variables to manage the modal visibility
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Function to toggle modal visibility
//   const toggleModal = () => {
//     console.log("Toggle modal visibility");
//     dispatch({
//       type: IS_SHOW_SUCESS_MODAL,
//       payload: {
//         isShow: true,
//         title: "Sucess",
//         description:
//           "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,consequatur ",
//       },
//     });
//     setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <>
//       <div className="w-full min-h-screen flex justify-center items-center bg-black">
//         <p
//           id="modal-switch"
//           onClick={toggleModal}
//           className="text-[10vw] bg-gradient-to-r from-indigo-500 via-purple-500 text-transparent bg-clip-text to-pink-500 font-bold cursor-pointer"
//         >
//           Click Me
//         </p>
//       </div>

//       <SucessModal />
//     </>
//   );
// }
