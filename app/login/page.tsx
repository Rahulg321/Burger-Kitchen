import LoginForm from "@/components/forms/login-form";
import PreviousPageButton from "@/components/go-back-route";
import React from "react";

const LoginPage = () => {
  return (
    <section>
      <PreviousPageButton />
      <h2>Log in</h2>
      <LoginForm />
    </section>
  );
};

export default LoginPage;
