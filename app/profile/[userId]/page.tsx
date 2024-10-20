import PreviousPageButton from "@/components/go-back-route";
import LogoutButton from "@/components/logout-button";
import Link from "next/link";
import React from "react";

export default function ProfilePage({
  params,
}: {
  params: { userId: string };
}) {
  return (
    <React.Fragment>
      <section>
        <PreviousPageButton />
        <h2>My Profile</h2>

        <h3>RAUNAK DAS</h3>
        <span>test@gmail.com</span>

        <ProfileLinkComponent
          href={`/profile/${12312}/details`}
          content="My Details"
        />
        <ProfileLinkComponent
          href={`/profile/${12312}/details`}
          content="Market Reference"
        />
        <ProfileLinkComponent
          href={`/profile/${12312}/details`}
          content="Personal Code"
        />
        <ProfileLinkComponent
          href={`/profile/${12312}/details`}
          content="Referral Code"
        />
        <ProfileLinkComponent
          href={`/profile/${12312}/details`}
          content="Know more about Raving Fans"
        />
        <LogoutButton />
        <span>Powered by RAVING FANS</span>
      </section>
    </React.Fragment>
  );
}

function ProfileLinkComponent({
  href,
  content,
}: {
  href: string;
  content: string;
}) {
  return (
    <Link
      href={href}
      className="bg-mainYellow block w-full rounded-lg border px-2 py-4"
    >
      {content}
    </Link>
  );
}
