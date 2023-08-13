import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

export class Footer extends Component {
  render() {
    const lJahr = new Date().getFullYear();
    return (
      <div className="main-footer-all">
        <div className="main-footer">
          <Container>
            <Row></Row>
            <Row className="mr-3 mb-2 mt-2">
              <Col>
                <a href="./impressum">@{lJahr} Cube-Wohnmobile / Impressum</a>
              </Col>
              <Col>All rights reserved</Col>
            </Row>
            <Row></Row>
            <Row className="mr-3 mb-2 mt-2">
              <Col>
                <a href="./datenschutz">Datenschutz</a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
