import PreviousPageButton from "@/components/go-back-route";
import React from "react";
import BurgerOffer from "@/public/burger-offer.png";
import Image from "next/image";

const OffersPage = async () => {
  return (
    <section className="block-space big-container">
      <div className="flex items-center">
        <PreviousPageButton />
        <h2 className="ml-4 uppercase">My Profile</h2>
      </div>

      <div className="my-8 flex items-center justify-center">
        <Image src={BurgerOffer} alt="Image of a burger" />
      </div>

      <div className="text-center">
        <h4>Thank You!</h4>
        <span>Enjoy Your Exclusive Perks & Benefits.</span>
      </div>
      <p className="mt-auto text-center">
        Powered by <span className="font-bold">RAVING FANS</span>
      </p>
    </section>
  );
};

export default OffersPage;
