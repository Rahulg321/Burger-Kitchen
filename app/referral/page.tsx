import PreviousPageButton from "@/components/go-back-route";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import QrCode from "@/public/qr-code.jpeg";

const ReferralPage = () => {
  return (
    <section className="block-space big-container">
      <div className="relative mb-4 flex w-full items-center">
        <PreviousPageButton />
        <h3 className="font-pduRegular absolute inset-0 mx-auto text-center font-semibold uppercase tracking-wide">
          Referral Code
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
        <h3 className="uppercase">get flat 10% discount!</h3>
        <span className="text-sm text-muted-foreground">
          Collect 5 stamps and get a free smashed classic burger. Earn one stamp
          per visit just by spending (Euro symbol) 10.
        </span>
      </div>
      <div className="my-4">
        <h3 className="uppercase">YOUR benefits</h3>
        <ul className="ml-4 mt-4 list-disc text-sm text-muted-foreground">
          <li>Only valid in store only</li>
          <li>Valid in ireland only</li>
          <li>valid for 6 months from date of issue</li>
          <li>Cannot be used in conjunction with any other offer</li>
        </ul>
      </div>

      <div className="my-4">
        <h3 className="uppercase">YOUR FRIEND’S benefits</h3>
        <ul className="ml-4 mt-4 list-disc text-sm text-muted-foreground">
          <li>Only valid in store only</li>
          <li>Valid in ireland only</li>
          <li>valid for 6 months from date of issue</li>
          <li>Cannot be used in conjunction with any other offer</li>
        </ul>
      </div>

      <span className="text-sm text-muted-foreground">
        By continuing, you accept the Terms & Conditions.
      </span>

      <Button className="mt-4 w-full bg-mainYellow">Share</Button>
      <p className="mt-auto text-center">
        Crafted by <span className="font-bold">RAVING FANS</span>
      </p>
    </section>
  );
};

export default ReferralPage;
