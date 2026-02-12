import React, { useState, useEffect } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import "../../Assets/Project/Project.css";
import PortfolioImage from "../../Assets/Images/PortfolioImage.png";
import HomeChoiceImg from "../../Assets/Images/PromiseImg.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import HomeIcon from "@mui/icons-material/Home";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";
import { Link } from "react-router-dom";
import Map from "../Contact/Map";
import Loader from "../../Components/Common/Loader";

import Portfolio from "../HomePage/Portfolio";
import { FetchPropertyData } from "../API/Api";
import HomeFest from "../Common/HomeFest";
import { formatString } from "../../helper";

function ProjectPortfolio() {
    const [mapview, setmapview] = useState(0);
    const [loading, setLoading] = useState(false);
    const [indexColor, setindexColor] = useState(0);
    const [portfolioItems, setportfolioItems] = useState([]);
    const [PortfolioDetail, setPortfolioDetail] = useState();
    const [propertyMap, setPropertyMap] = useState({});
    const [heightmap, setheightmap] = useState("450px");

    const setheight = () => {
        setheightmap("300px");
    };
    window
        .matchMedia("(min-width: 768px)")
        .addEventListener("change", setheight);

    const fetchPortfolio = async () => {
        setLoading(true);
        try {
            const { data } = await FetchPropertyData();
            setportfolioItems(data?.data);
            setPortfolioDetail(data?.data[0]);

            console.log(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchPortfolio();
    }, []);
    console.log(propertyMap);
    return (
        <div>
            <div className="property">
                <Container>
                    <Row className="project-property-height">
                        <Col xs={6} lg={9}>
                            <h4 className="property-head ms-0">Projects</h4>
                        </Col>
                        <Col xs={6} lg={3} className="property-sidehead">
                            <h5
                                className={
                                    mapview == 0 ? "map-head-active" : ""
                                }
                                onClick={() => {
                                    setmapview(0);
                                }}
                            >
                                Listing View
                            </h5>
                            <h5
                                className={
                                    mapview == 1 ? "map-head-active" : ""
                                }
                                onClick={() => {
                                    setmapview(1);
                                }}
                            >
                                Map View
                            </h5>
                        </Col>
                    </Row>
                </Container>

                {mapview == 0 ? (
                    <>
                        <div className="helpPara"></div>

                        <Container className="portfolioContainer">
                            <Row>
                                <Portfolio />
                            </Row>
                        </Container>
                    </>
                ) : (
                    <>
                        <div className="container">
                            <div className="row flex-lg-row flex-column-reverse  flex-md-column-reverse ">
                                <div className="col map-view-scroll mt-lg-0 mt-5">
                                    {portfolioItems.map((data, index) => {
                                        return (
                                            <div
                                                onMouseOver={() =>
                                                    setPropertyMap(data)
                                                }
                                                className="col map-viewimg d-flex flex-column"
                                                style={{ position: "relative" }}
                                            >
                                                {data?.pictures[0]?.length >
                                                0 ? (
                                                    <img
                                                        src={data?.pictures}
                                                        className={` property-img property-img-height border-none`}
                                                        alt=""
                                                        style={{
                                                            width: "95%",
                                                            height: "40vh",
                                                        }}
                                                    />
                                                ) : (
                                                    <Loader />
                                                )}
                                                <div className="propertyDescription-map-view">
                                                    <div className="description">
                                                        <h3>{data?.name}</h3>
                                                        <h5>
                                                            {data?.location}
                                                        </h5>
                                                        <div className="propertyFeatures">
                                                            <span>
                                                                {" "}
                                                                <LocationOnIcon />{" "}
                                                                <h4>
                                                                    {
                                                                        data?.location
                                                                    }
                                                                </h4>{" "}
                                                            </span>
                                                            <span>
                                                                {" "}
                                                                <LocalAtmIcon />{" "}
                                                                <h4>
                                                                    {
                                                                        data?.price
                                                                    }{" "}
                                                                </h4>{" "}
                                                            </span>
                                                            <span>
                                                                <HomeIcon />{" "}
                                                                <h4>
                                                                    {data?.ready
                                                                        ? "Ready to Move-In"
                                                                        : "Possession Soon"}{" "}
                                                                </h4>
                                                            </span>
                                                            
                                                            <span>
                                                                {" "}
                                                                <BedroomChildIcon />{" "}
                                                                <h4>
                                                                    {data?.unitDetails
                                                                        .map(
                                                                            (
                                                                                i
                                                                            ) =>
                                                                                i.bhk
                                                                        )
                                                                        .join(
                                                                            ", "
                                                                        )}{" "}
                                                                    BHK
                                                                </h4>{" "}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <Link
                                                        to={`/project/${formatString(
                                                            data.name
                                                        )}`}
                                                    >
                                                        <button>
                                                            View Project
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="col px-lg-4 pt-5 pt-md-0 pt-lg-0">
                                    <Map
                                        lat={
                                            propertyMap?.lat &&
                                            parseFloat(propertyMap?.lat)
                                        }
                                        lng={
                                            propertyMap?.lng &&
                                            parseFloat(propertyMap?.lng)
                                        }
                                        location={propertyMap?.location}
                                        projectName={propertyMap?.name}
                                        height="500px"
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default ProjectPortfolio;
