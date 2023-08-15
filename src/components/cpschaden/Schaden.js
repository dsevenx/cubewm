import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "./Schaden.css";
import { ButtonGroup, ButtonToolbar } from "react-bootstrap";
import Schadenmeldung from "./Schadenmeldung";

export class Schaden extends Component {
  render() {
    return (
      <div className="mt-5 d-flex justify-content-middle">
        <Container>
          <Row className="mr-3 mb-3">
            <Col>
              <h3>Was im Schadenfall ?</h3>
            </Col>
          </Row>

          <Row>
            <Col>
              <Container>
                <Row>
                  <Col>
                    <Row className="mr-3 mb-3">
                      <Col>
                        <Card>
                          <Card.Body>
                            <Card.Title>
                              <h4>1. Sicherheit und Erste Hilfe</h4>
                            </Card.Title>

                            <Card.Text className="mb-3">
                              <p>
                                <div class="hoehe">
                                  Stellen Sie sicher, dass alle Insassen des
                                  Wohnmobils in Sicherheit sind. Bei
                                  Verletzungen oder medizinischen Notfällen
                                  sollten Sie umgehend medizinische Hilfe in
                                  Anspruch nehmen.
                                </div>
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>

                    <Row className="mr-3 mb-3">
                      <Col>
                        <Card>
                          <Card.Body>
                            <Card.Title>
                              <h3>2. Dokumentation des Schadens</h3>
                            </Card.Title>

                            <Card.Text className="mb-3">
                              <p>
                                <div class="hoehe">
                                  Machen Sie Fotos von allen beschädigten
                                  Bereichen des Wohnmobils. Halten Sie den
                                  Schaden so detailliert wie möglich auf Fotos
                                  fest, um die spätere Kommunikation mit dem
                                  Vermieter oder der Versicherung zu
                                  unterstützen.
                                </div>
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>

                    <Row className="mr-3 mb-3">
                      <Col>
                        <Card>
                          <Card.Body>
                            <Card.Title>
                              <h3>3. Unfallbericht</h3>
                            </Card.Title>

                            <Card.Text className="mb-3">
                              <p>
                                <div class="hoehe">
                                  Erstellen Sie einen Unfallbericht, der die
                                  Umstände des Schadens erklärt. Notieren Sie
                                  Datum, Uhrzeit, Ort, beteiligte Parteien
                                  (falls zutreffend), Wetterbedingungen und
                                  andere relevante Details.
                                </div>
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row className="mr-3 mb-3">
                      <Col>
                        <Card>
                          <Card.Body>
                            <Card.Title>
                              <h3>4. Polizeibericht</h3>
                            </Card.Title>

                            <Card.Text className="mb-3">
                              <p>
                                <div class="hoehe">
                                  Falls der Schaden aufgrund eines Unfalls mit
                                  einer anderen Partei verursacht wurde, sollten
                                  Sie die örtliche Polizei informieren und einen
                                  Unfallbericht erstellen lassen.
                                </div>
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row className="mr-3 mb-3">
                      <Col>
                        <Card>
                          <Card.Body>
                            <Card.Title>
                              <h3>5. Reparaturen</h3>
                            </Card.Title>

                            <Card.Text className="mb-3">
                              <p>
                                <div class="hoehe">
                                  Je nach Schwere des Schadens sollten Sie
                                  Reparaturen nur nach Rücksprache mit uns
                                  durchführen lassen. Eigenmächtige Reparaturen
                                  könnten Auswirkungen auf die
                                  Versicherungsansprüche haben.
                                </div>
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row className="mr-3 mb-3">
                      <Col>
                        <Card>
                          <Card.Body>
                            <Card.Title>
                              <h3>6. Allgemeines</h3>
                            </Card.Title>

                            <Card.Text className="mb-3">
                              <p>
                                <div class="hoehe">
                                  Es ist wichtig, ruhig und kooperativ zu
                                  bleiben, wenn es zu einem Schaden kommt. Die
                                  genauen Schritte können je nach örtlichen
                                  Gesetzen variieren.
                                </div>
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col>
              <div class="col-xs-1" align="center">
                <Schadenmeldung></Schadenmeldung>
              </div>
            </Col>
          </Row>
          <Row className="mr-3 mb-3">
            <Col>
              {" "}
              <p> </p>
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
