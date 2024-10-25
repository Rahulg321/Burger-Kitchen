import Image from "next/image";
import React from "react";
import BurgerStamp from "@/public/burger-stamp.jpeg";
import { CiBurger } from "react-icons/ci";
import BurgerCircle from "./BurgerCircle";

const PerkBenefitCard = () => {
  return (
    <div className="flex w-full">
      <div className="flex-1 rounded-l-xl bg-black px-2 py-6">
        <span className="font-milkshake text-sm text-white">
          Collect 5 stamps <span className="text-mainYellow">to Win</span>
        </span>
        <h4 className="uppercase text-white">
          <span className="text-mainYellow">free</span> burger
        </h4>
        <div className="flex gap-2">
          <BurgerCircle />
          <BurgerCircle />
          <BurgerCircle />
          <BurgerCircle />
        </div>
        <span className="font-brandon block uppercase text-white">
          only <span className="font-brandon text-mainYellow">4 stamps</span>{" "}
          left!
        </span>
        <span className="mt-4 block text-sm text-white">*T&C Applied</span>
      </div>
      <div className="relative flex-1">
        <Image
          src={BurgerStamp}
          alt={"diamond-logo"}
          fill
          className="h-full rounded-r-xl object-cover"
        />
      </div>
    </div>
  );
};

export default PerkBenefitCard;
