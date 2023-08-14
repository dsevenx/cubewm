import React from "react";

import { Row, Col, Button, Form, Modal } from "react-bootstrap";

export class Wohnmobilreservieren extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHide: false,
    };

    this.handleSubmitWohnmobilreservieren = this.handleSubmitWohnmobilreservieren.bind(
      this
    );
    this.handleModalShowHide = this.handleModalShowHide.bind(this);
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  handleSubmitWohnmobilreservieren(event) {
    event.preventDefault();

    window.open(
      "mailto:webmaster@immo-service-app.com?subject=Registrierung bei immo-service-app.com&body=Liebes immo-service-app.com-Team, %0D%0A %0D%0Abitte legen Sie einen Account für unsere Wohnungsgesellschaft mit dem %0D%0A %0D%0A" +
        "Namen        %0D%0A" +
        "Straße       %0D%0A" +
        "Ort          %0D%0A" +
        "Postleitzahl %0D%0A" +
        "%0D%0A" +
        "Wir benötigen zum Start 1 Nutzer." +
        "%0D%0A" +
        "%0D%0A" +
        "Vielen Dank "
    );
  }

  render() {
    let lButtonText = this.props.titel + " (" + this.props.id + ")";

    return (
      <>
        <Button
          variant="primary"
          size="sm"
          onClick={() => {
            this.handleModalShowHide();
          }}
        >
          {lButtonText}
        </Button>

        <div className="container">
          <Modal show={this.state.showHide}>
            <Modal.Header
              closeButton
              onClick={() => this.handleModalShowHide()}
            >
              <Modal.Title>{this.props.titel}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Row>
                <Col sm={12}>
                  <Form onSubmit={this.handleSubmitWohnmobilreservieren}>
                    <Form.Group controlId="Name">
                      <Form.Label className="mb-2 labelfarbe">Name</Form.Label>
                      <Form.Control
                        className="mb-2"
                        type="text"
                        name="name"
                        maxLength="100"
                      />
                    </Form.Group>

                    <Form.Group controlId="Vorname">
                      <Form.Label className="mb-2 labelfarbe">
                        Vorname
                      </Form.Label>
                      <Form.Control
                        className="mb-2"
                        type="text"
                        name="vorname"
                        maxLength="100"
                      />
                    </Form.Group>

                    <Form.Group controlId="mobilnummer">
                      <Form.Label className="mb-2 labelfarbe">
                        Mobiltelefonnummer
                      </Form.Label>
                      <Form.Control
                        className="mb-2"
                        type="text"
                        name="mobilnummer"
                        maxLength="100"
                        defaultValue="+49"
                      />
                    </Form.Group>

                    <Form.Group controlId="beginn">
                      <Form.Label className="mb-2 labelfarbe">
                        Beginn
                      </Form.Label>
                      <Form.Control
                        className="mb-2"
                        type="date"
                        name="beginn"
                        defaultValue={this.props.beginn}
                      />
                    </Form.Group>

                    <Form.Group controlId="ende">
                      <Form.Label className="mb-2 labelfarbe">Ende</Form.Label>
                      <Form.Control
                        className="mb-2"
                        type="date"
                        name="ende"
                        defaultValue={this.props.ende}
                      />
                    </Form.Group>

                    <Form.Group controlId="saveButton">
                      <Form.Label className="mb-2 labelfarbe">
                        ACHTUNG: Erst mit dem Absenden der Email wird der
                        Reservierungswunsch finalisiert - wir antworten auf die
                        Absender-Emailadresse
                      </Form.Label>
                      <Button variant="primary" type="submit" className="mt-2">
                        diesen Reservierungswunsch an Cube-Wohnmobile senden
                        (Email-Client öffnet sich)
                      </Button>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => this.handleModalShowHide()}
              >
                Verlassen
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </>
    );
  }
}

export default Wohnmobilreservieren;
