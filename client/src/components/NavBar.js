import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Button,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
} from "@blueprintjs/core";
// import {Container } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logoutButton";
import LoginButton from "./loginButton";
import "./style.css";
// still need to modify a few more things. Here's the link to the site for Blueprint Nav: https://blueprintjs.com/docs/#core/components/navbar.fixed-to-viewport-top
const MainNav = () => (
  <Navbar>
    <NavbarGroup className="mr-auto">
      <NavbarHeading>
        <Link to="/" exact activeClassName="router-link-exact-active">
          <Button className="bp3-button bp3-minimal bp3-icon-home">Home</Button>
        </Link>
      </NavbarHeading>
      <NavbarDivider />
      <Link to="/profile" exact activeClassName="router-link-exact-active">
        <Button className="bp3-button bp3-minimal bp3-icon-user">
          Profile
        </Button>
      </Link>
      <Link to="/currentlist" exact activeClassName="router-link-exact-active">
        <Button className="bp3-button bp3-minimal bp3-icon-document">
          CurrentList
        </Button>
      </Link>
      <AuthNav />
    </NavbarGroup>
  </Navbar>
);
const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Navbar className="logButton">
      {isAuthenticated ? (
        <LogoutButton className="logout" />
      ) : (
        <LoginButton className="login" />
      )}
    </Navbar>
  );
};

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="md">
      {/* <Container> */}
      {/* <Navbar.Brand className="logo" to="/" /> */}
      <MainNav />
      {/* </Container> */}
    </Navbar>
  );
};

export default NavBar;
