import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { NavBar, Loading, PrivateRoute } from "./components";
import { Home, Profile, Currentlist } from "./views";
import { useAuth0 } from "@auth0/auth0-react";
import "./app.css";

const App = () => {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Container className="flex-grow-1 mt-5">
        <Switch>
          {/* <PrivateRoute path="/" exact component={Currentlist} /> */}
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/currentlist" component={Currentlist} />
        </Switch>
      </Container>
    </div>
  );
};

export default App;
