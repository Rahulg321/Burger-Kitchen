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
          <div className="sticky top-0 z-10 bg-white py-4">
            <div className="relative mb-4 flex w-full items-center">
              <PreviousPageButton />
              <h3 className="font-pduRegular absolute inset-0 mx-auto text-center font-semibold uppercase tracking-wide">
                My Activity
              </h3>
            </div>
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
            Crafted by <span className="font-bold">RAVING FANS</span>
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
      <div className="ml-4">
        <h5 className="font-semibold">{heading}</h5>
        <span className="text-sm">{tagline}</span>
      </div>
    </div>
  );
}
