"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import LogoutLogo from "@/public/logout-logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LogoutDialog = () => {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(true);

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button
          variant={"link"}
          size={"lg"}
          onClick={() => {}}
          className="text-red-500"
        >
          <LogOut /> Logout
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center">
            <Image src={LogoutLogo} alt="logout-logo" width={50} height={50} />
          </DialogTitle>
          <DialogDescription>
            <h4 className="font-bold text-black">Sorry to see you go :(</h4>
            <span className="text-muted-foreground">
              Are you sure you want to log out?
            </span>
          </DialogDescription>
          <div className="mt-6 space-y-2">
            <Button
              className="w-full uppercase"
              variant={"outline"}
              size={"lg"}
            >
              Log Out
            </Button>

            <Button
              className="bg-mainYellow w-full uppercase"
              size={"lg"}
              onClick={() => {
                setOpenDialog(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutDialog;
