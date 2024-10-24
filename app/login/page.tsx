import LoginForm from "@/components/forms/login-form";
import PreviousPageButton from "@/components/go-back-route";
import React from "react";

const LoginPage = () => {
  return (
    <section className="block-space big-container">
      <div className="mb-4 flex items-center">
        <PreviousPageButton />
        <h2>Log in</h2>
      </div>
      <LoginForm />
      <p className="mt-auto text-center">
        Powered by <span className="font-bold">RAVING FANS</span>
      </p>
    </section>
  );
};

export default LoginPage;
