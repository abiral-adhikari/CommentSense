"use client";
import React, { useState, useRef } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
} from "@nextui-org/react";
import "./style.css";
import Image from "next/image";
import { EditIcon } from "@/components/Icons";
const UserProfile = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [base64Image, setBase64Image] = useState("");
  const [userDetails, setUserDetails] = useState({
    image: "",
    firstname: "",
    surname: "",
    emailAddress: "",
    phoneNumber: "",
    address: "",
    country: "",
    education: "",
  });

  const imagePickerRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsLoading(true);
    console.log(userDetails);
    setIsLoading(false);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // The result will be a base64-encoded string
        const base64String = reader.result as string;
        // setBase64Image(base64String);
        setIsDisabled(false);
        setUserDetails((prevDetails) => ({
          ...prevDetails,
          image: base64String,
        }));
      };

      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardBody>
          <div className=" flex flex-col md:flex-row">
            <div className=" md:border-b-0 border-b-1 md:border-r-1">
              <div className="flex flex-col items-center justify-center text-center p-3 py-5 ">
                <div
                  className="relative w-64 h-64 "
                  onClick={() => {
                    imagePickerRef.current?.click();
                  }}
                >
                  <input
                    type="file"
                    ref={imagePickerRef}
                    hidden
                    onChange={handleImageUpload}
                  />
                  {userDetails.image && (
                    <Image
                      src={userDetails.image}
                      alt="Uploaded Image"
                      width={200}
                      height={200}
                      className="w-52 h-52 rounded-full absolute object-cover mt-2 filter hover:grayscale transition-all duration-150 cursor-not-allowed "
                      onClick={() => {
                        setIsDisabled(false);
                        setUserDetails((prevDetails) => ({
                          ...prevDetails,
                          image: "",
                        }));
                      }}
                    />
                  )}
                  {!userDetails.image && (
                    <img
                      className="w-52 h-52 rounded-full absolute"
                      src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                    />
                  )}
                  <div className="w-52 h-52 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                    <img
                      className="hidden group-hover:block w-12"
                      src="https://www.svgrepo.com/show/33565/upload.svg"
                      alt=""
                    />
                  </div>
                </div>

                <span className="font-bold">{userDetails.firstname}</span>
                <span className="text-black">{userDetails.emailAddress}</span>
                <span> </span>
              </div>
            </div>
            <div className=" md:border-b-0 border-b-1 md:border-r-1 p-3 py-5 space-y-5">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-right font-bold">Profile Settings</h4>
              </div>
              <div className="flex flex-row mt-2 space-x-5">
                <Input
                  type="text"
                  label="Name"
                  labelPlacement={"outside"}
                  placeholder="FirstName"
                  onChange={(e: { target: { value: any } }) => {
                    setIsDisabled(false);
                    setUserDetails((prevDetails) => ({
                      ...prevDetails,
                      firstname: e.target.value,
                    }));
                  }}
                  value={userDetails.firstname}
                />

                <Input
                  type="text"
                  label="Surname"
                  labelPlacement={"outside"}
                  placeholder="Surname"
                  onChange={(e: { target: { value: any } }) => {
                    setIsDisabled(false);
                    setUserDetails((prevDetails) => ({
                      ...prevDetails,
                      surname: e.target.value,
                    }));
                  }}
                  value={userDetails.surname}
                />
              </div>
              <Input
                type="email"
                label="Email Address"
                labelPlacement={"outside"}
                placeholder="Banepa,Kavre"
                onChange={(e: { target: { value: any } }) => {
                  setIsDisabled(false);
                  setUserDetails((prevDetails) => ({
                    ...prevDetails,
                    emailAddress: e.target.value,
                  }));
                }}
                value={userDetails.emailAddress}
              />
              <Input
                type="tel"
                label="Phone Number"
                labelPlacement={"outside"}
                placeholder="Banepa,Kavre"
                onChange={(e: { target: { value: any } }) => {
                  setIsDisabled(false);
                  setUserDetails((prevDetails) => ({
                    ...prevDetails,
                    phoneNumber: e.target.value,
                  }));
                }}
                value={userDetails.phoneNumber}
              />
              <Input
                type="text"
                label="Address"
                labelPlacement={"outside"}
                placeholder="Banepa,Kavre"
                onChange={(e: { target: { value: any } }) => {
                  setIsDisabled(false);
                  setUserDetails((prevDetails) => ({
                    ...prevDetails,
                    address: e.target.value,
                  }));
                }}
                value={userDetails.address}
              />

              <Input
                type="text"
                label="Country"
                labelPlacement={"outside"}
                placeholder="Nepal"
                onChange={(e: { target: { value: any } }) => {
                  setIsDisabled(false);
                  setUserDetails((prevDetails) => ({
                    ...prevDetails,
                    country: e.target.value,
                  }));
                }}
                value={userDetails.country}
              />
              <Input
                type="text"
                label="Education"
                labelPlacement={"outside"}
                placeholder="Master's Degree"
                onChange={(e: { target: { value: any } }) => {
                  setIsDisabled(false);
                  setUserDetails((prevDetails) => ({
                    ...prevDetails,
                    education: e.target.value,
                  }));
                }}
                value={userDetails.education}
              />
              <Button
                isDisabled={isDisabled}
                color="secondary"
                isLoading={isLoading}
                onClick={handleSubmit}
              >
                Edit Profile
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
export default UserProfile;
