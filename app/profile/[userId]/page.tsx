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
        <div className="relative mb-4 flex w-full items-center">
          <PreviousPageButton />
          <h3 className="font-pduRegular absolute inset-0 mx-auto text-center font-semibold uppercase tracking-wide">
            My Profile
          </h3>
        </div>
        <div className="my-8 flex flex-col items-center">
          <ProfilePicDialog />
          <h4>RAUNAK DAS</h4>
          <span className="text-sm">test@gmail.com</span>
        </div>

        <div className="space-y-4">
          <ProfileLinkComponent
            href={`/profile/${12312}/activity`}
            content="My Details"
          />
          <ProfileLinkComponent
            href={`/profile/${12312}/activity`}
            content="Market Reference"
          />

          <ProfileLinkComponent
            href={`/profile/${12312}/activity`}
            content="Referral Code"
          />
          <ProfileLinkComponent
            href={`/profile/${12312}/activity`}
            content="FAQ"
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
      className="block w-full rounded-lg border bg-mainYellow p-2 text-center"
    >
      <span className="text-xs">{content}</span>
    </Link>
  );
}
