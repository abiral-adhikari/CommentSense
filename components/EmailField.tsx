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
  return (
    <Input
      isRequired
      type="email"
      label="Email"
      value={email}
      errorMessage={isEmailError ? "Please enter a valid email" : ""}
      variant="bordered"
      placeholder="you@example.com"
      onChange={(e) => setEmail(e.target.value)}
      isInvalid={false}
      labelPlacement="outside"
      // className="border-1 border-black"
      startContent={
        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
      }
    />
  );
};

export default EmailField;
