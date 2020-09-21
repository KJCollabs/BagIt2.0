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
      domain={auth0.domain}
      clientId={auth0.clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {console.log(auth0)}
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
