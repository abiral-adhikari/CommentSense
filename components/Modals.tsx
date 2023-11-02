"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Buttontype } from "@/types";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { TickIcon } from "./Icons";
import { useDispatch, useSelector } from "react-redux";
type Props = {
  isError: boolean;
  modelTitle: string;
  modelDescription: string;
  buttons: Buttontype[];
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
};
const LoginModal = ({
  isError,
  modelTitle,
  modelDescription,
  buttons,
  isOpen,
  onOpen,
  onOpenChange,
}: Props) => {
  const loginErrorState = useSelector((state: any) => state.LoginErrorReducer);
  return (
    <>
      {/* <Button onPress={onOpen}>Open Modal</Button> */}
      <Modal
        backdrop="blur"
        isOpen={loginErrorState !== ""}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div
                className={`mx-auto flex  h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border-1 ${
                  isError ? "bg-red-100" : "bg-green-100"
                } ${isError ? "border-red-100" : "border-green-100"} mt-4 `}
              >
                {isError ? (
                  <ExclamationTriangleIcon
                    className="h-10 w-10 text-red-600"
                    aria-hidden="true"
                  />
                ) : (
                  <TickIcon
                    className="h-10 w-10 text-green-600"
                    aria-hidden="true"
                  />
                )}
              </div>
              <ModalHeader className={`flex flex-col gap-1 items-center `}>
                {modelTitle}
              </ModalHeader>
              <ModalBody className={`flex flex-col gap-1 items-center `}>
                <p>{loginErrorState}</p>
              </ModalBody>
              <ModalFooter>
                {buttons.map((btn) => (
                  <Button
                    color={btn.color}
                    variant={btn.variant}
                    onPress={() => {
                      onClose();
                      btn.onPress();
                    }}
                  >
                    {btn.buttonLabel}
                  </Button>
                ))}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default LoginModal;
