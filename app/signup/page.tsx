import SignUpForm from "@/components/forms/signup-form";
import PreviousPageButton from "@/components/go-back-route";
import React from "react";

const SignUpPage = () => {
  return (
    <section className="block-space big-container">
      <div className="mb-4 flex items-center gap-8">
        <PreviousPageButton />
        <h3 className="font-pduRegular font-semibold uppercase tracking-wide">
          Sign up
        </h3>
      </div>
      <SignUpForm />
      <p className="mt-auto text-center">
        Crafted by <span className="font-bold">RAVING FANS</span>
      </p>
    </section>
  );
};

export default SignUpPage;
