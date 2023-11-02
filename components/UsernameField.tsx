"use client";
import React, { SetStateAction, useState } from "react";
import { Input } from "@nextui-org/react";
import { MailIcon } from "./Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
interface Props {
  username: string;
  setUsername: (value: SetStateAction<string>) => void;
}
const UserNameField = ({ username, setUsername }: Props) => {
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

export default UserNameField;
