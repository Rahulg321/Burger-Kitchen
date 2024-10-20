import { Activity, Gift, Home, Timer, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const AppBar = () => {
  return (
    <div className="flex justify-around border px-6 py-4">
      <NavLogo icon={<Home />} href={`/home`} label="Home" />
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
      <span>{label}</span>
    </Link>
  );
}
