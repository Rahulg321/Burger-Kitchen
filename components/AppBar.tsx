import { Activity, Gift, Home, Timer, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const AppBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-around border bg-white px-6 py-4">
      <NavLogo
        icon={<Home className="" fill="black" />}
        href={`/home`}
        label="Home"
      />
      <NavLogo
        icon={<Timer />}
        href={`/profile/${321}/activity`}
        label="Activity"
      />
      <NavLogo icon={<Gift />} href={`/profile/${321}/reward`} label="Reward" />
      <NavLogo icon={<User />} href={`/profile/${321}`} label="Profile" />
    </div>
  );
};

export default AppBar;

function NavLogo({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <Link href={href} className="flex flex-col items-center justify-center">
      {icon}
      <span className="text-xs">{label}</span>
    </Link>
  );
}
