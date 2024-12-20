import PreviousPageButton from "@/components/go-back-route";
import Image from "next/image";
import React from "react";
import QrCode from "@/public/qr-code.jpeg";
import { Button } from "@/components/ui/button";
import YellowLays from "@/public/yellow-lays.png";

const FreeChipsPage = async () => {
  return (
    <section className="block-space big-container">
      <div className="relative mb-4 flex w-full items-center">
        <PreviousPageButton />
        <h3 className="font-pduRegular absolute inset-0 mx-auto text-center font-semibold uppercase tracking-wide">
          Free Chips
        </h3>
      </div>
      <div className="my-6">
        <Image
          src={QrCode}
          alt="qr code"
          height={200}
          width={200}
          className="mx-auto"
        />
      </div>
      <div className="my-4">
        <h4 className="font-pduRegular uppercase tracking-wider">
          wohoo! you won a Free skin on
        </h4>
        <span className="text-sm text-muted-foreground">
          Scan the QR Code from the counter to collect the chips.
        </span>
      </div>
      <div className="my-4">
        <h4 className="font-pduRegular uppercase tracking-wider">
          Terms & Conditions
        </h4>
        <ul className="ml-4 mt-4 list-disc text-sm text-muted-foreground">
          <li>
            this cannot be used in conjunction with any other offers, deals or
            promo.
          </li>
          <li>Offer available in all sites in Ireland only</li>
          <li>
            GBK Ireland reserves the right to withdraw the offer at any time
          </li>
          <li>Offer only available for dine in only</li>
        </ul>
      </div>

      <span className="text-sm text-muted-foreground">
        By continuing, you accept the Terms & Conditions.
      </span>

      <div className="mt-auto">
        <span className="mt-2 block text-center">
          Powered by <span className="font-bold">RAVING FANS</span>
        </span>
      </div>
    </section>
  );
};

export default FreeChipsPage;
