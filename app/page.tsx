import ProfilePicDialog from "@/components/dialogs/profile-pic-dialog";
import ReusableBackgroundSection from "@/components/reusable-background-section";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";

export default function Home() {
  return (
    <React.Fragment>
      <ReusableBackgroundSection
        imgSrc="/burger-bg.png"
        classname="flex items-center flex-col justify-end"
      >
        <h1 className="text-white">burgers with benefits</h1>
        <span>Perks & Benefits your way!</span>
        <Button>Get Started</Button>

        <span>Crafted by RAVING FANS</span>
      </ReusableBackgroundSection>
    </React.Fragment>
  );
}
