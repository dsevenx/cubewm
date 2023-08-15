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
import { Tipps } from "./components/cptipps/Tipps";
import { Schaden } from "./components/cpschaden/Schaden";

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
        <NavigationBar name_user={""}></NavigationBar>
        <div className="content-wrap">
          <Jumbotron></Jumbotron>
          <Container>
            <Router>
              <Routes>
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
                <Route path="/wohnmobile" element={<Wohnmobileliste />} />
                <Route path="/schaden" element={<Schaden />} />
                <Route path="/tipps" element={<Tipps />} />
                <Route path="/home" element={<Startkarten />} />
                <Route path="/" element={<Startkarten />} />
              </Routes>
            </Router>
          </Container>
          <h1> </h1>
        </div>
        <Footer />
      </div>
    );
  }
}
