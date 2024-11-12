import Image from "next/image";
import React from "react";
import BurgerStamp from "@/public/burger-stamp.jpeg";
import { CiBurger } from "react-icons/ci";
import BurgerCircle from "./BurgerCircle";

const StampCard = () => {
  return (
    <div className="flex w-full">
      <div className="basis-1/2 rounded-l-xl bg-black px-2 py-6">
        <span className="font-milkshake text-sm text-white">
          Collect 5 stamps{" "}
          <span className="font-milkshake text-mainYellow">to Win</span>
        </span>
        <h4 className="text-[2rem] uppercase text-white">
          <span className="text-mainYellow">free</span> burger
        </h4>
        <div className="flex gap-2">
          <BurgerCircle showBurgerIcon={true} />
          <BurgerCircle showBurgerIcon={false} />
          <BurgerCircle showBurgerIcon={false} />
          <BurgerCircle showBurgerIcon={false} />
          <BurgerCircle showBurgerIcon={false} />
        </div>
        <span className="font-brandon block text-[0.75rem] uppercase text-white">
          only <span className="font-brandon text-mainYellow">4 stamps</span>{" "}
          left!
        </span>
        <span className="mt-4 block text-[0.5rem] text-white">
          *T&C Applied
        </span>
      </div>
      <div className="basis-1/2">
        <Image
          src={BurgerStamp}
          alt={"diamond-logo"}
          className="h-full rounded-r-xl object-cover"
        />
      </div>
    </div>
  );
};

export default StampCard;
