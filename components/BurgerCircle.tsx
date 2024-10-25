"use client";

import { useState } from "react";
import { CiBurger } from "react-icons/ci";

export default function BurgerCircle({
  showBurgerIcon,
}: {
  showBurgerIcon?: boolean;
}) {
  const [showBurger, setShowBurger] = useState(showBurgerIcon);

  return (
    <div className="my-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white p-1">
      {showBurger ? <CiBurger className="text-mainYellow" size={24} /> : null}
    </div>
  );
}
