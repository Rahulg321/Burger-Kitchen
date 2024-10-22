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
        <h1 className="uppercase text-mainYellow">
          burgers with
          <br /> <span className="text-white">benefits</span>
        </h1>
        <span className="text-white">Perks & Benefits your way!</span>
        <Button className="mt-4 w-full bg-mainYellow text-black" asChild>
          <Link href={"/signup"}>Get Started</Link>
        </Button>

        <p className="mt-auto text-center text-white">
          Powered by <span className="font-bold">RAVING FANS</span>
        </p>
      </ReusableBackgroundSection>
    </React.Fragment>
  );
}
