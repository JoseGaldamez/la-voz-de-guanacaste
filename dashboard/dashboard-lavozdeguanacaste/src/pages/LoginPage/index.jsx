import React from "react";
import { LoginForm } from "../../components/LoginForm";

import "./loginpage.css";

export const LoginPage = () => {
  return (
    <div className="page">
      <div className="form">
        <LoginForm />
      </div>
    </div>
  );
};
