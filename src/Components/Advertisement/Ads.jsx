import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row, Modal } from "react-bootstrap";
import AdsImage from "../../Assets/Ads/Adds.jpg";
import AdsMobileImage from "../../Assets/Ads/Adds-mobile.jpg";

import Portfolio from "../HomePage/Portfolio";
import "./ads.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import HomeIcon from "@mui/icons-material/Home";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";
import { Link, useNavigate } from "react-router-dom";
import { FetchPropertyData, ImageEmailData, RegisterData } from "../API/Api";

import PatioPass from "../../Assets/Ads/patio-pass.png";
import RoashanPass from "../../Assets/Ads/roshan-pass.png";
import TerrazaPass from "../../Assets/Ads/terraza-pass.png";
import AlpinePass from "../../Assets/Ads/alpine-pass.png";
import BilberryPass from "../../Assets/Ads/bilberry-pass.png";
import EstellaPass from "../../Assets/Ads/estella-pass.png";
import GreenFieldsPass from "../../Assets/Ads/greenfields-pass.png";
import PinnaclePass from "../../Assets/Ads/pinnacle-pass.png";
import WatsoniaPass from "../../Assets/Ads/watsonia-pass.png";

import html2canvas from "html2canvas";
import { storage } from "../../firebase";
import axios from "axios";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  uploadBytes,
} from "firebase/storage";
import AdsContact from "./AdsContact";
import HomeFest from "../Common/HomeFest";

