"use client";
import { SetStateAction, useState } from "react";
import { Input } from "@nextui-org/react";
import { PasswordIcon } from "@/components/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
interface Props {
  password: string;
  label: string;
  errorMessage: string;
  isPasswordError: boolean;
  setPassword: (value: SetStateAction<string>) => void;
}
const PasswordField = ({
  password,
  label,
  setPassword,
  errorMessage,
  isPasswordError,
}: Props) => {
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

export default PasswordField;
