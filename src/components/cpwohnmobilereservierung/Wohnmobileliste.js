import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Button, ButtonGroup, ButtonToolbar, Image } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import { Row, Col, Container } from "react-bootstrap";
import { GetKleineTabelleUebersicht } from "../tech/GetKleineTabelleUebersicht";

import IMG_LMC_B_MAIN from "../../assets/LMC/IMG_B_MAIN.jpeg";
import IMG_LMC_B_01 from "../../assets/LMC/IMG_B_01.jpeg";
import IMG_LMC_B_02 from "../../assets/LMC/IMG_B_02.jpeg";
import IMG_LMC_H_01 from "../../assets/LMC/IMG_H_01.jpeg";
import IMG_LMC_H_02 from "../../assets/LMC/IMG_H_02.jpeg";
import IMG_LMC_H_03 from "../../assets/LMC/IMG_H_03.jpeg";
import IMG_LMC_H_04 from "../../assets/LMC/IMG_H_04.jpeg";

import IMG_VW_B_MAIN from "../../assets/VW/IMG_B_MAIN.jpeg";
import IMG_VW_B_01 from "../../assets/VW/IMG_B_01.jpeg";
import IMG_VW_B_02 from "../../assets/VW/IMG_B_02.jpeg";
import IMG_VW_H_01 from "../../assets/VW/IMG_H_01.jpeg";
import IMG_VW_H_02 from "../../assets/VW/IMG_H_02.jpeg";
import IMG_VW_H_03 from "../../assets/VW/IMG_H_03.jpeg";

export class Wohnmobileliste extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Wohnmobileimstate: [],
    };

    this.refreshWohnmobileListe = this.refreshWohnmobileListe.bind(this);
  }

  refreshWohnmobileListe() {
    this.setState({
      Wohnmobileimstate: [
        {
          id: 10,
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
          images: [
            {
              original: IMG_VW_B_MAIN,
              thumbnail: IMG_VW_B_MAIN,
            },
            {
              original: IMG_VW_B_01,
              thumbnail: IMG_VW_B_01,
            },
            {
              original: IMG_VW_B_02,
              thumbnail: IMG_VW_B_02,
            },
            {
              original: IMG_VW_H_01,
              thumbnail: IMG_VW_H_01,
            },
            {
              original: IMG_VW_H_02,
              thumbnail: IMG_VW_H_02,
            },
            {
              original: IMG_VW_H_03,
              thumbnail: IMG_VW_H_03,
            },
          ],
          preis: "ab 150 Euro pro Tag",
        },
        {
          id: 20,
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
          images: [
            {
              original: IMG_LMC_B_MAIN,
              thumbnail: IMG_LMC_B_MAIN,
            },
            {
              original: IMG_LMC_B_01,
              thumbnail: IMG_LMC_B_01,
            },
            {
              original: IMG_LMC_B_02,
              thumbnail: IMG_LMC_B_02,
            },
            {
              original: IMG_LMC_H_01,
              thumbnail: IMG_LMC_H_01,
            },
            {
              original: IMG_LMC_H_02,
              thumbnail: IMG_LMC_H_02,
            },
            {
              original: IMG_LMC_H_03,
              thumbnail: IMG_LMC_H_03,
            },
            {
              original: IMG_LMC_H_04,
              thumbnail: IMG_LMC_H_04,
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
                          <td>
                            <ImageGallery
                              items={Wohnmobil.images}
                              showFullscreenButton={false}
                              showPlayButton={false}
                            />
                          </td>
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
