import React from "react";

import { Row, Col, Button, Form, Modal, Container } from "react-bootstrap";
import { GetDatum } from "../tech/GetDatum";

export class Schadenmeldung extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHide: false,
      datum: "",
      ort: "",
    };

    this.handleSubmitSchadenmeldung = this.handleSubmitSchadenmeldung.bind(
      this
    );
    this.handleModalShowHide = this.handleModalShowHide.bind(this);
    this.istZuDisablen = this.istZuDisablen.bind(this);
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  onChangeDatum(event) {
    if (event.target.value && event.target.value !== "") {
      this.setState({ datum: GetDatum(event.target.value) });
    } else {
      this.setState({ datum: "" });
    }
  }
  onChangeOrt(event) {
    if (event.target.value && event.target.value !== "") {
      this.setState({ ort: event.target.value });
    } else {
      this.setState({ ort: "" });
    }
  }

  istZuDisablen() {
    if (this.state.datum !== "" && this.state.ort !== "") {
      return false;
    }

    return true;
  }

  handleSubmitSchadenmeldung(event) {
    event.preventDefault();

    let lTelefonsatz =
      "Sie können mich unter der gespeicherten Telefonnummer erreichen";
    if (
      event.target.mobilnummer.value !== null &&
      event.target.mobilnummer.value !== ""
    ) {
      lTelefonsatz =
        "Sie können mich unter der gespeicherten Telefonnummer oder dieser hier " +
        event.target.mobilnummer.value +
        " erreichen";
    }

    let lZeitpunkt = this.state.datum;
    if (
      event.target.uhrzeit.value !== null &&
      event.target.uhrzeit.value !== ""
    ) {
      lZeitpunkt = this.state.datum + " (" + event.target.uhrzeit.value + ")";
    }

    window.open(
      "mailto:thomas@cube-wohnmobile.de?subject=Schaden bei Wohmobil " +
        "&body=Liebes cube-wohnmobile-Team, %0D%0A %0D%0A" +
        "leider sind wir mit dem Wohnmobil in einen Schaden verwicklet worden. " +
        "%0D%0A" +
        "Der Vorfall passierte am " +
        lZeitpunkt +
        "." +
        "%0D%0A" +
        "Wir waren gerade bei " +
        this.state.ort +
        "." +
        "%0D%0A" +
        "%0D%0A" +
        "Folgende beteiligte Parteien : " +
        "%0D%0A" +
        event.target.beteiligteParteien.value +
        "." +
        "%0D%0A" +
        "%0D%0A" +
        "Folgende Details : " +
        "%0D%0A" +
        event.target.details.value +
        "." +
        "%0D%0A" +
        "%0D%0A" +
        lTelefonsatz +
        "%0D%0A" +
        "%0D%0A" +
        "Vielen Dank und Viele Grüße "
    );
  }

  render() {
    let lButtonText = "Schaden an Cube-Wohnmobile melden.";

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
              <Modal.Title>{lButtonText}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Row>
                <Col sm={12}>
                  <Form onSubmit={this.handleSubmitSchadenmeldung}>
                    <Container>
                      <Row>
                        <Col>
                          <Form.Group controlId="datum">
                            <Form.Label className="mb-2 labelfarbe">
                              Datum
                            </Form.Label>
                            <Form.Control
                              className="mb-2"
                              type="date"
                              name="datum"
                              onChange={this.onChangeDatum.bind(this)}
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group controlId="uhrzeit">
                            <Form.Label className="mb-2 labelfarbe">
                              Uhrzeit
                            </Form.Label>
                            <Form.Control
                              className="mb-2"
                              type="text"
                              name="uhrzeit"
                              maxLength="20"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Container>

                    <Form.Group controlId="ort">
                      <Form.Label className="mb-2 labelfarbe">Ort</Form.Label>
                      <Form.Control
                        className="mb-2"
                        type="text"
                        name="ort"
                        maxLength="100"
                        onChange={this.onChangeOrt.bind(this)}
                      />
                    </Form.Group>

                    <Form.Group controlId="beteiligteParteien">
                      <Form.Label className="mb-2 labelfarbe">
                        beteiligte Parteien
                      </Form.Label>
                      <Form.Control
                        className="mb-2"
                        type="text"
                        as="textarea"
                        rows="1"
                        name="beteiligteParteien"
                        maxLength="500"
                      />
                    </Form.Group>

                    <Form.Group controlId="details">
                      <Form.Label className="mb-2 labelfarbe">
                        weitere Details
                      </Form.Label>
                      <Form.Control
                        className="mb-2"
                        type="text"
                        as="textarea"
                        rows="1"
                        name="datails"
                        maxLength="500"
                      />
                    </Form.Group>

                    <Form.Group controlId="mobilnummer">
                      <Form.Label className="mb-2 labelfarbe">
                        weitere Telefonnummer
                      </Form.Label>
                      <Form.Control
                        className="mb-2"
                        type="text"
                        name="mobilnummer"
                        maxLength="100"
                        defaultValue=""
                      />
                    </Form.Group>

                    <Form.Group controlId="saveButton">
                      <Form.Label className="mb-2 labelfarbe">
                        ACHTUNG: Erst mit dem Absenden der Email wird der
                        Schaden wirklich an uns gemeldet. Wir rufen Sie dann so
                        schnell wie möglich zurück.
                      </Form.Label>
                      <Button
                        variant="primary"
                        type="submit"
                        className="mt-2"
                        disabled={this.istZuDisablen()}
                      >
                        diese Schadenmeldung an Cube-Wohnmobile senden
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

export default Schadenmeldung;
