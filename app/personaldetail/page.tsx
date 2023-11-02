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

type Props = {
  isError: boolean;
  modelTitle: string;
  modelDescription: string;
  buttons: Buttontype[];
};
const CustomModal = ({
  isError,
  modelTitle,
  modelDescription,
  buttons,
}: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className={`flex flex-col gap-1 items-center `}>
                {modelTitle}
              </ModalHeader>
              <ModalBody>
                <p>modelDescription</p>
              </ModalBody>
              <ModalFooter>
                {buttons.map((btn) => (
                  <Button
                    color={btn.color}
                    variant={btn.variant}
                    onPress={btn.onPress}
                  >
                    {btn.buttonLabel}
                  </Button>
                ))}
                {/* <Button color="danger" variant onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default CustomModal;
