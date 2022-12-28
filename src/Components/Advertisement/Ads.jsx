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
import GetInTouch from '../Contact/GetInTouch'

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
            {/*-------- Banner ----------  */}
            <div className="banner-container">
                <img src={AdsImage} style={{ width: "100%", height: "100%" }} alt="" />
            </div>
            {/* ----------- Register Form ------- */}
            <Container fluid className='mt-5' style={{ padding: "0 30px" }}>
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
            {/* ------------ Tiles ----------- */}
            <Container fluid className='mt-5'>
                <div className="sec5">
                    <h3>THE 6 PILLARS OF OUR SUCCESS</h3>
                </div>
                <Row className="mt-4">
                    <Col lg={4}>
                        <div className="tiles-card">
                            <div>
                                <div className='d-flex align-items-center'>
                                    <i class="fa-solid fa-circle-check"></i>
                                    <h5>QUALITY</h5>
                                </div>
                                <p>Delivering high quality projects forms the bedrock of whatever we do</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="tiles-card">
                            <div className='d-flex align-items-center'>
                                <i class="fa-solid fa-location-dot"></i>
                                <h5>EFFICIENT SPACE PLANNING</h5>
                            </div>
                            <p>Our team ensures that the space planning is done in the most efficient way</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="tiles-card">
                            <div className='d-flex align-items-center'>
                                <i class="fa fa-pencil-square"></i>
                                <h5>EFFICIENT SPACE PLANNING</h5>
                            </div>
                            <p>Our team will constantly work on cost efficiency so that the end user will enjoy it.</p>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col lg={4}>
                        <div className="tiles-card">
                            <div>
                                <div className='d-flex align-items-center'>
                                    <i class="fa fa-clock-o"></i>
                                    <h5>TIMELY DELIVERY</h5>
                                </div>
                                <p>Our team delivers quality and on time as per our promises</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="tiles-card">
                            <div className='d-flex align-items-center'>
                                <i class="fa fa-users"></i>
                                <h5>BUILDING WITH TRUST & HONESTY</h5>
                            </div>
                            <p>Our values our built on the foundation of trust and honesty</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="tiles-card">
                            <div className='d-flex align-items-center'>
                                <i class="fa fa-user-circle-o"></i>
                                <h5>EXPERTS AT WORK</h5>
                            </div>
                            <p>Our team comprises of exceptional construction & real estate experts</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* ----------- Project List ---------- */}
            <div className="sec4-container mt-5">
                <h3>Projects</h3>
                <div className="project-underline"></div>
                <div className="project-whole-card">
                    <Container fluid className='mt-5'>
                        {
                            portfolioItems.map((data) => (
                                <Row className='mt-4'>
                                    <Col lg={4}>
                                        <div className="site-img">
                                            <img src={data?.pictures} style={{ width: "100%", height: "100%", borderRadius: "10px" }} alt="" />
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="site-details">
                                            <h3>{data?.name}</h3>
                                            <div className="site-sub-details">
                                                <div className="d-flex sub-detail-container">
                                                    <LocationOnIcon className="detail-icon" />
                                                    <h4>{data?.location}</h4>
                                                </div>
                                                <div className="d-flex sub-detail-container">
                                                    <LocalAtmIcon className="detail-icon" />
                                                    <h4>{data?.price}</h4>
                                                </div>
                                                <div className="d-flex sub-detail-container">
                                                    <HomeIcon className="detail-icon" />
                                                    <h4>{data?.ready ? "Ready To move" : "Posession Soon"}</h4>
                                                </div>
                                                <div className="d-flex sub-detail-container">
                                                    <BedroomChildIcon className="detail-icon" />
                                                    <h4>{data?.BHK},BHK</h4>
                                                </div>
                                            </div>
                                            <Link to={`/property/${data?._id}`}>
                                                <button className='view-property-btn'>View Property</button>
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="site-offer">
                                            <h3>Offers</h3>
                                        </div>
                                    </Col>
                                </Row>
                            ))
                        }
                    </Container>
                </div>
            </div>
            {/* --------------------- Contact Us ------------- */}
            <GetInTouch />
        </>
    )
}

export default Ads