import PreviousPageButton from "@/components/go-back-route";
import { Button } from "@/components/ui/button";
import React from "react";

const CheckEmailPage = () => {
  return (
    <section className="block-space big-container flex min-h-[100dvh] flex-col">
      <div className="relative mb-4 flex w-full items-center">
        <PreviousPageButton />
        <h3 className="font-pduRegular absolute inset-0 mx-auto text-center font-semibold uppercase tracking-wide">
          SIGN UP
        </h3>
      </div>
      <div className="space-y-4">
        <h4 className="font-pduRegular uppercase tracking-wide">
          Check Your Email
        </h4>
        <span className="block text-sm text-[#6C6C6C]">
          Check your email{" "}
          <span className="font-semibold text-yellow-400 underline">
            rk360ironjr@gmail.com
          </span>
          <span className="block text-sm text-[#6C6C6C]">
            If no email is received within 10 minutes, check if the email is
            correct.
          </span>
        </span>
      </div>

      <div className="mt-auto">
        <Button className="font-pduRegular w-full py-6 uppercase tracking-widest">
          Open Email
        </Button>

        <span className="mt-2 block text-center text-sm">
          Crafted by <span className="font-bold">RAVING FANS</span>
        </span>
      </div>
    </section>
  );
};

export default CheckEmailPage;
