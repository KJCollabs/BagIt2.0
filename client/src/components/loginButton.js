import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@blueprintjs/core";
import "./style.css";
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      onClick={() => loginWithRedirect()}
      intent="success"
      className="login"
    >
      Log In
    </Button>
  );
};

export default LoginButton;
