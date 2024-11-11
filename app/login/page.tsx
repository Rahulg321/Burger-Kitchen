import LoginForm from "@/components/forms/login-form";
import PreviousPageButton from "@/components/go-back-route";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGoogle } from "react-icons/fa6";
import { BsApple } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import SocialMediaLink from "@/components/SocialMediaLink";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to Burger Kitchen",
};

const LoginPage = async () => {
  return (
    <section className="block-space big-container flex min-h-screen flex-col">
      <div className="relative mb-4 flex w-full items-center">
        <PreviousPageButton />
        <h3 className="font-pduRegular absolute inset-0 mx-auto text-center font-semibold uppercase tracking-wide">
          Login
        </h3>
      </div>
      <div className="mt-2">
        <LoginForm /> {/* Fixed bottom content */}
      </div>
      <div className="mt-auto space-y-4 pb-4">
        <Button type="submit" className="font-pduRegular w-full py-6 uppercase">
          Log in
        </Button>

        <div className="">
          <div className="mt-6 flex items-center justify-center">
            <span className="flex-1 border-t border-gray-300"></span>
            <span className="px-4 text-sm font-bold">Or Continue With</span>
            <span className="flex-1 border-t border-gray-300"></span>
          </div>

          <div className="mt-4 flex justify-around">
            <SocialMediaLink icon={FaGoogle} />
            <SocialMediaLink icon={BsApple} />
            <SocialMediaLink icon={FaFacebook} />
          </div>
        </div>

        <span className="mt-6 block text-center text-sm text-muted-foreground">
          Create a new Account{" "}
          <Link href={"/signup"} className="text-mainYellow">
            Signup
          </Link>
        </span>
        <p className="text-center">
          Powered by <span className="font-bold">RAVING FANS</span>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
