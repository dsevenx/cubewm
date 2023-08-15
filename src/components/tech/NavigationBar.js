import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap"; //  NavDropdown
//import styled from "styled-components";
import { Row, Col, Container, Image } from "react-bootstrap";
import IMG_ICON from "../../assets/IMG_ICON.png";
import "./Navbar.css";

/*
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
*/

export class NavigationBar extends React.Component {
  render() {
    let lMenu = (
      <Nav className="ms-auto">
        <NavLink href="./wohnmobile">
          {" "}
          <div className="schrift_wohnmobile">Wohnmobile </div>
        </NavLink>
      </Nav>
    );

    return (
      <Navbar expand="lg" id="navbarselbst">
        <Navbar.Brand href="/">
          <Container fluid="md">
            <Row>
              <Col>
                <Image
                  src={IMG_ICON}
                  alt="es fehlt IMG_ICON"
                  fluid
                  className="card-img-top"
                />
              </Col>
              <Col>
                <div className="schrift_slogan">
                  ... für nichts anderes ist Zeit
                </div>
              </Col>
            </Row>
          </Container>
        </Navbar.Brand>
        {lMenu}
      </Navbar>
    );
  }
}

export default NavigationBar;
