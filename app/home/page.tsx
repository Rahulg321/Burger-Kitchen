import AppBar from "@/components/AppBar";
import StampCard from "@/components/StampCard";
import Image, { StaticImageData } from "next/image";
import React from "react";
import OfferTemplate from "@/public/offer-template.png";
import UberEatsLogo from "@/public/Uber-Eats-Logo.png";
import DeliveryLogo from "@/public/deliveroo-logo.png";
import JustEatsLogo from "@/public/just-eat.png";
import OrderNowDialog from "@/components/dialogs/order-now-dialog";
import Link from "next/link";
import FreeChipsDialog from "@/components/dialogs/free-chip-dialog";

export const metadata = {
  title: "Home Page",
  description: "Burger Kitchen",
};

const HomePage = () => {
  return (
    <section className="">
      <FreeChipsDialog />
      <div className="bg-mainYellow px-4 pt-10">
        <div className="flex items-center justify-center">
          <Image
            src={"/diamond-logo.png"}
            alt="diamond-logo"
            width={50}
            height={50}
          />
        </div>
        <h3 className="my-4 font-normal">Welcome back Raunak!!</h3>
        <h1 className="font-bebas text-[72px] uppercase leading-[70.56px] tracking-wide text-white">
          Your free
        </h1>
      </div>
      <div className="bg-gray-100 px-4 pb-24 pt-2">
        <h1 className="font-bebas text-[60px] uppercase leading-[70.56px] tracking-wide">
          Burger is here
        </h1>

        <div className="mt-4">
          <h4 className="font-pduRegular uppercase tracking-wide">
            Stamp Card
          </h4>
          <div className="mt-4">
            <Link href={"/stamp-cards"}>
              <StampCard />
            </Link>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="font-pduRegular uppercase tracking-wide">
            Perks & Benefits
          </h4>
          <div className="scrollbar-hide mt-4 flex space-x-4 overflow-x-auto">
            <PerkBenefitCardImage />
            <PerkBenefitCardImage />
            <PerkBenefitCardImage />
            <PerkBenefitCardImage />
            <PerkBenefitCardImage />
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-pduRegular uppercase tracking-wide">Order Now</h4>
          <div className="mt-4 flex w-full items-center justify-between">
            <OrderNowDialog
              VendorLogo={UberEatsLogo}
              VendorLogoAlt={"Uber-Eats-Logo"}
            />
            <OrderNowDialog
              VendorLogo={DeliveryLogo}
              VendorLogoAlt={"Delivery-Logo"}
            />
            <OrderNowDialog
              VendorLogo={JustEatsLogo}
              VendorLogoAlt={"Just-Eats-Logo"}
            />
          </div>
        </div>

        <span className="mt-6 block text-center text-sm">
          Crafted by <span className="font-bold">RAVING FANS</span>
        </span>
      </div>
      <AppBar />
    </section>
  );
};

export default HomePage;

const LogoCard = ({ imgSrc }: { imgSrc: StaticImageData }) => {
  return (
    <div className="rounded-lg border-2 px-4 py-2">
      <Image src={imgSrc} alt={"Uber-Eats-Logo"} />
    </div>
  );
};

const PerkBenefitCardImage = () => {
  return (
    <div className="relative h-44 w-full flex-shrink-0 overflow-hidden rounded-lg">
      <Link href={"/profile/321/offers"}>
        <Image
          src={OfferTemplate}
          alt="offer-template"
          layout="fill" // Makes the image fill the container
        />
      </Link>
    </div>
  );
};
