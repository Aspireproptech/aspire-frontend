import React, { useState, useEffect } from "react";
import img1 from "../../Assets/Images/SoldProjectImage.png";
import Carousel from "react-material-ui-carousel";
import { Col, Row } from "react-bootstrap";
import { Button, Card, Paper } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { FetchProject } from "../API/Api";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useNavigationType } from "react-router-dom";
import "./carousel.css";

function CarouselComponent() {
  const navigate = useNavigate();
  const [Images, setImages] = useState([]);

  const FetchImages = async () => {
    try {
      const data = await FetchProject();
      setImages(data?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchImages();
  }, []);

  return (
    <>
      <Carousel
        NextIcon={<ArrowForwardIosIcon />}
        PrevIcon={<ArrowBackIosIcon />}
        animation="slide"
        style={{ overflow: "visible" }}
        overFlow="visible"
        navButtonsAlwaysVisible={true}
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
        {Images?.map((item, i) => (
          <Item key={i} item={item?.pictures} id={item._id} name={item.name} />
        ))}
      </Carousel>
    </>
  );
}

function Item(prop) {
  const navigate = useNavigate();
  return (
    <Link to={`/project/${prop.id}`} style={{ textDecoration: "none" }}>
      <Card
        className="communityCard propertyCardStyle"
        style={{
          objectFit: "cover",
          margin: "auto",
          borderRadius: "20px",
          overFlow: "visible",
          boxShadow: " 0px 0px 14px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h5
          className="px-3 py-1"
          style={{ background: "transparent", textDecoration: "none" }}
        >
          {prop.name}
        </h5>
        <img src={prop?.item} className="w-100" alt="" />
      </Card>
    </Link>
  );
}

export default CarouselComponent;
