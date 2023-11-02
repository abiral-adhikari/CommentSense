"use client";
import React, { SetStateAction, useState } from "react";
import { Input } from "@nextui-org/react";
import { MailIcon } from "./Icons";
interface Props {
  email: string;
  isEmailError: boolean;
  setEmail: (value: SetStateAction<string>) => void;
}
const EmailField = ({ email, setEmail, isEmailError }: Props) => {
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValid(validateEmail(inputEmail));
  };
  return (
    <Input
      isRequired
      type="email"
      label="Email"
      value={email}
      errorMessage={
        isValid || isEmailError || !email ? "" : "Please enter a valid email"
      }
      variant="bordered"
      placeholder="you@example.com"
      onChange={handleChange}
      labelPlacement="outside"
      // className="border-1 border-black"
      startContent={
        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
      }
    />
  );
};

export default EmailField;
