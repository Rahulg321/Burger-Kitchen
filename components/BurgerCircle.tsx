"use client";

import { useState } from "react";
import { CiBurger } from "react-icons/ci";

export default function BurgerCircle() {
  const [showBurger, setShowBurger] = useState(true);

  return (
    <div className="my-2 flex w-fit items-center justify-center rounded-full border-2 p-1">
      {showBurger ? <CiBurger className="text-mainYellow size-4" /> : null}
    </div>
  );
}
