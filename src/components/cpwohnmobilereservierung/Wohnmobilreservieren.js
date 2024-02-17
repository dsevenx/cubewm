import React from "react";

import { Row, Col, Button, Form, Modal } from "react-bootstrap";
import { GetDatum } from "../tech/GetDatum";

export class Wohnmobilreservieren extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHide: false,
      beginn: "",
      ende: "",
      name: "",
      vorname: "",
      mobilnummer: "",
    };

    this.handleSubmitWohnmobilreservieren = this.handleSubmitWohnmobilreservieren.bind(
      this
    );
    this.handleModalShowHide = this.handleModalShowHide.bind(this);
    this.istZuDisablen = this.istZuDisablen.bind(this);
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  onChangeBeginn(event) {
    if (event.target.value && event.target.value !== "") {
      this.setState({ beginn: GetDatum(event.target.value) });
    } else {
      this.setState({ beginn: "" });
    }
  }
  onChangeEnde(event) {
    if (event.target.value && event.target.value !== "") {
      this.setState({ ende: GetDatum(event.target.value) });
    } else {
      this.setState({ ende: "" });
    }
  }
  onChangeName(event) {
    if (event.target.value && event.target.value !== "") {
      this.setState({ name: event.target.value });
    } else {
      this.setState({ name: "" });
    }
  }
  onChangeVorname(event) {
    if (event.target.value && event.target.value !== "") {
      this.setState({ vorname: event.target.value });
    } else {
      this.setState({ vorname: "" });
    }
  }
  onChangeMobilnummer(event) {
    if (
      event.target.value &&
      event.target.value !== "" &&
      event.target.value !== "+49"
    ) {
      this.setState({ mobilnummer: event.target.value });
    } else {
      this.setState({ mobilnummer: "" });
    }
  }

  istZuDisablen() {
    if (
      this.state.beginn !== "" &&
      this.state.ende !== "" &&
      this.state.name !== "" &&
      this.state.vorname !== "" &&
      this.state.mobilnummer !== ""
    ) {
      return false;
    }

    return true;
  }

  handleSubmitWohnmobilreservieren(event) {
    event.preventDefault();

    window.open(
      "mailto:thomas@cube-wohnmobile.de?subject=Reservierung Wohmobil " +
        this.props.id +
        " bei www.cube-wohnmobile.de&body=Liebes cube-wohnmobile-Team, %0D%0A %0D%0A" +
        "wir würden gern das Wohnmobil " +
        this.props.id +
        " für den Zeitraum %0D%0A %0D%0A" +
        "vom " +
        this.state.beginn +
        " bis " +
        this.state.ende +
        "%0D%0A" +
        "%0D%0A" +
        "reservieren." +
        "%0D%0A" +
        "%0D%0A" +
        "Bitte teilen Sie uns den zu erwartenden Gesamtpreis mit." +
        "%0D%0A" +
        "%0D%0A" +
        "Wir sind erreichbar unter " +
        event.target.mobilnummer.value +
        "." +
        "%0D%0A" +
        "%0D%0A" +
        "Vielen Dank und Viele Grüße " +
        event.target.vorname.value +
        " " +
        event.target.name.value +
        "%0D%0A" +
        "%0D%0A" +
        "P.S.  Anfahrtsbeschreibung: " +
        "Sie finden uns an der Autobahn A2, zwischen den Abfahrten Uhrsleben und Alleringersleben." +
        "%0D%0A" +
        "%0D%0A" +
        "Aus Richtung Berlin kommend, Abfahrt Uhrsleben nehmen, an der Abfahrt rechts und der Beschilderung Richtung Erxleben folgen: " +
        "%0D%0A" +
        "https://goo.gl/maps/D7ZSMzvu9f6L42tf6" +
        "%0D%0A" +
        "%0D%0A" +
        "Aus Richtung Hannover nehmen Sie die Ausfahrt Alleringersleben, biegen rechts ab und am Ende der Straße nach rechts auf die Bundesstraße 1. Der B1 folgen finden Sie uns im Ortskern gegenüber dem Edeka-Parkplatz : " +
        "%0D%0A" +
        "https://goo.gl/maps/D7ZSMzvu9f6L42tf6"
    );
  }

  render() {
    let lButtonText = this.props.titel + " (" + this.props.id + ")";

    return (
      <>
        <Button
          variant="primary"
          size="sm"
          disabled="true"
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
                    <Form.Group controlId="name">
                      <Form.Label className="mb-2 labelfarbe">Name</Form.Label>
                      <Form.Control
                        className="mb-2"
                        type="text"
                        name="name"
                        maxLength="100"
                        onChange={this.onChangeName.bind(this)}
                      />
                    </Form.Group>

                    <Form.Group controlId="vorname">
                      <Form.Label className="mb-2 labelfarbe">
                        Vorname
                      </Form.Label>
                      <Form.Control
                        className="mb-2"
                        type="text"
                        name="vorname"
                        maxLength="100"
                        onChange={this.onChangeVorname.bind(this)}
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
                        onChange={this.onChangeMobilnummer.bind(this)}
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
                        onChange={this.onChangeBeginn.bind(this)}
                      />
                    </Form.Group>

                    <Form.Group controlId="ende">
                      <Form.Label className="mb-2 labelfarbe">Ende</Form.Label>
                      <Form.Control
                        className="mb-2"
                        type="date"
                        name="ende"
                        onChange={this.onChangeEnde.bind(this)}
                      />
                    </Form.Group>

                    <Form.Group controlId="saveButton">
                      <Form.Label className="mb-2 labelfarbe">
                        ACHTUNG: Erst mit dem Absenden der Email wird der
                        Reservierungswunsch abgeschlossen. Wir antworten auf die
                        Absender-Emailadresse.
                      </Form.Label>
                      <Button
                        variant="primary"
                        type="submit"
                        className="mt-2"
                        disabled={this.istZuDisablen()}
                      >
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
