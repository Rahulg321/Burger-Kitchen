"use client";

import { ArrowLeft, MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

const PreviousPageButton = () => {
  const router = useRouter();

  return (
    <Button
      variant={"ghost"}
      onClick={() => {
        router.back();
      }}
      className=""
    >
      <ArrowLeft className="h-12 w-12" />
    </Button>
  );
};

export default PreviousPageButton;
