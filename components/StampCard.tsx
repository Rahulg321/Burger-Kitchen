import Image from "next/image";
import React from "react";
import BurgerStamp from "@/public/burger-stamp.jpeg";
import { CiBurger } from "react-icons/ci";
import BurgerCircle from "./BurgerCircle";

const StampCard = () => {
  return (
    <div className="grid grid-cols-2 rounded-xl border">
      <div className="rounded-l-xl bg-black px-2 py-2">
        <span className="text-white">
          Collect 5 stamps <span className="text-mainYellow">to Win</span>
        </span>
        <span className="uppercase text-white">
          <span className="text-mainYellow">free</span> burger
        </span>
        <div className="flex gap-2">
          <BurgerCircle />
          <BurgerCircle />
          <BurgerCircle />
          <BurgerCircle />
        </div>
        <span className="uppercase text-white">
          only <span className="text-mainYellow">4 stamps</span> left!
        </span>
      </div>
      <div className="">
        <Image
          src={BurgerStamp}
          alt={"diamond-logo"}
          className="rounded-r-xl"
        />
      </div>
    </div>
  );
};

export default StampCard;
