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
import Image, { StaticImageData } from "next/image";
import LogoutLogo from "@/public/logout-logo.png";
import UberEatsLogo from "@/public/Uber-Eats-Logo.png";

export default function OrderNowDialog({
  VendorLogo,
  VendorLogoAlt,
}: {
  VendorLogo: StaticImageData;
  VendorLogoAlt: string;
}) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Order Now</Button>
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
      <DialogTrigger asChild>
        <div className="rounded-lg border-2 p-1">
          <Image
            src={VendorLogo}
            alt={VendorLogoAlt}
            width={100}
            height={100}
            className="object-cover"
          />
        </div>
      </DialogTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="flex items-center justify-center">
            <Image
              src={"/logos/GBK-diamond.jpg"}
              alt={"official logout logo"}
              width={50}
              height={50}
            />
          </DrawerTitle>
          <DrawerDescription>
            <span className="block text-center text-2xl font-bold uppercase text-black">
              order now
            </span>
            <span className="mt-2 block text-center text-muted-foreground">
              Finish your order and enjoy tasty rewards. Hungry now? You’re just
              one click away from satisfaction!
            </span>
          </DrawerDescription>
        </DrawerHeader>
        <div className="mt-4 flex items-center justify-center">
          <Image
            src={VendorLogo}
            alt={VendorLogoAlt}
            height={150}
            width={150}
          />
        </div>
        <DrawerFooter className="pt-2">
          <Button className="bg-mainYellow font-bold uppercase">Proceed</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
