import SignUpForm from "@/components/forms/signup-form";
import PreviousPageButton from "@/components/go-back-route";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up to Burger Kitchen",
};

const SignUpPage = async () => {
  return (
    <section className="block-space big-container">
      <div className="relative mb-4 flex w-full items-center">
        <PreviousPageButton />
        <h3 className="font-pduRegular absolute inset-0 mx-auto text-center font-semibold uppercase tracking-wide">
          Sign up
        </h3>
      </div>
      <SignUpForm />

      <span className="mt-4 block text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href={"/login"} className="text-mainYellow">
          Login
        </Link>
      </span>
      <p className="mt-auto text-center">
        Crafted by <span className="font-bold">RAVING FANS</span>
      </p>
    </section>
  );
};

export default SignUpPage;
