import React, { Component } from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import IMG_1 from "../assets/IMG_1.png";
import IMG_2 from "../assets/IMG_2.jpg";
import IMG_3 from "../assets/IMG_3.png";

export class Startkarten extends Component {
  render() {
    return (
      <div className="mt-5 d-flex justify-content-middle">
        <Container>
          <Row className="mr-3 mb-3">
            <Col>
              <h3>
                Entdecke unvergessliche Abenteuer mit Cube-Wohnmobile! Unsere
                top-modernen Wohnmobile bieten Dir die Freiheit, die Schönheit
                der Regionen in vollem Komfort zu erkunden. Ob malerische
                Naturorte oder charmante Städte – Du entscheidest, wohin Dich
                Deine Reise führt. Genieße den Luxus unserer bestens
                ausgestatteten Wohnmobile, die Euch ein Zuhause unterwegs
                bieten. Cube-Wohnmobile macht es leicht von Magdeburg /
                Sachsen-Anhalt aus, den Alltag hinter sich zu lassen und neue
                Horizonte zu entdecken. Erlebe den Reiz des Caravanning mit
                Cube-Wohnmobile. Dein Abenteuer beginnt hier!
              </h3>
            </Col>
          </Row>

          <Row className="mr-3 mb-3">
            <Col>
              <Card>
                <Image
                  src={IMG_1}
                  alt="es fehlt IMG_1"
                  fluid
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Wohnmobile suchen</h3>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      Zu unseren vermietbaren Wohnmobilen geht es
                      <Card.Link href="./wohnmobile"> hier entlang</Card.Link>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Image
                  src={IMG_2}
                  alt="es fehlt IMG_2"
                  fluid
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Schaden</h3>
                  </Card.Title>
                  <Card.Text className="mb-3">
                    <p>
                      Sie haben ein Wohnmobil von uns gemietet und haben ein
                      Schaden , dann bitte{" "}
                      <Card.Link href="./schaden"> hier entlang </Card.Link>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Image
                  src={IMG_3}
                  alt="es fehlt IMG_3"
                  fluid
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Tipps</h3>
                  </Card.Title>
                  <Card.Text className="mb-3">
                    <p>
                      Sie sind neu beim Caravaning, dann haben wir ein paar
                      Tipps für Sie - bitte{"  "}
                      <Card.Link href="./tipps"> hier entlang </Card.Link>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <p>
                {" "}
                <br />
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
