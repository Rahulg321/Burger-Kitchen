"use client";

import * as React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import ProfilePicForm from "@/components/forms/profile-pic-form";
import Image from "next/image";
import LogoutLogo from "@/public/logout-logo.png";

export default function ProfilePicDialog() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="w-fit rounded-full bg-mainYellow">
            <Image
              src="/profilePlaceholder.png"
              alt="Profile user Placeholder"
              height={100}
              width={100}
            />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <ProfilePicForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div className="w-fit rounded-full bg-mainYellow">
          <Image
            src="/profilePlaceholder.png"
            alt="Profile user Placeholder"
            height={100}
            width={100}
          />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="flex items-center justify-center">
            <Image src={LogoutLogo} alt="logout-logo" width={50} height={50} />
          </DrawerTitle>
          <DrawerDescription>
            <span className="block font-bold uppercase text-black">
              change profile photo
            </span>
            <span className="text-muted-foreground">
              Would you like to take a new photo or choose an existing one?
            </span>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <Button className="bg-mainYellow font-bold uppercase">
            Take a Photo
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
