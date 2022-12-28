import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdsImage from "../../Assets/Ads/Ad1-old.jpg"
import Portfolio from '../HomePage/Portfolio'
import "./ads.css"
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import HomeIcon from "@mui/icons-material/Home";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";
import { Link } from "react-router-dom";
import { FetchPropertyData } from "../API/Api";

const Ads = () => {


    const [portfolioItems, setportfolioItems] = useState([]);
    const [PortfolioDetail, setPortfolioDetail] = useState();
    const [propertyMap, setPropertyMap] = useState({});

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

    return (
        <>
            <div className="banner-container">
                <img src={AdsImage} style={{ width: "100%", height: "100%" }} alt="" />
            </div>
            <Container fluid className='mt-5'>
                <Row className='align-items-center'>
                    <Col lg={8}>
                        <div className="ad-sec2-left">
                            <h3>Brigade Year End Bonanza</h3>
                            <div className="head-underline"></div>
                            <div className="d-flex ad-sec2-list mt-4">
                                <div className="left-card">
                                    <div className="ad-card-img mb-4">
                                        <i class="fa-solid fa-indian-rupee-sign"></i>
                                    </div>
                                    <h5>Homes From ₹30L - 4.6 Cr*</h5>
                                </div>
                                <div className="left-card">
                                    <div className="ad-card-img mb-4">
                                        <i class="fa-sharp fa-solid fa-gift"></i>
                                    </div>
                                    <h5>Exclusive Deals</h5>
                                </div>
                                <div className="left-card">
                                    <div className="ad-card-img mb-4">
                                        <i class="fa-solid fa-building"></i>
                                    </div>
                                    <h5>Over 35+ Projects</h5>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="register-box">
                            <h5>Register Your Interest</h5>
                            <div className="register-field">
                                <input type="text" placeholder='First Name' />
                                <input type="text" placeholder='last Name' />
                                <select name="" id="">
                                    <option value="" selected>Please choose country code</option>
                                </select>
                                <input type="text" placeholder='Phone' />
                                <input type="text" placeholder='Email' />
                                <p>I Agree to the <a href="">Terms & Conditions.</a></p>

                                <div className="register-btn ">
                                    <button>Register</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="sec3-container mt-5">
                <h3>Integrated Townships • Apartments • Townhouses • Villas • Penthouses • Plots</h3>
                <div className="sec-list mt-3">
                    <ul className='m-0'>
                        <li>Projects across Bengaluru - Aerospace Park, Banashankari, Budigere Cross, Devanahalli, Hebbal, Jakkur, Jalahalli, Kanakapura Road, Kogilu Road, Mysore Road, Old Madras Road, Padmanabhanagar, Sarjapur Road & Whitefield-Sarjapur Road</li>
                        <li>Also in CHENNAI, HYDERABAD & MYSURU</li>
                    </ul>
                </div>
            </div>
            <div className="sec4-container mt-5">
                <h3>Projects</h3>
                <div className="project-underline"></div>
                <div className="d-flex project-list mt-5">
                    {portfolioItems.map((data, index) => {
                        return (
                            <div className='flat-card mx-auto'>
                                {data?.pictures[0]?.length > 0 ? (
                                    <div className="flat-img">
                                        <img src={data?.pictures}
                                            className={` property-img property-img-height border-none`}
                                            alt=""
                                            style={{ width: "100%", height: "100%" }}
                                        />
                                    </div>
                                ) : (
                                    <h2
                                        style={{ height: "40vh" }}
                                        className="border-none alternate-text-property"
                                    >
                                        No Image For Property
                                    </h2>
                                )}
                                <div className="propertyDescription-map-view align-item-card">
                                    <div className="description">
                                        <h3>{data?.name}</h3>
                                        <h5>{data?.location}</h5>
                                        <div className="propertyFeatures">
                                            <span>
                                                {" "}
                                                <LocationOnIcon /> <h4>
                                                    {data?.location}
                                                </h4>{" "}
                                            </span>
                                            <span>
                                                {" "}
                                                <LocalAtmIcon /> <h4>{data?.price} </h4>{" "}
                                            </span>
                                            <span>
                                                <HomeIcon />{" "}
                                                <h4>
                                                    {data?.ready
                                                        ? "Ready To move"
                                                        : "Posession Soon"}{" "}
                                                </h4>
                                            </span>
                                            <span>
                                                {" "}
                                                <BedroomChildIcon /> <h4>
                                                    {data?.BHK},BHK
                                                </h4>{" "}
                                            </span>
                                        </div>
                                    </div>

                                    <Link to={`/property/${data._id}`}>
                                        <button>View Property</button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Ads