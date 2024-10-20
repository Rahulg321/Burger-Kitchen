import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const ReusableBackgroundSection = ({
  imgSrc,
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
  imgSrc: string;
}) => {
  return (
    <section
      className={cn("group relative min-h-screen overflow-hidden bg-black")}
    >
      <div
        className={cn("absolute bottom-0 left-0 right-0 top-0 z-10", classname)}
      >
        {children}
      </div>

      <Image src={imgSrc} fill priority alt="burger-bg" className="bg-cover" />
    </section>
  );
};

export default ReusableBackgroundSection;
