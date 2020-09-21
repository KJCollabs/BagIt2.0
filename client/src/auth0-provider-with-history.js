import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Api from "./utils/API";

const Auth0ProviderWithHistory = ({ children }) => {
  const [auth0, setAuth0] = useState({
    clientId: "",
    domain: "",
  });

  const history = useHistory();

  useEffect(() => {
    Api.getAuth0().then((results) => {
      console.log(results);
      setAuth0({
        clientId: results.data.clientId,
        domain: results.data.domain,
      });
    });
  }, []);

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={
        auth0.domain.length > 0 ? auth0.domain : "dev-bvb5jton.us.auth0.com"
      }
      clientId={
        auth0.clientId.length > 0
          ? auth0.clientId
          : "VFhcLbHAAYYoc2fVEzBzEK7RO4E7ah9Q"
      }
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {console.log(auth0)}
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
