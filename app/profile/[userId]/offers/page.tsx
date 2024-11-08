import PreviousPageButton from "@/components/go-back-route";
import React from "react";
import BurgerOffer from "@/public/burger-offer.png";
import Image from "next/image";

const OffersPage = async () => {
  return (
    <section className="block-space big-container flex min-h-[100dvh] flex-col">
      <div className="relative mb-4 flex w-full items-center">
        <PreviousPageButton />
        <h3 className="font-pduRegular absolute inset-0 mx-auto text-center font-semibold uppercase tracking-wide">
          My Profile
        </h3>
      </div>

      <div className="my-8 flex flex-col items-center justify-center">
        <Image
          src={BurgerOffer}
          alt="Image of a burger"
          width={200}
          height={200}
        />
        <div className="text-center">
          <h4>Thank You!</h4>
          <span>Enjoy Your Exclusive Perks & Benefits.</span>
        </div>
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
