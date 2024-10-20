import PreviousPageButton from "@/components/go-back-route";
import { Percent } from "lucide-react";
import React from "react";
import Vector from "@/public/activity/Vector.png";
import Image from "next/image";

const UserActivityPage = ({ params }: { params: { userId: string } }) => {
  return (
    <React.Fragment>
      <section className="big-container">
        <div>
          <PreviousPageButton />

          <h3 className="uppercase">My Activity</h3>

          <ActivityCard
            heading="Any Burger and Fries for $15"
            tagline="Exclusive Offer | 3 Hours ago"
          />
          <ActivityCard
            heading="1st Stamp Earned"
            tagline="Reward Earned | 1 Day ago"
          />
          <ActivityCard
            heading="Free Milkshake on Download"
            tagline="Successfully Redeemed | 2 Day ago"
          />
          <ActivityCard
            heading="Free Fried Chicken"
            tagline="Exclusive Offer | 3 Hours ago"
          />
          <ActivityCard
            heading="Free Chips on Registration"
            tagline="Reward Expired | 4 Day ago"
          />
        </div>
      </section>
    </React.Fragment>
  );
};

export default UserActivityPage;

function ActivityCard({
  heading,
  tagline,
}: {
  heading: string;
  tagline: string;
}) {
  return (
    <div className="flex items-center justify-around">
      <Image src={Vector} alt="Vector" />
      <div>
        <h4>{heading}</h4>
        <span>{tagline}</span>
      </div>
    </div>
  );
}
