import Image from "next/image";
import React from "react";
import RewardStamp from "@/public/reward-stamp.png";
import PreviousPageButton from "@/components/go-back-route";

const UserRewardPage = () => {
  return (
    <section className="big-container block-space flex min-h-screen flex-col justify-between">
      <div className="sticky top-0 z-10 bg-white py-4">
        <div className="relative mb-4 flex w-full items-center">
          <PreviousPageButton />
          <h3 className="font-pduRegular absolute inset-0 mx-auto text-center font-semibold uppercase tracking-wide">
            My Rewards
          </h3>
        </div>
      </div>

      <div className="space-y-4">
        <Image src={RewardStamp} alt="Reward Stamp" className="rounded-xl" />
        <Image src={RewardStamp} alt="Reward Stamp" className="rounded-xl" />
        <Image src={RewardStamp} alt="Reward Stamp" className="rounded-xl" />
        <Image src={RewardStamp} alt="Reward Stamp" className="rounded-xl" />
        <Image src={RewardStamp} alt="Reward Stamp" className="rounded-xl" />
        <Image src={RewardStamp} alt="Reward Stamp" className="rounded-xl" />
        <Image src={RewardStamp} alt="Reward Stamp" className="rounded-xl" />
        <Image src={RewardStamp} alt="Reward Stamp" className="rounded-xl" />
        <Image src={RewardStamp} alt="Reward Stamp" className="rounded-xl" />
      </div>
      <p className="mt-auto text-center">
        Crafted by <span className="font-bold">RAVING FANS</span>
      </p>
    </section>
  );
};

export default UserRewardPage;
