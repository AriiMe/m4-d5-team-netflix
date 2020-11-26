/** @format */

import React from "react";
import { Jumbotron, Container, Image } from "react-bootstrap";
import "../App.css";

class Jumbo extends React.Component {
  render() {
    return (
      <Jumbotron
        fluid
        className="p-0 jumbotron"
        id="jumbotron"
        style={{ width: "100%", height: "100vh", position: "relative" }}
      >
        <embed
          type="image/svg+xml"
          className="jumbotron"
          src="https://tv.giphy.com/?username=hulu"
          style={{
            position: "absolute",
            top: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: "0.5",
          }}
        />
        <div
          className="gradientOnJumbo"
          style={{
            content: "",
            background: "rgb(20, 20, 20)",
            background:
              "linear-gradient(180deg, rgba(20, 20, 20, 0) 34%, rgba(20, 20, 20, 1) 100%)",
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            zIndex: 1,
          }}
        ></div>
      </Jumbotron>
    );
  }
}

export default Jumbo;
