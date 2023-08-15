import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "./Tipps.css";

export class Tipps extends Component {
  render() {
    return (
      <div className="mt-5 d-flex justify-content-middle">
        <Container>
          <Row className="mr-3 mb-3">
            <Col>
              <h3>Tipps und Hinweise</h3>
            </Col>
          </Row>

          <Row className="mr-3 mb-3">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h4>Führerschein und Zulassung</h4>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div class="hoehe">
                        Überprüfen Sie, ob Ihr Führerschein die benötigte Klasse
                        für das Zugfahrzeug und den Caravan abdeckt. Stellen Sie
                        sicher, dass der Caravan ordnungsgemäß zugelassen ist.
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
                    <h3>Gesamtgewicht und Beladung</h3>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div class="hoehe">
                        Achten Sie darauf, dass der Caravan nicht überladen
                        wird. Beachten Sie das zulässige Gesamtgewicht des
                        Caravans und die richtige Verteilung der Ladung im
                        Inneren.
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
                    <h3>Sicherheitseinrichtungen</h3>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div class="hoehe">
                        Überprüfen Sie regelmäßig die Sicherheitseinrichtungen
                        wie Bremsen, Reifen, Beleuchtung und Fahrwerk des
                        Caravans, um sicherzustellen, dass alles einwandfrei
                        funktioniert.
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
                    <h3>Stellplatzwahl</h3>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div class="hoehe">
                        Wählen Sie sorgfältig Ihren Stellplatz auf
                        Campingplätzen oder Raststätten aus. Achten Sie auf eine
                        ebene Fläche und ausreichend Platz für das Rangieren des
                        Caravans.
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
                    <h3>Ausrüstung</h3>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div class="hoehe">
                        Stellen Sie sicher, dass Sie die richtige Ausrüstung für
                        das Campen dabei haben, einschließlich Stromkabel,
                        Wasseranschluss, Gasversorgung, Campingmöbel, Geschirr
                        und Küchenausstattung.
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
                    <h3>Verkehrsvorschriften</h3>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div class="hoehe">
                        Beachten Sie die spezifischen Verkehrsregeln und
                        Geschwindigkeitsbegrenzungen für das Fahren mit einem
                        Caravan in verschiedenen Ländern.
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
                    <h3>Versicherung und Pannenhilfe</h3>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div class="hoehe">
                        Überprüfen Sie Ihre Versicherungspolicen, um
                        sicherzustellen, dass sowohl das Zugfahrzeug als auch
                        der Caravan ausreichend abgesichert sind. Informieren
                        Sie sich auch über Pannenhilfeleistungen im Falle von
                        Problemen unterwegs.
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
                    <h3>Umweltaspekte</h3>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div class="hoehe">
                        Achten Sie auf umweltfreundliches Verhalten beim Campen,
                        wie Mülltrennung, sparsamen Wasserverbrauch und den
                        korrekten Umgang mit Abwässern.
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
                    <h3>Wetterbedingungen</h3>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div class="hoehe">
                        Informieren Sie sich über die Wetterbedingungen am
                        Zielort, um entsprechende Vorbereitungen zu treffen und
                        sich auf mögliche Herausforderungen vorzubereiten.
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
                    <h3>Routenplanung</h3>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div class="hoehe">
                        Planen Sie Ihre Route im Voraus und informieren Sie sich
                        über eventuelle Straßenbeschränkungen oder Mautgebühren
                        für grössere Fahrzeuge.
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
                    <h3>Kommunikation</h3>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div class="hoehe">
                        Stellen Sie sicher, dass Sie über geeignete
                        Kommunikationsmittel verfügen, um im Notfall erreichbar
                        zu sein, insbesondere wenn Sie in entlegene Gebiete
                        reisen.
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
                    <h3>Entspannung und Genuss</h3>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div class="hoehe">
                        Vergessen Sie nicht, dass Caravaning auch dazu dient,
                        die Natur zu genießen und sich zu erholen. Planen Sie
                        ausreichend Zeit für Entspannung und Aktivitäten ein.
                      </div>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mr-3 mb-3">
            <Col>
              {" "}
              <p> </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
