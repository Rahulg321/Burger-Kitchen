import PreviousPageButton from "@/components/go-back-route";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import QrCode from "@/public/qr-code.jpeg";

const ReferralPage = () => {
  return (
    <section className="block-space big-container">
      <div className="flex items-center">
        <PreviousPageButton />
        <h2 className="ml-4 uppercase">Referral Code</h2>
      </div>

      <div className="my-6 px-4">
        <Image src={QrCode} alt="qr code" height={300} width={300} />
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

      <Button className="bg-mainYellow mt-4 w-full">Share</Button>
      <p className="mt-auto text-center">
        Powered by <span className="font-bold">RAVING FANS</span>
      </p>
    </section>
  );
};

export default ReferralPage;
