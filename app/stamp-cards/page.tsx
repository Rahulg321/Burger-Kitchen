import PreviousPageButton from "@/components/go-back-route";
import Image from "next/image";
import React from "react";
import QrCode from "@/public/qr-code.jpeg";
import StampBurgerFilled from "@/public/stamp-burger-filled.png";
import StampBurgerGrey from "@/public/stamp-burger-grey.png";
import StampFreeBurger from "@/public/stamp-free-burger.png";

const StampCardsPage = () => {
  return (
    <section className="big-container block-space flex min-h-screen flex-col justify-between">
      <div className="relative mb-4 flex w-full items-center">
        <PreviousPageButton />
        <h3 className="font-pduRegular absolute inset-0 mx-auto text-center font-semibold uppercase tracking-wide">
          Stamp Card
        </h3>
      </div>

      <div className="mx-auto">
        <Image
          src={QrCode}
          alt="image of a qrcode"
          height={250}
          width={250}
          className=""
        />
      </div>
      <div className="mt-4">
        <h4 className="font-pduRegular font-semibold uppercase tracking-wide">
          Free Smashed Classic Burger!
        </h4>
        <span className="text-xs text-muted-foreground">
          Collect 5 stamps and get a free smashed classic burger. Earn one stamp
          per visit just by spending (Euro symbol) 10.
        </span>
      </div>

      <div className="mt-2 flex items-end justify-between">
        <div className="flex flex-col items-center justify-center">
          <Image src={StampBurgerFilled} alt="" />
          <span className="text-xs font-semibold">Level 1</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={StampBurgerFilled} alt="" />
          <span className="text-xs font-semibold">Level 2</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={StampBurgerFilled} alt="" />
          <span className="text-xs font-semibold">Level 3</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={StampBurgerGrey} alt="" />
          <span className="text-xs font-semibold">Level 4</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={StampFreeBurger} alt="" />
          <span className="text-xs font-semibold">Free Burger!</span>
        </div>
      </div>

      <div className="mt-8">
        <h5 className="font-pduRegular font-semibold uppercase tracking-wide">
          Terms and Conditions
        </h5>
        <ul className="mt-4 list-disc px-4 text-xs text-muted-foreground">
          <li>Only valid in store only</li>
          <li>Valid in ireland only</li>
          <li>
            Only valid in store only Valid in ireland only valid for 6 months
            from date of issue
          </li>
          <li>Cannot be used in conjunction with any other offer</li>
        </ul>
      </div>
      <p className="mx-auto mt-auto text-center text-sm">
        Crafted by <span className="font-bold">RAVING FANS</span>
      </p>
    </section>
  );
};

export default StampCardsPage;
