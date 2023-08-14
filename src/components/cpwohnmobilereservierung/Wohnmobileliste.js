import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Button, ButtonGroup, ButtonToolbar, Image } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";

import { Row, Col, Container } from "react-bootstrap";
import { GetKleineTabelleUebersicht } from "../tech/GetKleineTabelleUebersicht";

import IMG_MAIN_LMC from "../../assets/LMC/IMG_MAIN_LMC.jpeg";
import IMG_MAIN_VW from "../../assets/VW/IMG_MAIN_VW.jpeg";

export class Wohnmobileliste extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Wohnmobileimstate: [],
    };

    this.refreshWohnmobileListe = this.refreshWohnmobileListe.bind(this);
    this.getBildMain = this.getBildMain.bind(this);
  }

  refreshWohnmobileListe() {
    this.setState({
      Wohnmobileimstate: [
        {
          id: 10,
          imgmain: "IMG_MAIN_VW",
          ausstattung: [
            {
              key: "Motor",
              wert: "150 KW",
              typ: "zahl",
            },
            {
              key: "Anzahl Betten",
              wert: "2",
              typ: "zahl",
            },
            {
              key: "kuehlschrank",
              wert: "vorhanden",
              typ: "text",
            },
          ],
          preis: "ab 150 Euro pro Tag",
        },
        {
          id: 20,
          imgmain: "IMG_MAIN_LMC",
          ausstattung: [
            {
              key: "Motor",
              wert: "180 KW",
              typ: "zahl",
            },
            {
              key: "Anzahl Betten",
              wert: "4",
              typ: "zahl",
            },
            {
              key: "kuehlschrank",
              wert: "vorhanden",
              typ: "text",
            },
          ],
          preis: "ab 180 Euro pro Tag",
        },
      ],
    });
  }

  componentDidMount() {
    this.refreshWohnmobileListe();
  }

  getBildMain(pName) {
    if (pName === "IMG_MAIN_VW") {
      return (
        <Image
          src={IMG_MAIN_VW}
          alt="es fehlt IMG_3"
          fluid
          className="card-img-top"
        />
      );
    }
    if (pName === "IMG_MAIN_LMC") {
      return (
        <Image
          src={IMG_MAIN_LMC}
          alt="es fehlt IMG_3"
          fluid
          className="card-img-top"
        />
      );
    }
    return pName;
  }

  render() {
    return (
      <div className="mt-5 d-flex justify-content-middle">
        <Container>
          <Row>
            <Col xs={10} id="page-content-wrapper">
              <div className="p-3 mb-2 bg-white text-dark">
                <div>
                  <Table className="mt-4" striped bordered hover siz="sm">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Ausstattung</th>
                        <th>Preis</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.Wohnmobileimstate.map((Wohnmobil) => (
                        <tr key={Wohnmobil.id}>
                          <td>{this.getBildMain(Wohnmobil.imgmain)}</td>
                          <td>
                            {GetKleineTabelleUebersicht(Wohnmobil.ausstattung)}
                          </td>
                          <td>{Wohnmobil.preis}</td>
                          <td>
                            <ButtonToolbar>
                              <ButtonGroup vertical>xx</ButtonGroup>
                            </ButtonToolbar>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

/*
 <EditAddKunde
                                  art="UPD"
                                  idkunde={Wohnmobil.id}
                                  titel={"Kunden aktualisieren"}
                                  name={Wohnmobil.kundenname}
                                  beschreibung={Wohnmobil.beschreibung}
                                  refreshfunktion={this.refreshKundenListe}
                                  nurechte={this.props.nurechte}
                                />
                                */
