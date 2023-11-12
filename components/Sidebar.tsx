"use client";
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";

type Props = {
  styles: string;
  name: string;
  imgUrl: string;
  isActive: string;
  disabled: boolean;
  handleClick: () => void;
};
const Icon = ({
  styles,
  name,
  imgUrl,
  isActive,
  disabled,
  handleClick,
}: Props) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] ${
      isActive && isActive === name && "bg-[#2c2f32]"
    } flex justify-center items-center ${
      !disabled && "cursor-pointer"
    } ${styles}`}
    onClick={handleClick}
  >
    {!isActive ? (
      <Image
        className={`w-1/2 h-1/2 `}
        src={imgUrl}
        alt="fund_logo"
        width={25}
        height={25}
      />
    ) : (
      <Image
        className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
        src={imgUrl}
        alt="fund_logo"
        width={25}
        height={25}
      />
    )}
  </div>
);

const Sidebar = () => {
  const [isActive, setIsActive] = useState("dashboard");

  return (
    // flex justify-between items-center flex-col
    <div className="sticky top-5 h-[93vh] -left-3 w-16">
      <Link href={"./"}>
        <Icon
          styles="w-[52px] h-[52px] bg-[#2c2f32]"
          imgUrl={"assets/icons/logo copy.svg"}
          name={isActive}
          isActive={isActive}
          disabled={true}
          handleClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          <Icon
            styles="bg-[#1c1c24] shadow-secondary"
            imgUrl={"assets/icons/logo copy.svg"}
            name={""}
            isActive={""}
            disabled={false}
            handleClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Icon
            styles="bg-[#1c1c24] shadow-secondary"
            imgUrl={"assets/icons/logo copy.svg"}
            name={""}
            isActive={""}
            disabled={false}
            handleClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Icon
            styles="bg-[#1c1c24] shadow-secondary"
            imgUrl={"assets/icons/logo copy.svg"}
            name={""}
            isActive={""}
            disabled={false}
            handleClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>

        <Icon
          styles="bg-[#1c1c24] shadow-secondary"
          imgUrl={"assets/icons/logo copy.svg"}
          name={""}
          isActive={""}
          disabled={false}
          handleClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
