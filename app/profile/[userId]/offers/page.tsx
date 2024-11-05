import PreviousPageButton from "@/components/go-back-route";
import React from "react";
import BurgerOffer from "@/public/burger-offer.png";
import Image from "next/image";

const OffersPage = async () => {
  return (
    <section className="block-space big-container flex min-h-[100dvh] flex-col">
      <div className="flex items-center">
        <PreviousPageButton />
        <h2 className="ml-4 uppercase">My Profile</h2>
      </div>

      <div className="my-8 flex items-center justify-center">
        <Image
          src={BurgerOffer}
          alt="Image of a burger"
          width={200}
          height={200}
        />
      </div>

      <div className="text-center">
        <h4>Thank You!</h4>
        <span>Enjoy Your Exclusive Perks & Benefits.</span>
      </div>
      <div className="mt-auto">
        <p className="text-center">
          Powered by <span className="font-bold">RAVING FANS</span>
        </p>
      </div>
    </section>
  );
};

export default OffersPage;
