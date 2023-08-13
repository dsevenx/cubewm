import React, { Component } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import CUBE_ERXLEBEN from "../../assets/CUBE_ERXLEBEN.png";

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
        background: url(${CUBE_ERXLEBEN}) no-repeat;
        background-size: cover;
        color: #ccc;
        height: 300px;
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

      #box1 {
        padding-top: 15px;
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
                  <font color="black">
                    <div id="box1">Cube-Wohnmobile</div>
                  </font>
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
