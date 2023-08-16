import React, { Component } from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import IMG_1 from "../assets/IMG_1.jpg";
import IMG_2 from "../assets/IMG_2.jpg";
import IMG_3 from "../assets/IMG_3.jpg";

export class Startkarten extends Component {
  render() {
    return (
      <div className="mt-5 d-flex justify-content-middle">
        <Container>
          <Row className="mr-3 mb-3">
            <Col>
              <h3>
                Wir sind der Wohnmobilevermieter für Sachsenanhalt. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui
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
