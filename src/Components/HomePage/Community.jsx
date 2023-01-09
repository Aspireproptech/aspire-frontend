import { Button, Card, Paper } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Col, Row } from "react-bootstrap";
import "../../Assets/HomePage/Perfect.css";
import priyanka from "../../Assets/Images/Priyanka.jpg";
import Dhruva from "../../Assets/Images/Dhruva.jpg";
import Jankiraman from "../../Assets/Images/Jankiraman.jpg";
import "./Community.css";

function Community(prop) {
  var items = [
    {
      img1: Jankiraman,
      name: "Janakiraman",
      description:
        "Good service by Aspire, bought a unit from them. They have been very helpful throughout the process. The entire home buying journey was made as easy and simplified as possible. A smooth and hassle free experience! ",
    },
    {
      name: "Priyanka",
      img1: priyanka,
      description:
        "Professional and transparent services. Had a great experience. Completed the journey of being a proud home owner with their help. The team has great knowledge of the real estate sector in Bangalore. Would highly recommend them!",
    },
    {
      name: "Dhruva",
      img1: Dhruva,
      description:
        "Aspire has it bang on with their Right Location, Right Product, Right Legal and  Right Price approach. Found a great home through them and they were with us throughout the process at every step.  ",
    },
  ];
  return (
    <div
      className="perfectSection "
      style={{ background: `${prop?.color ? prop?.color : null}` }}
    >
      <div className="promiseSection ">
        <div className="separatorDiv"></div>
        <h4 style={{ fontSize: 30 }}>Hear it from our Happy Clients! </h4>
        <div className="CommunityCarousel">
          <Carousel
            animation="slide"
            style={{ overflow: "visible" }}
            overFlow="visible"
            navButtonsAlwaysVisible={false}
            navButtonsProps={{
              // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
              style: {
                backgroundColor: "transparent",
                borderRadius: 0,
                color: "#13184F",
              },
            }}
            navButtonsWrapperProps={{
              // Move the buttons to the bottom. Unsetting top here to override default style.
              style: {
                bottom: "0",
                top: "unset",
              },
            }}
          >
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

function Item(props) {
  return (
    <Card
      className="communityCard"
      style={{
        width: "90%",
        margin: "auto",
        height: "auto",
        borderRadius: "10px",
        overFlow: "visible",
        boxShadow: " 0px 0px 14px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Row className="d-flex flex-lg-row flex-column">
        <Col
          className="CarouselCard mt-4 mb-4 d-flex justify-content-center"
          lg={4}
        >
          <img src={props?.item?.img1} alt="" className="image-resize" />
        </Col>
        <Col style={{ padding: 30 }}>
          <h3 className="CarouselDate">Home Buyer</h3>
          <h2 style={{ fontSize: 34, fontWeight: 600, color: "#525252" }}>
            {props.item.name}
          </h2>
          <p>{props.item.description}</p>
        </Col>
      </Row>
    </Card>
  );
}

export default Community;
