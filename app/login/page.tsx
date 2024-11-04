import LoginForm from "@/components/forms/login-form";
import PreviousPageButton from "@/components/go-back-route";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

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
      <LoginForm /> {/* Fixed bottom content */}
      <div className="mt-auto space-y-2 pb-4">
        <Button type="submit" className="font-pduRegular w-full py-6 uppercase">
          Log in
        </Button>
        <Button
          type="submit"
          className="font-pduRegular w-full py-6 uppercase"
          variant={"outline"}
        >
          <FcGoogle /> Continue With Google
        </Button>
        <span className="mt-4 block text-center text-xs text-muted-foreground">
          Don&apos;t have an account?{" "}
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
