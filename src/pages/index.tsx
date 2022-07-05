import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import MainInfoSvg from "../svgs/main-info-svg";

import "bootstrap/dist/css/bootstrap.min.css";

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
          coords="685, 525, 80"
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

const pageStyles = {
  background: "#FBECC6",
  overflow: "hidden",
} as React.CSSProperties;

const containerStyles = {
  display: "grid",
  height: "100vh",
  marginRight: "48px",
  justifyContent: "strech",
  alignItems: "strech",
  gridAutoColumns: "1fr",
  gridColumnGap: "16px",
  gridRowGap: "16px",
  gridTemplateColumns: "2fr 1fr",
  gridTemplateRows: "1fr 1fr",
  backgroundColor: "transparent",
} as React.CSSProperties;

const saveTheDateStyles = {
  position: "relative",
  left: "0%",
  top: "48px",
  right: "auto",
  bottom: "0%",
  display: "flex",
  overflow: "visible",
  width: "90%",
  height: "100vh",
  maxHeight: "100%",
  maxWidth: "100%",
  minWidth: "auto",
  justifyContent: "flex-start",
  alignItems: "flex-end",
  objectFit: "scale-down",
} as React.CSSProperties;

const mainInfoStyles = {
  display: "flex",
  height: "100vh",
  alignItems: "center",
} as React.CSSProperties;

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Priya and Luke</title>
      <div style={containerStyles}>
        <div style={saveTheDateStyles}>{SaveTheDateImageMap()}</div>
        <div style={mainInfoStyles}>{MainInfoSvg()}</div>
      </div>
    </main>
  );
};

export default IndexPage;
