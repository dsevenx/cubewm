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
                <a href="./impressum">
                  <div className="main-footer">
                    {lJahr} Cube-Wohnmobile-Impressum
                  </div>
                </a>
              </Col>
              <Col>All rights reserved</Col>
              <Col>
                <a href="./datenschutz">
                  {" "}
                  <div className="main-footer">Datenschutz </div>
                </a>
              </Col>
            </Row>
            <Row></Row>
          </Container>
        </div>
      </div>
    );
  }
}
