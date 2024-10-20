import AppBar from "@/components/AppBar";
import StampCard from "@/components/StampCard";
import Image from "next/image";
import React from "react";
import OfferTemplate from "@/public/offer-template.png";
import UberEatsLogo from "@/public/Uber-Eats-Logo.png";
import DeliveryLogo from "@/public/deliveroo-logo.png";
import JustEatsLogo from "@/public/just-eat.png";
import OrderNowDialog from "@/components/dialogs/order-now-dialog";

const HomePage = () => {
  return (
    <section>
      <div className="bg-mainYellow px-4 pt-10">
        <div className="flex items-center justify-center">
          <Image
            src={"/diamond-logo.png"}
            alt="diamond-logo"
            width={50}
            height={50}
          />
        </div>
        <h3 className="my-4">Welcome back Raunak!!</h3>
        <h1 className="uppercase text-white">Your free</h1>
      </div>
      <div className="bg-gray-100 px-2 py-4">
        <h1 className="uppercase">Burger is Free</h1>

        <div className="mt-4">
          <h4 className="uppercase">Stamp Card</h4>
          <div className="mt-4">
            <StampCard />
          </div>
        </div>

        <div className="mt-4">
          <h4 className="uppercase">Perks & Benefits</h4>
          <Image
            src={OfferTemplate}
            alt="offer-template"
            className="mt-4 w-full"
          />
        </div>

        <div className="mt-6">
          <h4 className="uppercase">Order Now</h4>
          <div className="mt-4 flex items-center gap-4">
            <LogoCard imgSrc={UberEatsLogo} />
            <LogoCard imgSrc={DeliveryLogo} />
            <LogoCard imgSrc={JustEatsLogo} />
          </div>
        </div>

        <OrderNowDialog />
        <span className="mt-6 block text-center text-sm">
          Powered by <span className="font-bold">RAVING FANS</span>
        </span>
      </div>
      <AppBar />
    </section>
  );
};

export default HomePage;

const LogoCard = ({ imgSrc }: { imgSrc: any }) => {
  return (
    <div className="relative h-10 flex-1 rounded-lg border-2 px-4 py-2">
      <Image src={imgSrc} alt={"Uber-Eats-Logo"} fill />
    </div>
  );
};
