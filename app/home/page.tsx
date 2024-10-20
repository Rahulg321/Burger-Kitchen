import AppBar from "@/components/AppBar";
import StampCard from "@/components/StampCard";
import Image from "next/image";
import React from "react";
import OfferTemplate from "@/public/offer-template.png";

const HomePage = () => {
  return (
    <section>
      <div className="bg-mainYellow">
        <Image
          src={"/diamond-logo.png"}
          alt="diamond-logo"
          width={50}
          height={50}
        />
        <h2>Welcome back Raunak!!</h2>
        <h1 className="uppercase">Your free</h1>
      </div>
      <div className="bg-gray-100 px-2 py-4">
        <h1 className="uppercase">Burger is Free</h1>

        <h4 className="uppercase">Stamp Card</h4>
        <StampCard />
        <h4 className="uppercase">Perks & Benefits</h4>
        <Image src={OfferTemplate} alt="offer-template" />

        <h4 className="uppercase">Order Now</h4>
        <div className="flex gap-4">
          <LogoCard imgSrc="/Uber-Eats-Logo.png" />
          <LogoCard imgSrc="/deliveroo-logo.png" />
          <LogoCard imgSrc="/just-eat.png" />
        </div>
        <span>
          Powered by <span className="font-bold">RAVING FANS</span>
        </span>
      </div>
      <AppBar />
    </section>
  );
};

export default HomePage;

const LogoCard = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className="w-fit rounded-lg border px-4 py-2">
      <Image src={imgSrc} alt={"Uber-Eats-Logo"} width={50} height={50} />
    </div>
  );
};
