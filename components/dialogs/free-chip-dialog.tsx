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
import YellowLays from "@/public/yellow-lays.png";
import Link from "next/link";

const FreeChipsDialog = () => {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(true);

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center">
            <Image src={LogoutLogo} alt="logout-logo" width={50} height={50} />
          </DialogTitle>
          <DialogDescription>
            <span className="block font-bold text-black">
              Congratulations!!!
            </span>
            <span className="text-muted-foreground">
              You have earned free chips for successfully creating your GBK
              account.
            </span>
          </DialogDescription>

          <Image
            src={YellowLays}
            alt="yellow lays packet"
            width={100}
            height={200}
            className="mx-auto"
          />
          <DialogFooter>
            <div className="mt-6 space-y-2">
              <Button
                className="font-pduRegular w-full bg-mainYellow uppercase tracking-wider text-black"
                size={"lg"}
                asChild
              >
                <Link href="/free-chips">Redeem Now</Link>
              </Button>
              <Button
                className="font-pduRegular w-full uppercase"
                variant={"outline"}
                size={"lg"}
                onClick={() => {
                  setOpenDialog(false);
                }}
              >
                Redeem Later
              </Button>
            </div>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default FreeChipsDialog;
