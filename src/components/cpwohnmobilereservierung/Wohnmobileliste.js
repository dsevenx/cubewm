import React, { Component } from "react";
import { ButtonGroup, ButtonToolbar } from "react-bootstrap";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import "./Wohnmobileliste.css";

import { GetKleineTabelleUebersicht } from "../tech/GetKleineTabelleUebersicht";
import Wohnmobilreservieren from "./Wohnmobilreservieren";

import IMG_LMC_B_MAIN from "../../assets/LMC/IMG_B_MAIN.jpeg";
import IMG_LMC_B_01 from "../../assets/LMC/IMG_B_01.jpeg";
import IMG_LMC_B_02 from "../../assets/LMC/IMG_B_02.jpeg";
import IMG_LMC_H_01 from "../../assets/LMC/IMG_H_01.jpeg";
import IMG_LMC_H_02 from "../../assets/LMC/IMG_H_02.jpeg";
import IMG_LMC_H_03 from "../../assets/LMC/IMG_H_03.jpeg";
import IMG_LMC_H_04 from "../../assets/LMC/IMG_H_04.jpeg";

import IMG_VW_MAIN from "../../assets/VW/IMG_MAIN.jpg";
import IMG_VW_H01 from "../../assets/VW/IMG_H01.jpg";
import IMG_VW_H02 from "../../assets/VW/IMG_H02.jpg";
import IMG_VW_H03 from "../../assets/VW/IMG_H03.jpg";
import IMG_VW_H04 from "../../assets/VW/IMG_H04.jpg";
import IMG_VW_H05 from "../../assets/VW/IMG_H05.jpg";
import IMG_VW_H06 from "../../assets/VW/IMG_H06.jpg";
import IMG_VW_H07 from "../../assets/VW/IMG_H07.jpg";
import IMG_VW_H08 from "../../assets/VW/IMG_H08.jpg";
import IMG_VW_H10 from "../../assets/VW/IMG_H10.jpg";
import IMG_VW_H11 from "../../assets/VW/IMG_H11.jpg";
import IMG_VW_H12 from "../../assets/VW/IMG_H12.jpg";
import IMG_VW_H13 from "../../assets/VW/IMG_H13.jpg";
import IMG_VW_H14 from "../../assets/VW/IMG_H14.jpg";

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
          id: "VW California",
          ausstattung: [
            {
              key: "Motor",
              wert: "130 KW",
              typ: "zahl",
            },
            {
              key: "Länge",
              wert: "5.980 mm",
              typ: "zahl",
            },
            {
              key: "Breite",
              wert: "2.040 mm",
              typ: "zahl",
            },
            {
              key: "Höhe",
              wert: "2.970 mm",
              typ: "zahl",
            },
            {
              key: "Stehhöhe",
              wert: "2.180 mm",
              typ: "zahl",
            },
            {
              key: "Erstzulassung",
              wert: "2023-07-28",
              typ: "datum",
            },
            {
              key: "Plätze mit Gurt",
              wert: "4",
              typ: "zahl",
            },
            {
              key: "zulässiges Gesamtgewicht",
              wert: "3500 kg",
              typ: "zahl",
            },
            {
              key: "Kraftstoffart",
              wert: "Diesel",
              typ: "zahl",
            },
            {
              key: "Schlafplätze",
              wert: "4",
              typ: "zahl",
            },
            {
              key: "Bettgröße (LxB)",
              wert: "2m x 1,60m",
              typ: "zahl",
            },
            {
              key: "Verehrszeichenerkennung, ",
              wert: "",
              typ: "text",
            },
            {
              key: "Abstandsregelautomat, ",
              wert: "",
              typ: "text",
            },
            {
              key: "Spurassitent, drehbare Sitze",
              wert: "",
              typ: "texto",
            },
            {
              key: "Bi-Xenon Scheinwerfer",
              wert: "",
              typ: "text",
            },
            {
              key: "und Fernlichtassistent,",
              wert: "",
              typ: "texto",
            },
            {
              key: "Elektr. Außenspiegel, beheizbar",
              wert: "",
              typ: "texto",
            },
            {
              key: "ABS, Kamera für vorn und hinten, ",
              wert: "",
              typ: "text",
            },
            {
              key: "Einparkhilfe, Tempomat,",
              wert: "",
              typ: "text",
            },
            {
              key: "Alarmanlage, Bordcomputer,",
              wert: "",
              typ: "text",
            },
            {
              key: "Solaranlage, Navi-System",
              wert: "",
              typ: "texto",
            },
            {
              key: "Selbstbeteiligung Kasko",
              wert: "1000",
              typ: "zahl",
            },
            {
              key: "Umweltplakette",
              wert: "grün",
              typ: "zahl",
            },
            {
              key: "Auto-Kindersitz",
              wert: "",
              typ: "texto",
            },
            {
              key: "abgedunkelte Scheiben, ",
              wert: "",
              typ: "text",
            },
            {
              key: "Verdunklungsrollos, Vorhänge",
              wert: "",
              typ: "texto",
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
              key: "4 Campingstühle + Tisch",
              wert: "",
              typ: "texto",
            },
            {
              key: "Volumen Frischwassertank",
              wert: "100 Liter",
              typ: "zahl",
            },
            {
              key: "Volumen Abwassertank",
              wert: "100 Liter",
              typ: "zahl",
            },
            {
              key: "Toilette mit SOG, ",
              wert: "",
              typ: "text",
            },
            {
              key: "Dusche, Warmwasser",
              wert: "",
              typ: "texto",
            },
            {
              key: "Standheizung + Gasheizung",
              wert: "",
              typ: "texto",
            },
            {
              key: "Anhängerkupplung",
              wert: "",
              typ: "texto",
            },

            {
              key: "Klimaanlage, Dachfenster,",
              wert: "",
              typ: "text",
            },
            {
              key: "Lüftungsgitter, Ausstellfenster",
              wert: "",
              typ: "texto",
            },
            {
              key: "Küche mit Herd, Geschirr,",
              wert: "",
              typ: "text",
            },
            {
              key: "Besteck, Töpfe, Pfanne",
              wert: "",
              typ: "text",
            },
            {
              key: "und Kühlschrank mit Eisfach",
              wert: "",
              typ: "texto",
            },

            {
              key: "Landstromanschluss, USB,",
              wert: "",
              typ: "text",
            },
            {
              key: "Versorgerbatterie, Solarzellen",
              wert: "",
              typ: "texto",
            },
            {
              key: "Fahrradträger",
              wert: "2",
              typ: "zahl",
            },
            {
              key: "Kabeltrommel, Auffahrkeile",
              wert: "",
              typ: "texto",
            },
          ],
          images: [
            {
              original: IMG_VW_MAIN,
              thumbnail: IMG_VW_MAIN,
            },
            {
              original: IMG_VW_H01,
              thumbnail: IMG_VW_H01,
            },
            {
              original: IMG_VW_H02,
              thumbnail: IMG_VW_H02,
            },
            {
              original: IMG_VW_H03,
              thumbnail: IMG_VW_H03,
            },
            {
              original: IMG_VW_H04,
              thumbnail: IMG_VW_H04,
            },
            {
              original: IMG_VW_H05,
              thumbnail: IMG_VW_H05,
            },
            {
              original: IMG_VW_H06,
              thumbnail: IMG_VW_H06,
            },
            {
              original: IMG_VW_H07,
              thumbnail: IMG_VW_H07,
            },
            {
              original: IMG_VW_H08,
              thumbnail: IMG_VW_H08,
            },
            {
              original: IMG_VW_H10,
              thumbnail: IMG_VW_H10,
            },
            {
              original: IMG_VW_H11,
              thumbnail: IMG_VW_H11,
            },
            {
              original: IMG_VW_H12,
              thumbnail: IMG_VW_H12,
            },
            {
              original: IMG_VW_H13,
              thumbnail: IMG_VW_H13,
            },
            {
              original: IMG_VW_H14,
              thumbnail: IMG_VW_H14,
            },
          ],
          preis: "ab 97 € je nach Saison",
        },
        {
          id: "Fiat LMC",
          ausstattung: [
            {
              key: "Motor",
              wert: "103 KW",
              typ: "zahl",
            },
            {
              key: "Länge",
              wert: "6.760 mm",
              typ: "zahl",
            },
            {
              key: "Breite",
              wert: "2.220 mm",
              typ: "zahl",
            },
            {
              key: "Höhe",
              wert: "2.690 mm",
              typ: "zahl",
            },
            {
              key: "Stehhöhe",
              wert: "2.000 mm",
              typ: "zahl",
            },
            {
              key: "Erstzulassung",
              wert: "2023-06-01",
              typ: "datum",
            },
            {
              key: "Plätze mit Gurt",
              wert: "4",
              typ: "zahl",
            },
            {
              key: "zulässiges Gesamtgewicht",
              wert: "3500 kg",
              typ: "zahl",
            },
            {
              key: "Kraftstoffart",
              wert: "Diesel",
              typ: "zahl",
            },
            {
              key: "Schlafplätze",
              wert: "2-3",
              typ: "zahl",
            },
            {
              key: "Bettgröße (LxB)",
              wert: "2m x 1,60m",
              typ: "zahl",
            },
            {
              key: "Einzelbetten",
              wert: "2",
              typ: "zahl",
            },
            {
              key: "Bi-Xenon Scheinwerfer",
              wert: "",
              typ: "text",
            },
            {
              key: "und Fernlichtassistent,",
              wert: "",
              typ: "texto",
            },
            {
              key: "Elektr. Außenspiegel, beheizbar",
              wert: "",
              typ: "texto",
            },
            {
              key: "ESP, ABS, Kamera für vorn und hinten, ",
              wert: "",
              typ: "text",
            },
            {
              key: "Einparkhilfe, Tempomat,",
              wert: "",
              typ: "text",
            },
            {
              key: "Alarmanlage, Bordcomputer,",
              wert: "",
              typ: "text",
            },
            {
              key: "Solaranlage, Navi-System",
              wert: "",
              typ: "texto",
            },
            {
              key: "Selbstbeteiligung Kasko",
              wert: "1000",
              typ: "zahl",
            },
            {
              key: "Verdunklungsrollos, Vorhänge",
              wert: "",
              typ: "texto",
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
              key: "4 Campingstühle + Tisch",
              wert: "",
              typ: "texto",
            },
            {
              key: "Volumen Frischwassertank",
              wert: "90 Liter",
              typ: "zahl",
            },
            {
              key: "Volumen Abwassertank",
              wert: "90 Liter",
              typ: "zahl",
            },
            {
              key: "Toilette mit SOG, ",
              wert: "",
              typ: "text",
            },
            {
              key: "Dusche, Warmwasser",
              wert: "",
              typ: "texto",
            },
            {
              key: "Standheizung + Gasheizung",
              wert: "",
              typ: "texto",
            },
            {
              key: "Anhängerkupplung",
              wert: "",
              typ: "texto",
            },

            {
              key: "Klimaanlage, Dachfenster,",
              wert: "",
              typ: "text",
            },
            {
              key: "Lüftungsgitter, Ausstellfenster",
              wert: "",
              typ: "texto",
            },
            {
              key: "Küche mit Herd, Geschirr,",
              wert: "",
              typ: "text",
            },
            {
              key: "Besteck, Töpfe, Pfanne",
              wert: "",
              typ: "text",
            },
            {
              key: "und Kühlschrank mit Eisfach",
              wert: "",
              typ: "texto",
            },

            {
              key: "Landstromanschluss, USB,",
              wert: "",
              typ: "text",
            },
            {
              key: "Versorgerbatterie",
              wert: "",
              typ: "texto",
            },
            {
              key: "Fahrradträger",
              wert: "3",
              typ: "zahl",
            },
            {
              key: "Kabeltrommel, Auffahrkeile",
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
          preis: "ab 99 € je nach Saison",
        },
      ],
    });
  }

  componentDidMount() {
    this.refreshWohnmobileListe();
  }

  render() {
    if (window.innerWidth < window.innerHeight) {
      return (
        <div className="mt-5 mb-5 d-flex justify-content-center">
          <table class="table">
            <thead>
              <tr class="row">
                <th class="col-12"></th>
              </tr>
            </thead>

            <tbody>
              {this.state.Wohnmobileimstate.map((Wohnmobil) => (
                <tr key={Wohnmobil.id} class="row">
                  <td class="col-12">
                    <p>
                      <ImageGallery
                        items={Wohnmobil.images}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        showThumbnails={false}
                        showBullets={true}
                      />
                    </p>
                    <p> {GetKleineTabelleUebersicht(Wohnmobil.ausstattung)}</p>
                    <p> {Wohnmobil.preis}</p>
                    <p>
                      <ButtonToolbar>
                        <ButtonGroup vertical>
                          {" "}
                          <Wohnmobilreservieren
                            titel={"Wohnmobil reservieren"}
                            id={Wohnmobil.id}
                          />
                        </ButtonGroup>
                      </ButtonToolbar>
                    </p>
                    <p>
                      <br></br>
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div className="mt-5 mb-5 d-flex justify-content-center">
          <table class="table">
            <thead>
              <tr class="row">
                <th class="col-6"></th>
                <th class="col-3"> Ausstattung </th>
                <th class="col-2"> Preis </th>
                <th class="col-1"> </th>
              </tr>
            </thead>

            <tbody>
              {this.state.Wohnmobileimstate.map((Wohnmobil) => (
                <tr key={Wohnmobil.id} class="row">
                  <td class="col-6">
                    <ImageGallery
                      items={Wohnmobil.images}
                      showFullscreenButton={false}
                      showPlayButton={false}
                      showThumbnails={false}
                      showBullets={true}
                      lazyLoad={true}
                    />
                  </td>
                  <td class="col-3">
                    {GetKleineTabelleUebersicht(Wohnmobil.ausstattung)}
                  </td>
                  <td class="col-2">
                    <p>{Wohnmobil.preis}</p>
                    <p>
                      <ButtonToolbar>
                        <ButtonGroup vertical>
                          {" "}
                          <Wohnmobilreservieren
                            titel={"Wohnmobil reservieren"}
                            id={Wohnmobil.id}
                          />
                        </ButtonGroup>
                      </ButtonToolbar>
                    </p>
                  </td>
                  <td class="col-1"> </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
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
