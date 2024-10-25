import ProfilePicDialog from "@/components/dialogs/profile-pic-dialog";
import ReusableBackgroundSection from "@/components/reusable-background-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <ReusableBackgroundSection
        imgSrc="/burger-bg.png"
        classname="flex items-start flex-col justify-end px-4"
      >
        <h1 className="font-bebas suppercase w-full text-[72px] leading-[70.56px] tracking-wide text-mainYellow">
          burgers with
          <br /> <span className="font-bebas text-white">benefits</span>
        </h1>
        <span className="text-white">Perks & Benefits your way!</span>
        <Button
          className="font-pduRegular mt-4 w-full bg-mainYellow uppercase text-black"
          asChild
        >
          <Link href={"/signup"}>Get Started</Link>
        </Button>

        <p className="mx-auto mt-auto text-center text-sm text-white">
          Crafted by <span className="font-bold">RAVING FANS</span>
        </p>
      </ReusableBackgroundSection>
    </React.Fragment>
  );
}
