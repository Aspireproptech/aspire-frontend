import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row, Modal } from "react-bootstrap";
import AdsImage from "../../Assets/Ads/banner2.png";
import AdsMobileImage from "../../Assets/Ads/mobile-banner.png";

import Portfolio from "../HomePage/Portfolio";
import "./ads.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import HomeIcon from "@mui/icons-material/Home";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";
import { Link, useNavigate } from "react-router-dom";
import { FetchPropertyData, ImageEmailData, ProjectEnquiry, RegisterData } from "../API/Api";
import DiwaliBanner from "../../Assets/Ads/diwali-banner.png"

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
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [passSeq, setPassSeq] = useState({});
  const [projectImg, setProjectImg] = useState();
  const [projectName, setProjectName] = useState();
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleCloseEnquiry = () => setShowEnquiry(false);
  const handleShow = (projName) => {
    console.log(projName);
    setRegister({ ...register, projectName: projName });
    setShow(true);
  };
  const handleShowEnquiry = (projName) => {
    setShowEnquiry(true);
  };
  const [OfferDate, setOfferDate] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  })


  function getDateDiffInDHM(startDate, endDate) {
    const diffMs = Math.abs(endDate.getTime() - startDate.getTime());
    const totalMinutes = Math.floor(diffMs / (1000 * 60));
    const days = Math.floor(totalMinutes / (24 * 60));
    const hours = Math.floor((totalMinutes - (days * 24 * 60)) / 60);
    const minutes = totalMinutes - (days * 24 * 60) - (hours * 60);
    setOfferDate({
      days: days, hours: hours, minutes: minutes
    })
  }

  const endDate = new Date("2023-11-30T00:00:43.000Z");
  endDate.setHours(0, 0, 0, 0)

  useEffect(() => {
    const startDate = new Date();
    getDateDiffInDHM(startDate, endDate)
    setInterval(() => {
      const startDate = new Date();
      getDateDiffInDHM(startDate, endDate)
    }, 60000)

  }, [])
  console.log(OfferDate); // { days: 30, hours: 0, minutes: 0 }

  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    projectName: "",
    phone: "",
    email: "",
  });
  const [enquiry, setEnquiry] = useState({
    firstName: "",
    lastName: "",
    projectName: "",
    phone: "",
    email: "",
    location: "",
    configuration: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };
  const handleEnquiryChange = (e) => {
    const { name, value } = e.target;
    setEnquiry({ ...enquiry, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        firstName: register.firstName,
        lastName: register.lastName,
        projectName: register.projectName,
        email: register.email,
        phone: register.phone,
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
  const handleEnquiryClick = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        firstName: enquiry.firstName,
        lastName: enquiry.lastName,
        projectName: enquiry.projectName,
        email: enquiry.email,
        number: enquiry.phone,
        location: enquiry.location,
        configuration: enquiry.configuration,
      };
      const data = await ProjectEnquiry(payload);
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
      console.log(data)
      var arr = [];
      const val = data?.data.filter((e) => e.name !== "SLV Icon");
      const seq = [
        "Sohan Exotica",
        "Terraza",
        "High Cliff",
        "Sree Urban Pinnacle",
        "Revanta",
        "Pyramid Bilberry",
      ];
      const offerDetail = [
        {
          location: "Sahakar Nagar",
          price: "1.15 Cr Onwards",
          home: "Under Construction",
          blocks: "3 & 4 BHK",
          head: "Sohan Exotica",
          offer: [
            {
              line: "Get 10 gm Gold Coin on Spot Closures",
            },
            {
              line: "No Floor Rise Charges",
            },
            {
              line: "Upto 20% Discount on Home Interiors",
            },
            {
              line: "Offers applicable only for first 6 bookings during the offer period.",
            },
          ],
        },
        {
          location: "Thanisandra Main Road",
          price: "1.36 Cr Onwards",
          home: "Ready to Move-In",
          blocks: "3, 3.5 & 4 BHK",
          head: "Terraza",
          offer: [
            {
              line: "Get 1 Extra Car Park Complimentary",
            },
            {
              line: "No Floor Rise Charges",
            },
            {
              line: "Upto 20% Discount on Home Interiors",
            },
            {
              line: "Offers applicable only for first 6 bookings during the offer period.",
            },
          ],
        },
        {
          location: "Off Thanisandra Main Road",
          price: "57 Lakh Onwards",
          home: "Possession Soon",
          blocks: "2 & 3 BHK",
          head: "Sree Urban Pinnacle",
          offer: [
            {
              line: "Discount of Rs.2,00,001/- on Spot Closures",
            },
            {
              line: "EMI Holiday Option From Selected Banks & NBFCs",
            },
            {
              line: "Upto 20% Discount on Home Interiors",
            },
            {
              line: "Offers applicable only for first 6 bookings during the offer period.",
            },
          ],
        },
        {
          location: "Off Thanisandra Main Road",
          price: "42 Lakhs Onwards",
          home: "Ready to Move-In",
          blocks: "2 & 3 BHK",
          head: "Pyramid Bilberry",
          offer: [
            {
              line: "Earn upto 6% Rental Yield",
            },
            {
              line: "Fully Furnished with Interiors",
            },
            {
              line: "Immediate Possession",
            },
            {
              line: "Last few units left. Hurry!",
            },
          ],
        },
        {
          location: "Off Belathur, Whitefield",
          price: "70 Lakhs onwards",
          home: "Under Construction",
          blocks: "2 & 3 BHK",
          head: "Revanta",
          offer: [
            {
              line: "Attractive Launch Offers",
            },
            {
              line: "Premium Units Available",
            },
            {
              line: "Upto 20% Discount on Home Interiors",
            },
            {
              line: "Offers applicable only for first 5 bookings during the offer period.",
            },
          ],
        },
        {
          location: "Panathur Main Road",
          price: "1.29 Cr Onwards",
          home: "Under Construction",
          blocks: "2, 2.5 & 3 BHK",
          head: "High Cliff",
          offer: [
            {
              line: "Attractive Re-Launch Offers",
            },
            {
              line: "Premium Units Available",
            },
            {
              line: "Upto 20% Discount on Home Interiors",
            },
            {
              line: "Offers applicable only for first 7 bookings during the offer period.",
            },
          ],
        },
        // {
        //   head: "Alpine Pyramid",
        //   offer: [
        //     {
        //       line: "Flat Discount of Rs.500/- per sqft on basic rate",
        //     },
        //     {
        //       line: "Complete waiver of all other charges",
        //     },
        //     {
        //       line: "Upto 25% discount on Home Interiors",
        //     },
        //     {
        //       line: "AHF Offers extended for 3 units",
        //     },
        //   ],
        // },
        // {
        //   head: "Amigo Estella",
        //   offer: [
        //     {
        //       line: "Flat Discount of Rs.200/- per sqft on basic rate",
        //     },
        //     {
        //       line: "Attractive offers on Home Loans",
        //     },
        //     {
        //       line: "Upto 25% discount on Home Interiors",
        //     },
        //     {
        //       line: "AHF Offers extended for 4 units",
        //     },
        //   ],
        // },
        // {
        //   head: "Aryav Greenfields",
        //   offer: [
        //     {
        //       line: "Flat Discount of Rs.200/- per sqft on basic rate",
        //     },
        //     {
        //       line: "Reduced charges for Car Parking and Amenities",
        //     },
        //     {
        //       line: "Upto 25% discount on Home Interiors",
        //     },
        //     {
        //       line: "AHF Offers extended for 5 units",
        //     },
        //   ],
        // },
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
    document.title = "Aspire Proptech | Grand Diwali Home Festival 2023";
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
                    6 Projects
                    <br /> 20 Days
                  </h5>
                </div>
                <div className="left-card">
                  <div className="ad-card-img mb-4">
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                  </div>
                  <h5>Homes From 42 Lakhs to 2.5 Cr</h5>
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
        <h3>Unwrap the gift of Homeownership this Diwali!</h3>
        <div className="sec-list mt-3">
          <p>
            Get ready to sparkle and shine this Diwali with our <strong> Grand Diwali Home Festival ! </strong>
            It's not just another fest; it's a carnival of dreams where your ultimate home wishes come true.

            <br />
            <br />
            We've sprinkled the festival spirit across  <strong>6 remarkable projects,</strong> all nestled in the most coveted corners of
            <strong> North & East Bangalore.</strong>
            It's like a treasure hunt for your perfect abode, and we've hidden them in the

            <strong>most prime locations!</strong>
            <br />
            <br />
            But what's the magic, you ask?
            <br />
            <br />
            Brace yourself for a twist in the tale – <strong>unbeatable deals and offers </strong>that will make you dance with joy and offers that will light up your world brighter than a thousand diyas.
            <br /><br />
            Why wait? It's time to light up your life with exclusive Diwali deals and offers that will make your home buying journey a firework of delight! 🔥💫

          </p>
        </div>
      </div>
      {/* ------------ Tiles ----------- */}
      {/* <Container fluid className="mt-5">
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
      </Container> */}

      <div className="mt-5">
        <img className="w-100" src={DiwaliBanner} alt="" />
        <div className="d-flex justify-content-center offer-box mt-3">
          <h3>OFFER ENDS IN {OfferDate.days > 9 ? <span>{OfferDate.days}d</span> : <span>0{OfferDate.days}d</span>} : {OfferDate.hours > 9 ? <span>{OfferDate.hours}h</span> : <span>0{OfferDate.hours}h</span>} : {OfferDate.minutes > 9 ? <span>{OfferDate.minutes}m</span> : <span>0{OfferDate.minutes}m</span>}</h3>
        </div>
      </div>
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
      {/* --------------------- new section  ------------- */}
      <div className="sec3-container mt-5">
        <h3>Sparkling Surprises</h3>
        <div className="sec-list mt-3">
          <p>
            Join us in celebrating Diwali and the joy of new beginnings with our soon-to-be-launched residential projects. Your dream home is just around the corner!


            <br />
            <br />
            As we gear up for these remarkable projects, we're curious – what does your dream home look like?

            <br />
            <br />
            <div className="GetInTouch-btn">
              <button className="m-0" style={{ height: "auto", width: "175px" }} onClick={handleShowEnquiry}>
                Enquire Now
              </button>
            </div>
            <br />
            Stay tuned for updates and be a part of the grand celebration! 🪔🏡✨
          </p>
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
      <Modal show={showEnquiry} onHide={handleCloseEnquiry} centered>
        <div className="register-box">
          <h5>
            New Launch Projects Enquiry
            <i
              onClick={handleCloseEnquiry}
              class="fa-solid fa-circle-xmark close-cancel-btn"
            ></i>
          </h5>
          <div className="register-field">
            <form onSubmit={handleEnquiryClick}>
              <input
                name="firstName"
                value={enquiry.firstName}
                type="text"
                pattern="[a-zA-Z ]{2,30}"
                title="Only Character"
                onChange={handleEnquiryChange}
                required
                placeholder="First Name*"
              />
              <input
                name="lastName"
                value={enquiry.lastName}
                type="text"
                pattern="[a-zA-Z ]{2,30}"
                title="Only Character"
                onChange={handleEnquiryChange}
                placeholder="Last Name "
              />
              <input
                type="text"
                value={enquiry.phone}
                name="phone"
                required
                pattern="[0-9]{10}"
                title="Enter Valid Phone No."
                onChange={handleEnquiryChange}
                placeholder="Phone Number *"
              />
              <input
                type="text"
                value={enquiry.email}
                name="email"
                required
                onChange={handleEnquiryChange}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Enter Valid Email"
                placeholder="Email *"
              />
              {/* <input value={enquiry.projectName} readOnly type="text" /> */}
              <select onChange={handleEnquiryChange} name="location">
                <option value="" selected>Select Location</option>
                <option value="North Banglore" >North Banglore</option>
                <option >East Banglore</option>
              </select>
              <select onChange={handleEnquiryChange} name="configuration">
                <option value="" >Select Configuration</option>
                <option value="Studio" >Studio</option>
                <option value="2 BHK" >2 BHK</option>
                <option value="3 BHK" >3 BHK</option>
                <option value="4 BHK" >4 BHK</option>
              </select>
              <p>
                I Agree to the <a href="">Terms & Conditions.</a>
              </p>
              <div className="register-btn ">
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Ads;
