import React from "react";
import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";

const Styles = styled.div`
  .navbar {
    background-color: #b2b2b2;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #1f1f1f;
  }

  .navbar-brand:hover,
  .navbar-nav .nav-link:hover {
    color: #ffebcd;
  }
`;

export class NavigationBar extends React.Component {
  render() {
    let lMenu = (
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavLink href="./home">Start</NavLink>
          <NavLink href="./ansprechpartner">Ansprechpartner</NavLink>
          <NavLink href="./projekte">Projekte</NavLink>
        </Nav>
      </Navbar.Collapse>
    );

    return (
      <Styles>
        <Navbar expand="lg">{lMenu}</Navbar>
      </Styles>
    );
  }
}

export default NavigationBar;
