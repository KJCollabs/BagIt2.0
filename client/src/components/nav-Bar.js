import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "@blueprintjs/core";

import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logoutButton";
import LoginButton from "./loginButton";

const MainNav = () => (
	<Navbar className="mr-auto">
		<Nav.Link
			as={RouterNavLink}
			to="/"
			exact
			activeClassName="router-link-exact-active"
		>
			Home
		</Nav.Link>

		<Nav.Link
			as={RouterNavLink}
			to="/profile"
			exact
			activeClassName="router-link-exact-active"
		>
			Profile
		</Nav.Link>

		<Nav.Link
			as={RouterNavLink}
			to="/currentlist"
			exact
			activeClassName="router-link-exact-active"
		>
			Currentlist
		</Nav.Link>
	</Navbar>
);

const AuthNav = () => {
	const { isAuthenticated } = useAuth0();

	return (
		<Nav className="justify-content-end">
			{isAuthenticated ? <LogoutButton /> : <LoginButton />}
		</Nav>
	);
};

const NavBar = () => {
	return (
		<Navbar bg="light" expand="md">
			<Container>
				<Navbar.Brand as={RouterNavLink} className="logo" to="/" />
				<MainNav />
				<AuthNav />
			</Container>
		</Navbar>
	);
};

export default NavBar;
