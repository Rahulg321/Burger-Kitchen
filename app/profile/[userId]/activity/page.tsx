import PreviousPageButton from "@/components/go-back-route";
import { Percent } from "lucide-react";
import React from "react";
import Vector from "@/public/activity/Vector.png";
import BurgerIcon from "@/public/activity/burgerYellowIcon.png";
import CakeIcon from "@/public/activity/cakeIcon.png";
import Image, { StaticImageData } from "next/image";

const UserActivityPage = async (props: {
  params: Promise<{ userId: string }>;
}) => {
  const params = await props.params;

  return (
    <React.Fragment>
      <section className="big-container block-space flex min-h-screen flex-col justify-between">
        <div>
          <div className="mb-6 flex items-center gap-4">
            <PreviousPageButton />

            <h3 className="font-bold uppercase">My Activity</h3>
          </div>

          <div className="flex-grow space-y-4">
            <ActivityCard
              img={Vector}
              heading="Any Burger and Fries for $15"
              tagline="Exclusive Offer | 3 Hours ago"
            />
            <ActivityCard
              img={BurgerIcon}
              heading="1st Stamp Earned"
              tagline="Reward Earned | 1 Day ago"
            />
            <ActivityCard
              img={Vector}
              heading="Free Milkshake on Download"
              tagline="Successfully Redeemed | 2 Day ago"
            />
            <ActivityCard
              img={CakeIcon}
              heading="Free Fried Chicken"
              tagline="Exclusive Offer | 3 Hours ago"
            />
            <ActivityCard
              img={Vector}
              heading="Free Chips on Registration"
              tagline="Reward Expired | 4 Day ago"
            />
          </div>
          <p className="mt-auto text-center">
            Powered by <span className="font-bold">RAVING FANS</span>
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default UserActivityPage;

function ActivityCard({
  heading,
  tagline,
  img,
}: {
  heading: string;
  tagline: string;
  img: StaticImageData;
}) {
  return (
    <div className="flex items-center">
      <div>
        <Image src={img} alt="Vector" />
      </div>
      <div className="ml-2">
        <h4>{heading}</h4>
        <span>{tagline}</span>
      </div>
    </div>
  );
}
