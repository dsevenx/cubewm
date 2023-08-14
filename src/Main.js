import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

// eigene tech Komponenten
import NavigationBar from "./components/tech/NavigationBar";
import Jumbotron from "./components/tech/Jumbotron";
import { Footer } from "./components/tech/Footer";

// eigene Komponenten
import { Impressum } from "./components/cpimpressumdatenschutz/Impressum";
import { Datenschutz } from "./components/cpimpressumdatenschutz/Datenschutz";
import { Startkarten } from "./components/Startkarten";
import { Wohnmobileliste } from "./components/cpwohnmobilereservierung/Wohnmobileliste";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      erfasstesWohnmobil: "",
    };
  }

  render() {
    return (
      <div className="page-container">
        <div className="content-wrap">
          <NavigationBar name_user={""}></NavigationBar>
          <Jumbotron></Jumbotron>
          <Container>
            <Router>
              <Routes>
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
              </Routes>
            </Router>
          </Container>
          <Startkarten></Startkarten>
          <Wohnmobileliste></Wohnmobileliste>
          <h1> </h1>
        </div>
        <Footer />
      </div>
    );
  }
}
