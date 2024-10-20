import SignUpForm from "@/components/forms/signup-form";
import PreviousPageButton from "@/components/go-back-route";
import React from "react";

const SignUpPage = () => {
  return (
    <section>
      <PreviousPageButton />
      <h2>Sign up</h2>
      <SignUpForm />
    </section>
  );
};

export default SignUpPage;
