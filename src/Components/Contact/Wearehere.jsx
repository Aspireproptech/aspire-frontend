import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import Community from "../HomePage/Community";
import Map2 from "./Map2";
import MapWithAMarker from "./Map";
import Map from "./Map";
function Wearehere() {
  const [heightmap, setheightmap] = useState("450px");

  const setheight = () => {
    setheightmap("300px");
  };
  window.matchMedia("(min-width: 768px)").addEventListener("change", setheight);
  return (
    <>
      <Container className="mt-5 p-4 border WeAreHeree">
        <Row className="d-flex flex-lg-row flex-md-column-reverse flex-column-reverse">
          <Col className="ms-lg-3">
            <Row className="WeAreHeree-head">
              <h3 className="my-3">We Are Here</h3>
            </Row>

            <Row className=" WeAreHeree-Address">
              <h4>Bangalore</h4>
              <Col xs={7}>
                <h5>
                  Address: No 45/11, First Floor, North Park Road, Kumara Park
                  East, Bengaluru, Karnataka 560 001
                </h5>
              </Col>
            </Row>

            <Row className="my-lg-5 my-3 d-flex flex-column">
              <span className="contactinfo">
                <CallIcon />
                <h5>+91 9886660229</h5>
              </span>
              <span className="contactinfo">
                <EmailIcon />
                <h5>hello@aspireprop.com</h5>
              </span>
            </Row>
            <Row className="WeAreHeree-btn mx-1">
              {/* <button>
                                    Get In Touch
                                </button> */}
            </Row>
          </Col>
          <Col style={{ borderRadius: "30px", overflow: "hidden" }}>
            {/* <Map2
                                height={heightmap}
                             /> */}
            {/* <MapWithAMarker
                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB14oZ3M9HW-pYKIsIwCfyYhFKsg3FX6v0&v=3.exp&libraries=geometry,drawing,places"
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `${heightmap}` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                                long={77.57973740550517}
                                lati={12.98807381311353}
                                /> */}
            <Map
              height={`${heightmap}`}
              lng={77.57973740550517}
              lat={12.98807381311353}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Wearehere;
