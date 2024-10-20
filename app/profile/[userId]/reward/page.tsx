import Image from "next/image";
import React from "react";
import RewardStamp from "@/public/reward-stamp.png";
import PreviousPageButton from "@/components/go-back-route";

const UserRewardPage = () => {
  return (
    <section className="big-container block-space flex min-h-screen flex-col justify-between">
      <div className="mb-10 flex items-center gap-4">
        <PreviousPageButton />
        <h3 className="uppercase">My Reward</h3>
      </div>

      <div className="space-y-4">
        <Image src={RewardStamp} alt="Reward Stamp" className="rounded-xl" />
        <Image src={RewardStamp} alt="Reward Stamp" className="rounded-xl" />
        <Image src={RewardStamp} alt="Reward Stamp" className="rounded-xl" />
      </div>
      <p className="mt-auto text-center">
        Powered by <span className="font-bold">RAVING FANS</span>
      </p>
    </section>
  );
};

export default UserRewardPage;
