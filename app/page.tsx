import ProfilePicDialog from "@/components/dialogs/profile-pic-dialog";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <section className="big-container block-space">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
          temporibus similique dicta quisquam ab alias sit labore nesciunt
          doloremque, eaque facilis rem magnam ipsa ullam nisi. Odit deleniti
          repellendus aspernatur.
        </p>
        <ProfilePicDialog />
        <Button>Click Me</Button>
      </section>
    </React.Fragment>
  );
}
