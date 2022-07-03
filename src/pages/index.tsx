import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import MainInfoSvg from "../svgs/main-info-svg";
import SaveTheDateSvg from "../svgs/save-the-date-svg";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const pageStyles = {
  background: "#FBECC6",
};

function SaveTheDateImageMap() {
  return (
    <div>
      <StaticImage
        src="../images/save-the-date.jpg"
        alt="Save the date"
        loading="eager"
        placeholder="blurred"
        useMap="#save-the-date-map"
      />
      <map name="save-the-date-map">
        <area
          shape="circle"
          coords="590, 450, 65"
          onClick={handleSunFlowerClick}
          style={{ cursor: "help" }}
        />
      </map>
    </div>
  );
}

function handleSunFlowerClick() {
  alert("We love 🌻s");
  openModal();
}

function openModal() {}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Priya and Luke</title>
      <Container bsPrefix="ml-0 vh-100">
        <Row className="h-100">
          <Col className="align-self-end">{SaveTheDateSvg()}</Col>

          <Col className="align-self-center">
            {/* TODO: pin Navbar to top while keeping MainInfoSvg vertically centered */}
            {/* <Row>
              <Navbar expand="lg">
                <Container>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/">Wedding Info</Nav.Link>
                      <Nav.Link href="/">Registry</Nav.Link>
                      <Nav.Link href="/">RSVP</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Row> */}
            <Row>{MainInfoSvg()}</Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default IndexPage;
