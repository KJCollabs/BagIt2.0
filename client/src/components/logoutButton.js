import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@blueprintjs/core";
import "./style.css";
const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
      intent="danger"
      className="logout"
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
