import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../Assets/HomePage/Help.css";
import "../../Assets/HomePage/portfolio.css";
import PortfolioImage from "../../Assets/Images/PortfolioImage.png";
import HomeChoiceImg from "../../Assets/Images/PromiseImg.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import HomeIcon from "@mui/icons-material/Home";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import axios from "axios";
import { FetchPropertyData } from "../API/Api";
import Loader from "../Common/Loader";
function Portfolio() {
  const [indexColor, setindexColor] = useState(0);
  const [active, setactive] = useState(0);

  const [portfolioItems, setportfolioItems] = useState([]);
  const [PortfolioDetail, setPortfolioDetail] = useState();
  const fetchPortfolio = async () => {
    try {
      const { data } = await FetchPropertyData();
      setportfolioItems(data?.data);
      setPortfolioDetail(data?.data[0]);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPortfolio();
  }, []);
  const abc = PortfolioDetail?.unitDetails.map((item) =>
    console.log(item?.bhk)
  );
  console.log(PortfolioDetail?.unitDetails);
  return (
    <div>
      <Container className="portfolioContainer">
        {}

        <div className="propertyDescription">
          <div className="description">
            <h3>{PortfolioDetail?.name}</h3>
            <h5>{PortfolioDetail?.city}</h5>
            <div className="propertyFeatures">
              <span>
                {" "}
                <LocationOnIcon /> <h4>{PortfolioDetail?.location}</h4>{" "}
              </span>
              <span>
                {" "}
                <LocalAtmIcon /> <h4>{PortfolioDetail?.price} </h4>{" "}
              </span>
              <span>
                <HomeIcon />{" "}
                <h4>
                  {PortfolioDetail?.ready ? "Ready To move" : "Posession Soon"}{" "}
                </h4>
              </span>{" "}
              <span>
                <BedroomChildIcon />
                {PortfolioDetail?.unitDetails.map((item, index) => (
                  <p
                    className="mx-1"
                    style={{ width: "0% !important" }}
                    key={index}
                  >
                    {item?.bhk}
                    {index === PortfolioDetail?.unitDetails.length - 1
                      ? null
                      : ","}
                  </p>
                ))}
                <p>BHK</p>
              </span>
            </div>
          </div>

          <Link to={`/property/${PortfolioDetail?._id} `}>
            <button>View Property</button>
          </Link>
        </div>

        <Row className="mt-4">
          <div className="d-flex flex-lg-row mt-4 flex-md-row flex-column-reverse">
            <Col className="w-100 location-container">
              <Row className="mb-4 mx-1">
                <Col xs={4} lg={2}>
                  <h6>Location</h6>
                </Col>
                <Col xs={4} lg={4}>
                  <h6>Properties</h6>
                </Col>
              </Row>
              <Col className="countryContainer w-100">
                {portfolioItems.map((data, index) => (
                  <Row
                    key={index}
                    onMouseOver={() => setPortfolioDetail(data)}
                    className={`${
                      active === index ? "activeportfolio " : ""
                    } newhover portfolioItem  `}
                    onClick={() => {
                      setactive(index);
                      setPortfolioDetail(data);
                    }}
                  >
                    <Col xs={4}>
                      <p className="mb-0">{data?.location}</p>
                    </Col>
                    <Col xs={8}>
                      <p className="mb-0">{data?.name}</p>
                    </Col>
                  </Row>
                ))}
              </Col>
            </Col>
            <CSSTransition
              key={PortfolioDetail?._id}
              timeout={500}
              classNames="item"
            >
              <Col className="px-lg-4 px-0 px-md-4 mb-5 border-none mb-sm-0">
                {PortfolioDetail?.pictures[0]?.length > 0 && (
                  <img
                    src={PortfolioDetail?.pictures}
                    className={` property-img property-img-height border-none`}
                    alt=""
                    style={{ width: "100%" }}
                  />
                )}
              </Col>
            </CSSTransition>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
