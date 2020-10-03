import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logoutButton";
import LoginButton from "./loginButton";
// still need to modify a few more things. Here's the link to the site for Blueprint Nav: https://blueprintjs.com/docs/#core/components/navbar.fixed-to-viewport-top
const MainNav = () => (
	<Nav className="mr-auto">
		<Nav.Link
			as={RouterNavLink}
			to="/"
			exact
			activeClassName="router-link-exact-active"
		>
			<button class="bp3-button bp3-minimal bp3-icon-home">Home</button>
		</Nav.Link>

		<Nav.Link
			as={RouterNavLink}
			to="/profile"
			exact
			activeClassName="router-link-exact-active"
		>
			<button class="bp3-button bp3-minimal bp3-icon-user">Profile</button>
		</Nav.Link>
		<Nav.Link
			as={RouterNavLink}
			to="/currentlist"
			exact
			activeClassName="router-link-exact-active"
		>
			<button class="bp3-button bp3-minimal bp3-icon-document">
				CurrentList
			</button>
		</Nav.Link>
	</Nav>
);

const AuthNav = () => {
	const { isAuthenticated } = useAuth0();

	return (
		<Navbar className="justify-content-end">
			{isAuthenticated ? <LogoutButton /> : <LoginButton />}
		</Navbar>
	);
};

const NavBar = () => {
	return (
		<Navbar bg="dark" expand="md">
			<Container>
				<Navbar.Brand as={RouterNavLink} className="logo" to="/" />
				<MainNav />
				<AuthNav />
			</Container>
		</Navbar>
	);
};

export default NavBar;
