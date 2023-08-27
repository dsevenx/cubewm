import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "./impressumdatenschutz.css";

export class Impressum extends Component {
  render() {
    const lBez = " Cube-Wohnmobile UG ";

    return (
      <div className="mt-5 d-flex justify-content-middle">
        <Container>
          <Row className="mr-3 mb-3">
            <Col>
              <div className="h4Schrift">IMPRESSUM</div>
            </Col>
          </Row>

          <Row className="mr-3 mb-3">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h4>{lBez}</h4>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div className="hoehe">
                        Müllerstraße 1
                        <br />
                        39343 Erxleben
                      </div>
                    </p>
                    <p>
                      <div className="hoehe">
                        Telefon: 0172/5755159
                        <br />
                        thomas@cube-wohnmobile.de
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
                    <h4>Haftungsausschluss</h4>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div className="hoehe">
                        {lBez} ist als Inhaltsanbieter nach §8 Teledienstegesetz
                        für die "eigenen Inhalte", die für sie zur Nutzung
                        bereitgehalten werden, verantwortlich. Obwohl alle
                        Inhalte sorgfältig geprüft und ständig aktualisiert
                        werden, kann eine Garantie für die Vollständigkeit,
                        Richtigkeit und letzte Aktualität jedoch nicht
                        übernommen werden.
                        {lBez} haftet daher nicht für Schäden, die in
                        Zusammenhang mit der Verwendung dieser Inhalte stehen.
                        Von diesen eigenen Inhalten sind Querverweise ("LINKS")
                        auf die von anderen Anbietern bereitgehaltenen Inhalte
                        zu unterscheiden. Durch den Querverweis hält
                        {lBez} insofern "fremde Inhalte" zur Nutzung bereit.
                        Durch den Querverweis vermitteln sie den Zugang zur
                        Nutzung dieser Inhalte (§9 Teledienstgesetz). Für diese
                        "fremden" Inhalte ist {lBez} nicht verantwortlich, da
                        sie die Übermittlung der Information nicht veranlasst,
                        den Adressaten der übermittelten Informationen nicht
                        auswählt und die übermittelten Informationen auch nicht
                        ausgewählt oder verändert hat. Auch eine automatische
                        kurzzeitige Zwischenspeicherung dieser "fremden
                        Informationen" erfolgt wegen der gewählten Aufruf- und
                        Verlinkungsmethodik durch {lBez} nicht, so dass sich
                        auch dadurch keine Verantwortlichkeit von
                        {lBez} für diese fremden Inhalte ergibt. Bei "LINKS"
                        handelt es sich allerdings stets um Verweisungen auf
                        "lebende" (dynamische) Internetauftritte Dritter. Sie
                        sind nicht dazu verpflichtet, die Inhalte, auf die sie
                        in ihrem Angebot verweisen, ständig auf Veränderungen zu
                        überprüfen, die eine Verantwortlichkeit neu begründen
                        könnten. Erst wenn sie feststellen oder von anderen
                        darauf hingewiesen werden, dass ein konkretes Angebot,
                        zu dem sie einen Link bereitgestellt haben, eine zivil-
                        oder strafrechtliche Verantwortlichkeit auslöst, werden
                        sie den Verweis auf dieses Angebot aufheben, soweit
                        ihnen dies technisch möglich und zumutbar ist. Die
                        technische Möglichkeit und Zumutbarkeit wird nicht
                        dadurch beeinflusst, dass auch nach Unterbindung des
                        Zugriffs von der Homepage von {lBez} von anderen Servern
                        aus auf das rechtswidrige oder strafbare Angebot
                        zugegriffen werden kann. {lBez}
                        bemüht sich dafür Sorge zu tragen, dass die auf dieser
                        Website enthaltenen Informationen und Daten zutreffend
                        sind. Eine Haftung oder Garantie für die Aktualität,
                        Richtigkeit und Vollständigkeit der zur Verfügung
                        gestellten Informationen und Daten ist aus
                        haftungsrechtlichen Gründen ausgeschlossen. Dies gilt
                        ebenso für alle anderen Websites, auf die mittels
                        Hyperlink verwiesen wird. Wir haben auf unseren Seiten
                        Links zu anderen Seiten im Internet gelegt. Für alle
                        diese Links gilt folgendes: Die Verantwortlichen von
                        {lBez} erklären ausdrücklich, dass sie keinerlei
                        Einfluss auf die Gestaltung und die Inhalte der
                        gelinkten Seiten haben. Deshalb machen wir uns diese
                        Inhalte nicht zu Eigen. Die auf unserer Webseite
                        abgebildeten Logos unterstehen den jeweiligen Rechten
                        der Eigentümer. Der Inhalt dieser Website ist
                        urheberrechtlich geschützt. Die Vervielfältigung von
                        Informationen oder Daten, insbesondere die Verwendung
                        von Texten, Textteilen oder Bildmaterial bedarf der
                        schriftlichen Zustimmung seitens {lBez}.
                      </div>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
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
