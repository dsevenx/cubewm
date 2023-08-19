import React, { Component } from "react";
import { ButtonGroup, ButtonToolbar } from "react-bootstrap";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import { Row, Col, Container } from "react-bootstrap";
import { GetKleineTabelleUebersicht } from "../tech/GetKleineTabelleUebersicht";
import Wohnmobilreservieren from "./Wohnmobilreservieren";

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
          id: "VW",
          ausstattung: [
            {
              key: "Motor",
              wert: "150 KW",
              typ: "zahl",
            },
            {
              key: "Erstzulassung",
              wert: "2023-07-01",
              typ: "datum",
            },
            {
              key: "Anzahl Betten",
              wert: "4",
              typ: "zahl",
            },
            {
              key: "Plätze mit Gurt",
              wert: "4",
              typ: "zahl",
            },
            {
              key: "Km für 7 Tage",
              wert: "3000",
              typ: "zahl",
            },
            {
              key: "Selbstbeteiligung Kasko",
              wert: "1000",
              typ: "zahl",
            },
            {
              key: "TV mit Automatik",
              wert: "",
              typ: "text",
            },
            {
              key: "zur SAT-Antenne",
              wert: "",
              typ: "texto",
            },
            {
              key: "Navi-System",
              wert: "",
              typ: "texto",
            },
            {
              key: "Rückfahrkamera",
              wert: "",
              typ: "texto",
            },
            {
              key: "Küche mit Geschirr,",
              wert: "",
              typ: "text",
            },
            {
              key: "Besteck, Töpfe und",
              wert: "",
              typ: "text",
            },
            {
              key: "Pfanne",
              wert: "",
              typ: "texto",
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
          preis: "ab 105 Euro pro Tag",
        },
        {
          id: "LMC",
          ausstattung: [
            {
              key: "Motor",
              wert: "120 KW",
              typ: "zahl",
            },
            {
              key: "Erstzulassung",
              wert: "2023-06-01",
              typ: "datum",
            },
            {
              key: "Anzahl Betten",
              wert: "3",
              typ: "zahl",
            },
            {
              key: "Plätze mit Gurt",
              wert: "3",
              typ: "zahl",
            },
            {
              key: "Km für 7 Tage",
              wert: "2100",
              typ: "zahl",
            },
            {
              key: "Selbstbeteiligung Kasko",
              wert: "1000",
              typ: "zahl",
            },
            {
              key: "TV mit Automatik",
              wert: "",
              typ: "text",
            },
            {
              key: "zur SAT-Antenne",
              wert: "",
              typ: "texto",
            },
            {
              key: "Navi-System",
              wert: "",
              typ: "texto",
            },
            {
              key: "Rückfahrkamera",
              wert: "",
              typ: "texto",
            },
            {
              key: "Küche mit Geschirr,",
              wert: "",
              typ: "text",
            },
            {
              key: "Besteck, Töpfe und",
              wert: "",
              typ: "text",
            },
            {
              key: "Pfanne, Kühlschrank",
              wert: "",
              typ: "texto",
            },
            {
              key: "Photovoltaik",
              wert: "",
              typ: "texto",
            },
            {
              key: "Dusche",
              wert: "",
              typ: "texto",
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
                  <table class="table">
                    <thead>
                      <tr class="row">
                        <th class="col-sm-6"></th>
                        <th class="col-sm-3"> Ausstattung </th>
                        <th class="col-sm-1"> Preis </th>
                        <th class="col-sm-2"> </th>
                      </tr>
                    </thead>

                    <tbody>
                      {this.state.Wohnmobileimstate.map((Wohnmobil) => (
                        <tr key={Wohnmobil.id} class="row">
                          <td class="col-sm-6">
                            <ImageGallery
                              items={Wohnmobil.images}
                              showFullscreenButton={false}
                              showPlayButton={false}
                            />
                          </td>
                          <td class="col-sm-3">
                            {GetKleineTabelleUebersicht(Wohnmobil.ausstattung)}
                          </td>
                          <td class="col-sm-1">{Wohnmobil.preis}</td>
                          <td class="col-sm-2">
                            <ButtonToolbar>
                              <ButtonGroup vertical>
                                {" "}
                                <Wohnmobilreservieren
                                  titel={"Wohnmobil reservieren"}
                                  id={Wohnmobil.id}
                                />
                              </ButtonGroup>
                            </ButtonToolbar>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
