import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./Jumbotron.css";

export class Jumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlvonfetch: 0,
    };
  }

  render() {
    return (
      <div>
        <div className="jumbotron text-white jumbotron-image shadow">
          <div className="jumbo">
            <div className="overlay"></div>
            <Container>
              <h1 align="center">
                <font color="white">
                  <div id="box1">Cube-Wohnmobile</div>
                </font>
              </h1>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
