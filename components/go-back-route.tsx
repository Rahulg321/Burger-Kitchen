"use client";

import { ArrowLeft, MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

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
      <FaArrowLeftLong className="" />
    </Button>
  );
};

export default PreviousPageButton;
