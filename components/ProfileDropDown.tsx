"use client";
import React from "react";
import { useRouter } from 'next/router';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";

export default function ProfileDropDown() {
  // const router = useRouter();
  // const handleLogout = async () => {
  //   try {
  //     // Add any additional logic you need before logging out
  //     // Clear the session token
  //     await signOut({ redirect: false });

  //     // Mutate the session to reflect the logout
  //     mutate();
  //     // Redirect to the login page
  //     router.push('/login');
  //   } catch (error) {
  //     console.error('Logout error:', error);
  //   }
  // };

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            size="sm"
            color="secondary"
            isBordered
            as="button"
            className="transition-transform"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">zoey@example.com</p>
          </DropdownItem>
          <DropdownItem key="settings" href="./personaldetail">
            My Profile
          </DropdownItem>

          <DropdownItem key="logout" color="danger" href="./api/auth/signout">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}


