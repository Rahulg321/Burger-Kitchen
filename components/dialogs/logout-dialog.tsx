"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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
  const [openDialog, setOpenDialog] = useState(false);

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
            <span className="block font-bold text-black">
              Sorry to see you go :(
            </span>
            <span className="text-muted-foreground">
              Are you sure you want to log out?
            </span>
          </DialogDescription>
          <DialogFooter>
            <div className="mt-6 space-y-2">
              <Button
                className="w-full uppercase"
                variant={"outline"}
                size={"lg"}
              >
                Log Out
              </Button>

              <Button
                className="w-full bg-mainYellow uppercase"
                size={"lg"}
                onClick={() => {
                  setOpenDialog(false);
                }}
              >
                Cancel
              </Button>
            </div>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutDialog;