const Ads = ({ festinquiry, setFestInquiry }) => {
  const [portfolioItems, setportfolioItems] = useState([]);
  const [PortfolioDetail, setPortfolioDetail] = useState();
  const [propertyMap, setPropertyMap] = useState({});
  const [show, setShow] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [passSeq, setPassSeq] = useState({});
  const [projectImg, setProjectImg] = useState();
  const [projectName, setProjectName] = useState();
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = (projName) => {
    console.log(projName);
    setRegister({ ...register, projectName: projName });
    setShow(true);
  };

  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    projectName: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        firstName: register.firstName,
        lastName: register.lastName,
        projectName: register.projectName,
        email: register.email,
        number: register.phone,
      };
      const data = await RegisterData(payload);
      setFestInquiry({ festCustomer: payload, CustomerSeq: data.data.data });
      navigate("/thank-you");
      setRegister({
        firstName: "",
        lastName: "",
        projectName: "Please choose project name",
        phone: "",
        email: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPortfolio = async () => {
    try {
      const { data } = await FetchPropertyData();
      var arr = [];
      const val = data?.data.filter((e) => e.name !== "SLV Icon");
      const seq = [
        "Speckles Patio",
        "Sree Urban Pinnacle",
        "Terraza by SA Lifetsyle",
        "Pyramid Bilberry",
        "Amigo Estella",
        "Pyramid Watsonia",
        "Aryav Greenfields",
        "Alpine Pyramid",
        "Roshan Gardenia",
      ];
      const offerDetail = [
        {
          head: "Sree Urban Pinnacle",
          offer: [
            {
              line: "Exclusive Launch Price* of Rs.3990/- per sqft (basic rate)",
            },
            {
              line: "50% discount on other charges or EMI Waiver for 15 months",
            },
            {
              line: "EMI Holiday Option from Select Banks and NBFCs",
            },
            {
              line: "Launch Offers applicable for 21 units",
            },
          ],
        },
        {
          head: "Pyramid Bilberry",
          offer: [
            {
              line: "Waiver of Car Parking Charges worth Rs. 2 Lakhs",
            },
            {
              line: "Flat Discount of Rs.250/- per sqft on basic rate",
            },
            {
              line: "Get a 65” Branded LED TV for Spot Closures",
            },
            {
              line: "Upto 25% discount on Home Interiors",
            },
            {
              line: "AHF Offers extended for 5 units",
            },
          ],
        },
        {
          head: "Pyramid Watsonia",
          offer: [
            {
              line: "Waiver of Car Parking Charges worth Rs. 2 Lakhs",
            },
            {
              line: "Flat Discount of Rs.300/- per sqft on basic rate",
            },
            {
              line: "Get a 65” Branded LED TV for Spot Closures",
            },
            {
              line: "Upto 25% discount on Home Interiors",
            },
            {
              line: "AHF Offers extended for 2 units",
            },
          ],
        },
        {
          head: "Terraza by SA Lifetsyle",
          offer: [
            {
              line: "Flat Discount of Rs.300/- per sqft on basic rate",
            },
            {
              line: "Get 1 Car Park Extra for FREE (worth Rs. 4 Lakhs)",
            },
            {
              line: "Get a discount of Rs.2 Lakhs for Spot Closures",
            },
            {
              line: "AHF Offers extended for 5 units",
            },
          ],
        },
        {
          head: "Speckles Patio",
          offer: [
            {
              line: "All-inclusive Box Price",
            },
            {
              line: "Get white goods of your choice worth Rs.2 Lakhs for Spot Closures",
            },
            {
              line: "AHF Offers extended for 2 units",
            },
          ],
        },
        {
          head: "Roshan Gardenia",
          offer: [
            {
              line: "Flat Discount of Rs.350/- per sqft on basic rate",
            },
            {
              line: "Waiver of Car Parking Charges, FRC & PLC Charges",
            },
            {
              line: "Get white goods of your choice worth Rs.2 Lakhs for Spot Closures",
            },
            {
              line: "AHF Offers extended for 3 units",
            },
          ],
        },
        {
          head: "Alpine Pyramid",
          offer: [
            {
              line: "Flat Discount of Rs.500/- per sqft on basic rate",
            },
            {
              line: "Complete waiver of all other charges",
            },
            {
              line: "Upto 25% discount on Home Interiors",
            },
            {
              line: "AHF Offers extended for 3 units",
            },
          ],
        },
        {
          head: "Amigo Estella",
          offer: [
            {
              line: "Flat Discount of Rs.200/- per sqft on basic rate",
            },
            {
              line: "Attractive offers on Home Loans",
            },
            {
              line: "Upto 25% discount on Home Interiors",
            },
            {
              line: "AHF Offers extended for 4 units",
            },
          ],
        },
        {
          head: "Aryav Greenfields",
          offer: [
            {
              line: "Flat Discount of Rs.200/- per sqft on basic rate",
            },
            {
              line: "Reduced charges for Car Parking and Amenities",
            },
            {
              line: "Upto 25% discount on Home Interiors",
            },
            {
              line: "AHF Offers extended for 5 units",
            },
          ],
        },
      ];

      for (let i = 0; i < seq.length; i++) {
        const newarr = data?.data.find((e) => e.name.includes(seq[i]));
        const object1 = {
          ...newarr,
          offers: offerDetail?.find((e) => e.head.includes(seq[i])),
        };
        console.log(object1);
        arr.push(object1);
      }
      console.log(arr);
      setportfolioItems(arr);
      // setPortfolioDetail(data?.data[0]);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPortfolio();
    document.title = "Aspire Proptech | Home Fest 2023";
  }, []);

  return (
    <>
      <HomeFest />
      {/*-------- Banner ----------  */}
      <div className="banner-container">
        <img
          src={AdsImage}
          className="ads-banner-web"
          style={{ width: "100%", height: "100%" }}
          alt=""
        />
        <img
          src={AdsMobileImage}
          className="ads-banner-mob"
          style={{ width: "100%", height: "100%" }}
          alt=""
        />
      </div>
      {/* ----------- Register Form ------- */}
      <Container fluid className="mt-5" style={{ padding: "0 30px" }}>
        <Row className="align-items-center">
          <Col lg={8}>
            <div className="ad-sec2-left">
              <h3>Great Selection Of Projects + Great Offers</h3>
              <div className="head-underline"></div>
              <div className="d-flex ad-sec2-list mt-4">
                <div className="left-card">
                  <div className="ad-card-img mb-4">
                    <i class="fa-solid fa-building"></i>
                  </div>
                  <h5>
                    9 Projects
                    <br /> 12 + 12 Days
                  </h5>
                </div>
                <div className="left-card">
                  <div className="ad-card-img mb-4">
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                  </div>
                  <h5>Homes From 40 Lakhs to 2.5 Cr</h5>
                </div>

                <div className="left-card">
                  <div className="ad-card-img mb-4">
                    <i class="fa-sharp fa-solid fa-gift"></i>
                  </div>
                  <h5>Mega Offers & Discounts</h5>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="register-box">
              <h5>Get a Callback</h5>
              <div className="register-field">
                <form onSubmit={handleClick}>
                  <input
                    name="firstName"
                    value={register.firstName}
                    type="text"
                    pattern="[a-zA-Z ]{2,30}"
                    title="Only Character"
                    onChange={handleChange}
                    required
                    placeholder="First Name*"
                  />
                  <input
                    name="lastName"
                    value={register.lastName}
                    type="text"
                    pattern="[A-Za-z]{2,30}"
                    title="Only Character"
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                  <select
                    value={register.projectName}
                    onChange={handleChange}
                    required
                    name="projectName"
                  >
                    <option value="">Please choose project name</option>
                    {portfolioItems.map((e) => (
                      <option>{e?.name}</option>
                    ))}
                  </select>
                  <input
                    type="phone"
                    value={register.phone}
                    maxLength={10}
                    pattern="[0-9]{10}"
                    title="Enter Valid Phone No."
                    name="phone"
                    required
                    onChange={handleChange}
                    placeholder="Phone Number*"
                  />
                  <input
                    type="email"
                    value={register.email}
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Enter Valid Email"
                    required
                    onChange={handleChange}
                    placeholder="Email *"
                  />
                  <p>
                    I Agree to the <a href="">Terms & Conditions.</a>
                  </p>
                  <div className="register-btn ">
                    <button>Register</button>
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="sec3-container mt-5">
        <h3>Your Dream Home is Here</h3>
        <div className="sec-list mt-3">
          <p>
            We present to you <strong>Aspire Home Fest 2023</strong> - a fest
            that promises to take you a step closer to the home of your dreams.
            <br />
            <br />
            With <strong>9 projects</strong> to choose from, in various{" "}
            <strong>prime locations of North, East, and South Bangalore</strong>
            , and with offers that are difficult to resist,{" "}
            <strong>Aspire Home Fest</strong> brings you the best opportunity in
            2023 to finally get the home you desire!
            <br />
            <br />
            <strong>Register now</strong> to get exclusive deals and offers that
            make home buying a lot easier, simpler, and lighter on your pocket.
          </p>
        </div>
      </div>
      {/* ------------ Tiles ----------- */}
      <Container fluid className="mt-5">
        <div className="sec5">
          <h3>4 Easy Steps to Buy Your Dream Home</h3>
        </div>
        <Row className="mt-4">
          <Col lg={6} className="tiles-margin">
            <div className="tiles-card">
              <div>
                <div className="d-flex align-items-center">
                  <i class="fa-solid fa-1"></i>
                  <h5>
                    Go to <strong>www.aspireprop.com</strong>, click on the
                    Aspire Home Fest Icon and then click on the project of your
                    choice.
                  </h5>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className="tiles-margin">
            <div className="tiles-card">
              <div className="d-flex align-items-center">
                <i class="fa-solid fa-2"></i>
                <h5>
                  Click on <strong>‘Register Now!’</strong> to get yourself
                  registered for the home fest.
                </h5>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={6} className="tiles-margin">
            <div className="tiles-card">
              <div>
                <div className="d-flex align-items-center">
                  <i class="fa-solid fa-3"></i>
                  <h5>
                    You’ll receive a priority pass via mail. Show your{" "}
                    <strong>‘Priority Pass’</strong> during the site visit.
                  </h5>
                </div>
                {/* <p>Our team delivers quality and on time as per our promises</p> */}
              </div>
            </div>
          </Col>
          <Col lg={6} className="tiles-margin">
            <div className="tiles-card">
              <div className="d-flex align-items-center">
                <i class="fa-solid fa-4"></i>
                <h5>
                  Don’t forget to use <strong>the unique pass code</strong>{" "}
                  while booking your dream home to avail the offers.
                </h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* ----------- Project List ---------- */}
      <div className="sec4-container mt-5">
        <h3 className="project-heading">Projects</h3>
        <div className="project-underline"></div>
        <div className="project-whole-card">
          <Container fluid className="mt-5">
            {portfolioItems.map((data) => (
              <Row className="mt-4">
                <Col lg={4}>
                  <div className="site-img">
                    <img
                      src={data?.pictures}
                      className="ads-property-img"
                      alt=""
                    />
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="site-details">
                    <h3>{data?.name}</h3>
                    <div className="site-sub-details">
                      <div className="d-flex sub-detail-container">
                        <LocationOnIcon className="detail-icon" />
                        <h4>
                          <strong>{data?.location}</strong>
                        </h4>
                      </div>
                      <div className="d-flex sub-detail-container">
                        <LocalAtmIcon className="detail-icon" />
                        <h4>
                          <strong>{data?.price}</strong>
                        </h4>
                      </div>
                      <div className="d-flex sub-detail-container">
                        <HomeIcon className="detail-icon" />
                        <h4>
                          {data?.name === "Sree Urban Pinnacle" ? (
                            <strong>New Launch</strong>
                          ) : (
                            <strong>
                              {data?.ready
                                ? "Ready to Move-In"
                                : "Possession Soon"}
                            </strong>
                          )}
                        </h4>
                      </div>
                      <div className="d-flex sub-detail-container">
                        <BedroomChildIcon className="detail-icon" />
                        <h4 className="bhk-show">
                          {data?.unitDetails?.length === 2 ? (
                            <strong className="d-flex align-items-center">
                              {data?.unitDetails?.map((item, index) => (
                                <>
                                  <p
                                    className="mx-1"
                                    style={{ width: "0% !important" }}
                                    key={index}
                                  >
                                    {+item?.bhk}
                                  </p>
                                  {index === data?.unitDetails.length - 1
                                    ? null
                                    : " & "}
                                </>
                              ))}
                              <p>BHK</p>
                            </strong>
                          ) : (
                            <strong className="d-flex align-items-center">
                              {data?.unitDetails?.map((item, index) => (
                                <>
                                  <p
                                    className="mx-1"
                                    style={{ width: "0% !important" }}
                                    key={index}
                                  >
                                    {item?.bhk}
                                    {index === data?.unitDetails.length - 2 ||
                                    index === data?.unitDetails.length - 1
                                      ? null
                                      : ","}
                                  </p>
                                  {index === data?.unitDetails.length - 2 &&
                                    "&"}
                                </>
                              ))}
                              <p>BHK</p>
                            </strong>
                          )}

                          {/* <strong className='d-flex align-items-center'>
                                                            {data?.unitDetails.map((item, index) => (
                                                                <p className="mx-1" style={{ width: "0% !important" }} key={index}>
                                                                    {item?.bhk}
                                                                    {index === PortfolioDetail?.unitDetails.length - 1
                                                                        ? null
                                                                        : ","}
                                                                    {index === PortfolioDetail?.unitDetails.length - 1
                                                                        ? null
                                                                        : ","}
                                                                </p>
                                                            ))} <p>BHK</p>
                                                        </strong> */}
                        </h4>
                      </div>
                    </div>
                    <button
                      onClick={() => handleShow(data?.name)}
                      className="view-property-btn"
                    >
                      Register Now
                    </button>
                    <Link to={`/project/${data?._id}`}></Link>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="site-offer">
                    <h3>Offers</h3>
                    <div className="comming-soon">
                      <ul>
                        {data?.offers?.offer.map((e) => (
                          <li>{e.line}</li>
                        ))}
                      </ul>
                      {/* <h4>Coming Soon</h4> */}
                    </div>
                  </div>
                </Col>
              </Row>
            ))}
          </Container>
        </div>
      </div>
      {/* --------------------- Contact Us ------------- */}
      <AdsContact />

      {/* {
                showPass && (
                    <div class="boq-service">
                        <div className="card-achv box-shadow justify-center box-shadow shadow-2xl">
                            <div className="priority-container" id="pass">
                                <img src={projectImg} style={{ width: "100%", height: "100%" }} alt="" />
                                <div className="user-id">
                                    <h3>#{passSeq?.data?.data}</h3>
                                </div>
                            </div>
                            <div onClick={handleDownload} className="download-button">
                                <button> <i class="fa-solid fa-download"></i> Download</button>
                            </div>
                            <i onClick={() => setShowPass(false)} class="fa-solid fa-circle-xmark close-pass-btn"></i>
                        </div>
                    </div>

                )
            } */}

      <Modal show={show} onHide={handleClose} centered>
        <div className="register-box">
          <h5>
            Get a Callback
            <i
              onClick={handleClose}
              class="fa-solid fa-circle-xmark close-cancel-btn"
            ></i>
          </h5>
          <div className="register-field">
            <form onSubmit={handleClick}>
              <input
                name="firstName"
                value={register.firstName}
                type="text"
                pattern="[a-zA-Z ]{2,30}"
                title="Only Character"
                onChange={handleChange}
                required
                placeholder="First Name*"
              />
              <input
                name="lastName"
                value={register.lastName}
                type="text"
                pattern="[a-zA-Z ]{2,30}"
                title="Only Character"
                onChange={handleChange}
                placeholder="Last Name "
              />
              <input value={register.projectName} readOnly type="text" />
              {/* <select value={register.projectName} onChange={handleChange} name="projectName">
                                <option selected>{register.projectName}</option>
                                {
                                    portfolioItems.map((e) => (
                                        <option>{e?.name}</option>
                                    ))
                                }
                            </select> */}
              <input
                type="text"
                value={register.phone}
                name="phone"
                required
                pattern="[0-9]{10}"
                title="Enter Valid Phone No."
                onChange={handleChange}
                placeholder="Phone Number *"
              />
              <input
                type="text"
                value={register.email}
                name="email"
                required
                onChange={handleChange}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Enter Valid Email"
                placeholder="Email *"
              />
              <p>
                I Agree to the <a href="">Terms & Conditions.</a>
              </p>
              <div className="register-btn ">
                <button>Register</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Ads;
