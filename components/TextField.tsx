"use client";
import React, { SetStateAction, useState } from "react";
import { Input } from "@nextui-org/react";
import { MailIcon, PasswordIcon } from "./Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faUser } from "@fortawesome/free-solid-svg-icons";
interface UserNameProps {
  username: string;
  setUsername: (value: SetStateAction<string>) => void;
}
export const UserNameField = ({ username, setUsername }: UserNameProps) => {
  const [isValid, setIsValid] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  return (
    <Input
      isRequired
      type="text"
      label="Name"
      value={username}
      variant="bordered"
      placeholder="Eemayas"
      onChange={handleChange}
      labelPlacement="outside"
      // className="border-1 border-black"
      startContent={
        <FontAwesomeIcon
          icon={faUser}
          className="text-xl  text-default-600 pointer-events-none flex-shrink-0"
        />
      }
    />
  );
};

interface EmailProps {
  email: string;
  isEmailError: boolean;
  setEmail: (value: SetStateAction<string>) => void;
}
export const EmailField = ({ email, setEmail, isEmailError }: EmailProps) => {
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

interface PasswordProps {
  password: string;
  label: string;
  errorMessage: string;
  isPasswordError: boolean;
  setPassword: (value: SetStateAction<string>) => void;
}
export const PasswordField = ({
  password,
  label,
  setPassword,
  errorMessage,
  isPasswordError,
}: PasswordProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <Input
      isRequired
      variant="bordered"
      type={visible ? "text" : "password"}
      label={label}
      placeholder="*******"
      errorMessage={isPasswordError ? errorMessage : ""}
      labelPlacement="outside"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      startContent={
        <PasswordIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
      }
      endContent={
        <FontAwesomeIcon
          className="cursor-auto text-l "
          onClick={() => setVisible(!visible)}
          icon={visible ? faEye : faEyeSlash}
        />
      }
    />
  );
};
