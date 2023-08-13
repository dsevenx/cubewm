import React, { Component } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import ICE_Bild from "../../assets/ICE_BILD.png";

export class Jumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlvonfetch: 0,
    };
  }

  render() {
    const Styles = styled.div`
      .jumbo {
        background: url(${ICE_Bild}) no-repeat;
        background-size: cover;
        color: #ccc;
        height: 200px;
        position: relativ;
        z-index: -2;
      }

      .overlay {
        background-color: #ffffff;
        opacity: 0.6;
        position: relativ;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
      }
    `;

    return (
      <div>
        <Styles>
          <div className="jumbotron text-white jumbotron-image shadow">
            <div className="jumbo">
              <div className="overlay"></div>
              <Container>
                <h1 align="center">
                  <font color="black">GreMi-Projektmanager</font>
                </h1>
              </Container>
            </div>
          </div>
        </Styles>
      </div>
    );
  }
}

export default Jumbotron;
