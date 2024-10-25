import LogoutDialog from "@/components/dialogs/logout-dialog";
import ProfilePicDialog from "@/components/dialogs/profile-pic-dialog";
import PreviousPageButton from "@/components/go-back-route";
import LogoutButton from "@/components/logout-button";
import Link from "next/link";
import React from "react";

export default async function ProfilePage(props: {
  params: Promise<{ userId: string }>;
}) {
  const params = await props.params;
  return (
    <React.Fragment>
      <section className="block-space big-container">
        <div className="flex items-center">
          <PreviousPageButton />
          <h2 className="ml-4 uppercase">My Profile</h2>
        </div>
        <div className="my-8 flex flex-col items-center">
          <ProfilePicDialog />
          <h3>RAUNAK DAS</h3>
          <span>test@gmail.com</span>
        </div>

        <div className="space-y-4">
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
        </div>
        <div className="mt-6">
          <div className="block text-center">
            <LogoutDialog />
          </div>
          <p className="mt-auto text-center">
            Crafted by <span className="font-bold">RAVING FANS</span>
          </p>
        </div>
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
      className="block w-full rounded-lg border bg-mainYellow px-2 py-4 text-center"
    >
      {content}
    </Link>
  );
}
