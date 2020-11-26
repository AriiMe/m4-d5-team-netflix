/** @format */

import React from "react";
import { Jumbotron, Container, Image } from "react-bootstrap";
import "../App.css";
import Jumbovid from "../assets/Jumbovid.mp4";
import ReactPlayer from "react-player/youtube";

class Jumbo extends React.Component {
  render() {
    return (
      <Jumbotron
        fluid
        className="p-0 jumbotron"
        id="jumbotron"
        style={{ width: "100%", height: "100vh", position: "relative" }}
      >
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            position: "relative",

            width: "100%",
            height: "120vh",
            zIndex: "0",
            overflow: "hidden",
          }}
        >
          <video
            src={Jumbovid}
            autoPlay
            muted
            loop
            style={{
              position: "relative",
              width: "100%",
              marginBottom: "25vh",
            }}
          ></video>
        </div>

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
            zIndex: "3",
          }}
        ></div>
      </Jumbotron>
    );
  }
}

export default Jumbo;
