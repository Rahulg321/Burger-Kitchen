"use client";

import { LogOut } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const LogoutButton = () => {
  return (
    <Button
      variant={"link"}
      size={"lg"}
      onClick={() => {}}
      className="text-red-500"
    >
      <LogOut /> Logout
    </Button>
  );
};

export default LogoutButton;
