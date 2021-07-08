import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { withRouter } from "react-router";

const Header = () => {
  const auth_token = localStorage.getItem("auth_token");
  const history = useHistory();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">RD-Block</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {auth_token ? (
              <Nav className="ml-auto">
                <NavLink
                  className="text-light text-decoration-none mx-2"
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className="text-light text-decoration-none mx-2"
                  to="/add-blog"
                >
                  Add-Blog
                </NavLink>
                <div
                  style={{ cursor: "pointer" }}
                  className="text-light text-decoration-none mx-2"
                  onClick={() => {
                    localStorage.clear("auth_token");
                    history.push("/login");
                  }}
                >
                  Logout
                </div>
              </Nav>
            ) : (
              <Nav className="ml-auto">
                <NavLink
                  className="text-light text-decoration-none mx-2"
                  to="/login"
                >
                  Login
                </NavLink>
                <NavLink
                  className="text-light text-decoration-none mx-2"
                  to="/signup"
                >
                  Signup
                </NavLink>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default withRouter(Header);
