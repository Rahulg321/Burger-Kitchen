import SignUpForm from "@/components/forms/signup-form";
import PreviousPageButton from "@/components/go-back-route";
import React from "react";

const SignUpPage = () => {
  return (
    <section className="block-space big-container">
      <div className="mb-4 flex items-center">
        <PreviousPageButton />
        <h2>Sign up</h2>
      </div>
      <SignUpForm />
      <p className="mt-auto text-center">
        Powered by <span className="font-bold">RAVING FANS</span>
      </p>
    </section>
  );
};

export default SignUpPage;
