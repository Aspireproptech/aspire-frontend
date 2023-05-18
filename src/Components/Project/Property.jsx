import React, { useState, useEffect } from "react";
import BottomFoot from "../Common/BottomFoot";
import NewNav from "../Common/NewNav";
import { Col, Container, Row } from "react-bootstrap";
import "../../Assets/Project/property.css";
// import p1 from "../../Assets/Images/p1.svg";
import p1 from "../../Assets/Ads/Adds.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaidIcon from "@mui/icons-material/Paid";
import PushPinIcon from "@mui/icons-material/PushPin";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import ApartmentIcon from "@mui/icons-material/Apartment";
import logo from "../../Assets/Images/blueLogo.png";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckIcon from "@mui/icons-material/Check";
import Singleunit from "./Singleunit";
import CustomizedAccordions from "./FAQaccordian";
import Map2 from "../Contact/Map2";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";
import {
    AddEnquiry,
    FetchCategoryBlog,
    FetchFeatureBlog,
    FetchSingleDeveloperData,
    FetchSinglePropertyData,
    FetchUSP,
    PostPriceData,
    PostQuote,
    RegisterData,
    RegisterDataBrochure,
} from "../API/Api";
import MapWithAMarker from "../Contact/Map";
import ScrollTrigger from "react-scroll-trigger";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import Map from "../Contact/Map";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import HomeBlogCard from "../Homeloan/HomeBlogCard";
import CarouselComponent from "../Partners/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeFest from "../Common/HomeFest";
import { decodeString } from "../../helper";
import SpinLoader from "../Common/SpinLoader";

function Property({ festinquiry, setFestInquiry }) {
    const [isLoading, setIsLoading] = useState(false);
    const [propertyData, setpropertyData] = useState({});
    const [pictures, setPictures] = useState([])

    const [unit, setunit] = useState(0);
    const [showModal, setshowModal] = useState(true);
    const [showSideform, setshowSideform] = useState(false);
    const [unitDetails, setunitDetails] = useState();
    const [showAmenity, setshowAmenity] = useState(false);
    const pName = propertyData?.name;
    const [quote, setquote] = useState({
        name: "",
        phone: "",
        email: "",
        property: pName,
    });
    const newName = pName?.replaceAll(" ", "-");
    console.log(newName);
    const navigate = useNavigate();

    console.log(propertyData?.broucher);
    useEffect(() => {
        setquote({
            name: "",
            phone: "",
            email: "",
            property: pName,
        });
    }, [pName]);
    console.log(quote);
    const location = useLocation();
    const param = useParams();
    console.log(propertyData);
    // sideform
    const handleCloseSideform = () => {
        setshowSideform(false);
    };

    const handleShowsideform = () => setshowSideform(true);
    const quoteSubmit = async () => {
        try {
            const data = await PostQuote(quote);
            console.log(data);
            setquote({
                name: "",
                phone: "",
                email: "",
                property: pName,
            });
            toast.success(" We Will Contact you soon!", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,

                theme: "light",
            });
        } catch (error) {
            console.log(error);
        }
    };

    console.log(pictures)
    // api call
    const fetchsingleproperty = async () => {
        try {
            const singleid = {
                name: decodeString(param.id),
            };
            const data = await FetchSinglePropertyData(singleid);
            setpropertyData(data?.data?.data);
            let arr = []
            data?.data?.data?.pictures.map((item) => {
                arr.push({ link: item, type: "image" })
            })
            arr.push({ type: "video", link: "https://www.youtube.com/embed/7e90gBu4pas" })
            setPictures(arr)
            console.log(data?.data?.data);
            setunitDetails(data?.data?.data?.unitDetails[0]?.detail);
        } catch (error) {
            console.log(error);
        }
    };
    const fetchDeveloper = async () => {
        try {
            const singleid = {
                id: decodeString(param.id),
            };
            const data = await FetchSingleDeveloperData(singleid);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchsingleproperty();
        fetchDeveloper();
        fetchknowledgeblogData();
        handleToggle(true);
        getUspData();
    }, [param.id]);

    // best quote

    const handleQuoteChange = (e) => {
        const { name, value } = e.target;

        setquote({ ...quote, [name]: value });
    };

    //Modal property
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        // setOpen(!open);
    };

    const handleAmenities = () => {
        if (!showAmenity) {
            setshowAmenity(true);
        } else {
            setshowAmenity(false);
        }
    };

    //blogs
    const [featuredBlog, setfeaturedBlog] = useState([]);

    const fetchknowledgeblogData = async () => {
        try {
            const data = await FetchFeatureBlog();
            setfeaturedBlog(data?.data?.data);
            console.log(data.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const [USPData, setUSPData] = useState([]);
    const getUspData = async () => {
        try {
            const payload = {
                id: decodeString(param.id),
            };
            const data = await FetchUSP(payload);
            setUSPData(data?.data?.data?.usp);
        } catch (error) {
            console.log(error);
        }
    };

    // Home Fest Register
    const [register, setRegister] = useState({
        firstName: "",
        lastName: "",
        projectName: propertyData?.name,
        phone: "",
        email: "",
    });

    const [showFest, setShowFest] = useState(false);
    const [buttonText, setButtonText] = useState("Get the best quote!");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegister({ ...register, [name]: value });
    };

    const handleClickFest = (text) => {
        setButtonText(text);
        setShowFest(true);
    };

    console.log(buttonText);

    const handleCloseFest = () => {
        setRegister({
            ...register,
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
        });
        setShowFest(false);
    };

    const handleClick = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const payload = {
                firstName: register.firstName,
                lastName: register.lastName,
                projectName: propertyData?.name,
                email: register.email,
                number: register.phone,
                brouchure: propertyData?.broucher,
            };
            if (buttonText === "Get Price and Offers") {
                const data = await PostPriceData({
                    name: register.firstName + " " + register.lastName,
                    phone: register.phone,
                    email: register.email,
                    property: propertyData?.name,
                });
            } else if (buttonText === "Download Brochure") {
                const data = await RegisterDataBrochure(payload);
            } else {
                const data = await AddEnquiry({
                    name: register.firstName + " " + register.lastName,
                    phone: register.phone,
                    email: register.email,
                    project: propertyData?.name,
                });
            }
            setFestInquiry({ brouchure: propertyData?.broucher });
            navigate("/thank-you");
            setIsLoading(false);
            setRegister({
                ...register,
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <HomeFest />
            <Container
                fluid
                className="property-Single "
                style={{ position: "relative" }}
            >
                {/* responsive icon */}

                {/* <button
          onClick={handleShowsideform}
          className="responsive-sideform-btn btn"
        >
          Quote
        </button> */}

                <Modal
                    show={showSideform}
                    onHide={handleCloseSideform}
                    className="property-sideform-modal"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                        <div className="property-side-form-sticky-resp">
                            <Row className=" property-sideform-head-container">
                                <Col lg={2} md={3} xs={2}>
                                    <div>
                                        <img
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                            }}
                                            src={logo}
                                            alt="logo"
                                        />
                                    </div>
                                </Col>
                                <Col lg={10} md={9} xs={10}>
                                    <span className="property-sideform-head ">
                                        <h5>Get the Best Quote!</h5>
                                    </span>
                                </Col>
                            </Row>

                            <Row xs={12} className="property-sideform-input">
                                <span>
                                    <input
                                        type="text"
                                        value={quote?.name}
                                        placeholder="Name"
                                        onChange={handleQuoteChange}
                                        name="name"
                                    />
                                </span>
                                <span>
                                    <input
                                        type="tel"
                                        placeholder="Phone"
                                        value={quote?.phone}
                                        onChange={handleQuoteChange}
                                        name="phone"
                                        required
                                    />
                                </span>
                                <span>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={quote?.email}
                                        onChange={handleQuoteChange}
                                        name="email"
                                        required
                                    />
                                </span>
                                <Row className="property-sideform-btn">
                                    <button onClick={() => quoteSubmit()}>
                                        Submit
                                    </button>
                                </Row>
                            </Row>
                        </div>
                    </Modal.Body>
                </Modal>

                <button
                    onClick={() => handleClickFest("Register")}
                    className="responsive-sideform-btn btn"
                >
                    Enquire Now
                </button>

                <Modal show={showFest} onHide={handleCloseFest} centered>
                    <div className="register-box">
                        <h5>
                            {buttonText}
                            <i
                                onClick={handleCloseFest}
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
                                    placeholder="First Name *"
                                />
                                <input
                                    name="lastName"
                                    value={register.lastName}
                                    type="text"
                                    pattern="[a-zA-Z ]{2,30}"
                                    title="Only Character"
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                />
                                <input
                                    value={propertyData?.name}
                                    readOnly
                                    type="text"
                                />
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
                                    I Agree to the{" "}
                                    <Link to="/privacy-policy">
                                        Terms & Conditions.
                                    </Link>
                                </p>
                                <div className="register-btn ">
                                    <button className="px-3">
                                        {isLoading &&
                                            buttonText === "Download Brochure" ? (
                                            <SpinLoader />
                                        ) : (
                                            "Submit"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal>

                <div className="property-sideform register-box">
                    <h5>Get a Callback</h5>
                    <div className="register-field">
                        <form onSubmit={handleClick}>
                            <input
                                name="firstName"
                                value={register.firstName}
                                type="text"
                                pattern="[a-zA-Z ]{2,30}"
                                title="Only Character"
                                required
                                onChange={handleChange}
                                placeholder="First Name*"
                            />
                            <input
                                name="lastName"
                                value={register.lastName}
                                type="text"
                                pattern="[A-Za-z]{2,30}"
                                title="Only Character"
                                onChange={handleChange}
                                placeholder="Last Name "
                            />
                            <input value={propertyData?.name} type="text" />
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
                                I Agree to the{" "}
                                <Link to="/privacy-policy">
                                    Terms & Conditions.
                                </Link>
                            </p>
                            <div className="register-btn">
                                <button>
                                    {" "}
                                    {isLoading &&
                                        buttonText !== "Download Brochure" ? (
                                        <SpinLoader />
                                    ) : (
                                        "Enquire Now"
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/*
        <div className="property-sideform p-4 col-lg-4">
          <div className="property-side-form-sticky">
            <Row className=" property-sideform-head-container">
              <Col lg={4} md={3} sm={2}>
                <div className="property-sideform-avatar">
                  <img
                    style={{ marginTop: "-10px" }}
                    src={logo}
                    alt="logo"
                    className="w-100"
                  />
                </div>
              </Col>
              <Col lg={8} md={9} sm={10}>
                <span className="property-sideform-head w-100">
                  <h5>Get the Best Quote!</h5>
                </span>
              </Col>
            </Row>

            <Row xs={12} className="property-sideform-input">
              <span>
                <input
                  type="text"
                  placeholder="Name"
                  value={quote?.name}
                  onChange={handleQuoteChange}
                  name="name"
                />
              </span>
              <span>
                <input
                  type="tel"
                  placeholder="Phone"
                  value={quote?.phone}
                  onChange={handleQuoteChange}
                  name="phone"
                />
              </span>
              <span>
                <input
                  type="email"
                  placeholder="Email"
                  value={quote?.email}
                  onChange={handleQuoteChange}
                  name="email"
                />
              </span>
              <Row className="property-sideform-btn">
                <button onClick={() => quoteSubmit()}>Get Best Quote</button>
              </Row>
            </Row>
          </div>
        </div> */}

                <div className="property-block">
                    <Container className="d-flex mb-3 ">
                        {/* begin part  */}

                        {/* side image */}

                        <div
                            // style={{ width: "100%" }}
                            className="property-first-img col-lg-8"
                        >
                            <Row className="property-overview-head d-block d-md-none">
                                <h4>{propertyData?.name}</h4>
                                <h5>{propertyData?.city}</h5>
                            </Row>
                            <div
                                id="carouselExampleControls"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    {/* {
                                        propertyData?.pictures?.map((item, index) => {
                                            return (

                                        })
                                    } */}
                                    <Carousel>
                                        {propertyData?.pictures?.map((item, index) => {
                                            return (
                                                <div>
                                                    <img
                                                        src={`${item}`}
                                                        alt="noe"
                                                    />
                                                </div>
                                            );
                                        })}

                                    </Carousel>
                                </div>

                            </div>
                        </div>
                    </Container>

                    {/* navigate */}
                    <Container>
                        <Row>
                            <Col
                                lg={9}
                                className="property-navigate-container flex-wrap"
                            >
                                <a
                                    href={"#overview"}
                                    className={`${location?.hash == "#overview"
                                        ? "navigate-active"
                                        : ""
                                        } property-navigate-links`}
                                >
                                    Overview
                                </a>
                                <a
                                    href={"#amenities"}
                                    className={`${location?.hash == "#amenities"
                                        ? "navigate-active"
                                        : ""
                                        } property-navigate-links`}
                                >
                                    Amenities
                                </a>
                                <a
                                    href={"#location"}
                                    className={`${location?.hash == "#location"
                                        ? "navigate-active"
                                        : ""
                                        } property-navigate-links`}
                                >
                                    Location
                                </a>
                                <a
                                    href={"#units"}
                                    className={`${location?.hash == "#units"
                                        ? "navigate-active"
                                        : ""
                                        } property-navigate-links`}
                                >
                                    Units
                                </a>
                                <a
                                    href={"#about"}
                                    className={`${location?.hash == "#about"
                                        ? "navigate-active"
                                        : ""
                                        } property-navigate-links`}
                                >
                                    About Developer
                                </a>
                                <a
                                    href={"#faq"}
                                    className={`${location?.hash == "#faq"
                                        ? "navigate-active"
                                        : ""
                                        } property-navigate-links`}
                                >
                                    FAQs
                                </a>
                            </Col>
                        </Row>
                    </Container>

                    {/* feature */}

                    <Container>
                        <Row>
                            <Col
                                lg={8}
                                id="overview"
                                className="property-overview"
                            >
                                <Row className="property-overview-head d-none d-md-block">
                                    <h4>{propertyData?.name}</h4>
                                    <h5>{propertyData?.city}</h5>
                                </Row>
                                <Row>
                                    <Row className="property-overview-btn-container">
                                        <Col xs={6} lg={4}>
                                            <div className="property-overview-btn">
                                                <LocationOnIcon />
                                                <h5>
                                                    {propertyData?.location}
                                                </h5>
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={4}>
                                            <div className="property-overview-btn">
                                                <PaidIcon />
                                                <h5>{propertyData?.price}</h5>
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={4}>
                                            <div className="property-overview-btn">
                                                <PushPinIcon />
                                                <h5>{propertyData?.area} </h5>
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={4}>
                                            {" "}
                                            <div className="property-overview-btn ">
                                                <MeetingRoomIcon />
                                                {propertyData?.unitDetails?.map(
                                                    (item, index) => (
                                                        <>
                                                            <p
                                                                className="w-0"
                                                                key={index}
                                                            >
                                                                {" "}
                                                                {item?.bhk}
                                                                {propertyData
                                                                    ?.unitDetails
                                                                    .length -
                                                                    1 ===
                                                                    index
                                                                    ? null
                                                                    : ","}
                                                            </p>
                                                        </>
                                                    )
                                                )}
                                                BHK
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={4}>
                                            <div className="property-overview-btn">
                                                <ApartmentIcon />
                                                <h5>
                                                    {propertyData?.unitsLeft}{" "}
                                                    Total Units
                                                </h5>
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={4}>
                                            <div className="property-overview-btn">
                                                <CheckBoxIcon />
                                                <h5>
                                                    {propertyData?.ready
                                                        ? "Ready to Move-In"
                                                        : "Possession Soon"}
                                                </h5>
                                            </div>
                                        </Col>
                                    </Row>
                                </Row>
                            </Col>
                        </Row>

                        {/* description */}
                        <Row>
                            <Col
                                className="property-overview-description"
                                lg={8}
                            >
                                <h5>Project Overview</h5>
                                <hr />
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: propertyData?.description,
                                    }}
                                    className="px-4 mb-4"
                                    style={{ wordWrap: "break-word" }}
                                ></div>

                                <a
                                    onClick={() =>
                                        handleClickFest("Download Brochure")
                                    }
                                    // href={propertyData?.broucher}
                                    target="_blank"
                                    className="broucher-btn mx-3 "
                                    download
                                >
                                    Download Brochure
                                </a>
                            </Col>
                        </Row>

                        {/* amenities */}

                        <Row id="amenities">
                            <Col className="property-amenity" lg={8}>
                                <h5>Amenities</h5>
                                <hr />

                                <Row>
                                    <Col className="property-amenity-content-container h-100">
                                        <div
                                            className="property-amenity-container"
                                            style={{
                                                height: `${showAmenity
                                                    ? `${100}%`
                                                    : `${16}vh`
                                                    }`,
                                            }}
                                        >
                                            {propertyData?.amenities?.map(
                                                (item, index) => {
                                                    return (
                                                        <div
                                                            key={index}
                                                            className="property-amenity-content"
                                                        >
                                                            <CheckIcon />
                                                            <h6>{item}</h6>
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </div>
                                        <div className="d-flex justify-content-end w-100 py-3">
                                            <button
                                                onClick={handleAmenities}
                                                className="float-right load-more-btn"
                                            >
                                                {showAmenity ? (
                                                    <span>
                                                        Hide <ArrowDropUpIcon />
                                                    </span>
                                                ) : (
                                                    <span>
                                                        Load More{" "}
                                                        <ArrowDropDownIcon />
                                                    </span>
                                                )}{" "}
                                            </button>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="property-amenity p-0" lg={8}>
                                <div className="video-carousel">
                                    <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" frameborder="0"></iframe>
                                </div>
                            </Col>
                        </Row>

                        {/* <Row id="amenities">
              <Col className="property-amenity" lg={8}>
                <h5>Project USP</h5>
                <hr />

                <Row>
                  <Col className="property-amenity-content-container h-100">
                    <div className="property-amenity-container" style={{}}>
                      {USPData?.map((item, index) => {
                        return (
                          <div key={index} className="property-USP-content">
                            <img src={item.icon} alt="nono" />
                            <h6>{item.detail}</h6>
                          </div>
                        );
                      })}
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row> */}
                        {/* location */}
                        <Row id="location">
                            <Col className="property-location" lg={8}>
                                <h5>Location</h5>
                                {/* <Map2 height="500px"  /> */}
                                {/* <MapWithAMarker
                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places"
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `500px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                                long={lng &&(lat)}
                                lati={lat &&(lng)}
                                /> */}
                                <Map
                                    lat={
                                        propertyData?.lat &&
                                        parseFloat(propertyData?.lat)
                                    }
                                    lng={
                                        propertyData?.lng &&
                                        parseFloat(propertyData?.lng)
                                    }
                                    location={propertyData?.location}
                                    projectName={propertyData?.name}
                                    height="500px"
                                />
                            </Col>
                        </Row>

                        {/* Units */}
                        <Row id="units">
                            <Col className="property-units" lg={8}>
                                <Row className="property-units-head">
                                    <Col lg={3}>
                                        <h5>Units</h5>
                                    </Col>
                                    <Col
                                        lg={9}
                                        className="d-flex justify-content-end"
                                    >
                                        {propertyData?.unitDetails?.map(
                                            (item, index) => {
                                                return (
                                                    <button
                                                        key={index}
                                                        className={`${unit == index
                                                            ? "property-units-head-active "
                                                            : ""
                                                            }`}
                                                        onClick={() => {
                                                            setunitDetails(
                                                                item?.detail
                                                            );
                                                            setunit(index);
                                                        }}
                                                    >
                                                        {" "}
                                                        {item.bhk}
                                                    </button>
                                                );
                                            }
                                        )}
                                        {/* <button className={`${unit==1 ? ("property-units-head-active"):("")}`} onClick={handle2BHKunit}>{item.bhk}</button> */}
                                    </Col>
                                </Row>
                                <hr />
                                <Row className="property-units-SubHead">
                                    <h5>Floor Plan</h5>
                                    <h5>BHK</h5>
                                    <h5>Size</h5>
                                    <h5>Price</h5>
                                </Row>
                                <Row>
                                    {unitDetails?.map((item, index) => {
                                        return (
                                            <Singleunit
                                                handleClickFest={
                                                    handleClickFest
                                                }
                                                key={index}
                                                data={item}
                                                propertyData={propertyData}
                                            />
                                        );
                                    })}
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    {/* About dev */}

                    <Row id="about">
                        <Col className="property-aboutDeveloper">
                            <Row className="property-aboutDeveloper-head">
                                <h5>About Developer</h5>
                                <h6>{propertyData?.developer?.name}</h6>
                            </Row>
                            <Row className="property-aboutDeveloper-work">
                                <Col lg={1}>
                                    <div className="property-aboutDeveloper-img">
                                        <figure>
                                            <img
                                                src={
                                                    propertyData?.developer
                                                        ?.picture
                                                }
                                                className="w-100"
                                                alt="img"
                                            />
                                        </figure>
                                    </div>
                                </Col>
                                <Col
                                    lg={11}
                                    className="property-aboutDeveloper-work-side mt-4 mt-lg-0"
                                >
                                    <h6>
                                        <p></p>{" "}
                                        {propertyData?.developer?.totalProjects}{" "}
                                        + projects developed
                                    </h6>
                                    <h6>
                                        {" "}
                                        <p></p>
                                        {propertyData?.developer?.area}
                                    </h6>
                                    <h6>
                                        <p></p>
                                        {propertyData?.developer?.possessions}
                                    </h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col
                                    lg={8}
                                    className="property-aboutDeveloper-desc"
                                >
                                    <h6
                                        dangerouslySetInnerHTML={{
                                            __html: propertyData?.developer
                                                ?.description,
                                        }}
                                    ></h6>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Container>
                        {/* faq */}

                        <Row id="faq">
                            <Col lg={8} clasName="property-FAQ">
                                <Row className="property-FAQ-head">
                                    <h5>FAQ</h5>
                                </Row>
                                <Row className="propert-FAQ-accordian">
                                    <CustomizedAccordions
                                        question={
                                            "Q1. Why should I choose Aspire?"
                                        }
                                        answer={
                                            "Founded in 2017, has helped more than 10,000 people find their dream homes through the efforts of more than 20 of our dedicated employees and their commitment towards assisting people in their home buying process."
                                        }
                                    />
                                    <CustomizedAccordions
                                        question={
                                            "Q2. How can I book a property through Aspire Proptech.com?"
                                        }
                                        answer={`To buy a property through Aspire , you need to follow just few simple steps:<br>1. Check out our website<br>2. Select the property that meets your criteria and drop an enquiry for the same.<br>3. Go on a site visit of the selected property with our property experts.<br>4. Close the deal- We handle all legal paperwork, arrange home loans (if needed) and manage all documentation work with the builder and the bank.`
                                            .split("<br>")
                                            .join("\n")}
                                    />
                                    <CustomizedAccordions
                                        question={
                                            "Q3. Will Aspire proptech charge me a brokerage fee?"
                                        }
                                        answer={
                                            "No, Never! We don’t charge any brokerage."
                                        }
                                    />
                                    <CustomizedAccordions
                                        question={
                                            "Q4. Do you offer home loan services?"
                                        }
                                        answer={
                                            "Yes. We have tie-ups with some of the leading banks in the country such as the HDFC Bank, the ICICI Bank, the Axis Bank, LIC India and PNB."
                                        }
                                    />{" "}
                                    <CustomizedAccordions
                                        question={
                                            "Q5. What are the areas of Bangalore where you have projects?"
                                        }
                                        answer={
                                            "Our projects are located in North, South, and East Bangalore."
                                        }
                                    />
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>

            {/* feature project */}

            <div className="container partner-feature-projects my-lg-5">
                <div className="row">
                    <div className="col-lg-5 mt-4 mt-lg-0">
                        {" "}
                        <h3>View Featured Projects</h3>{" "}
                    </div>
                </div>
                <div className="row h-100 my-lg-5">
                    <CarouselComponent />
                </div>
            </div>

            {/* featured blogs */}
            <div
                style={{ backgroundColor: "#ebebeb" }}
                className="container-fluid py-5 px-0"
            >
                <div className="container">
                    <h3 className="blogMainHeading m-0 py-5">Featured Blogs</h3>
                    <div className="container">
                        <Row className="d-flex  homeloan-blogcard-scroll">
                            <Col
                                xs={12}
                                className="d-flex  BlogsRow    align-items-center"
                            >
                                {featuredBlog?.map((item, index) => {
                                    return (
                                        <HomeBlogCard key={index} data={item} />
                                    );
                                })}
                            </Col>
                            {/* <Col xs={12} className="ArrowIcon  d-flex align-items-center ">
                       <span>
                       <ArrowForwardIcon/>
                       </span>
                      </Col> */}
                        </Row>
                    </div>
                </div>
            </div>

            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    zIndex: "10000000000000000000000000000000",
                }}
                open={open}
                onClick={handleClose}
            >
                <div className="container-fluid  property-animation-modal d-flex flex-column justify-content-center align-items-center">
                    <button onClick={handleClose} className="Modal-Closer">
                        <CloseIcon />
                    </button>

                    <Row className="property-overview-head-modal">
                        <h4>{propertyData?.name}</h4>
                        <h5>{propertyData?.city}</h5>
                    </Row>
                    <Row className="property-overview-btn-container-modal d-flex flex-column align-items-center">
                        <Col className="animationContainer w-100 d-flex flex-column align-items-center">
                            <Row className="property-overview-btn-modal locationOn d-flex">
                                <Col lg={2} xs={3}>
                                    <LocationOnIcon />
                                </Col>
                                <Col xs={9}>
                                    <h5
                                        className="text-center"
                                        style={{ marginRight: "2%" }}
                                    >
                                        {propertyData?.location}
                                    </h5>
                                </Col>
                            </Row>

                            <Row className="property-overview-btn-modal money ">
                                <Col lg={2} xs={3}>
                                    <PaidIcon />
                                </Col>
                                <Col lg={10} xs={9}>
                                    <h5 className="text-center">
                                        {propertyData?.price}
                                    </h5>
                                </Col>
                            </Row>
                            <Row className="property-overview-btn-modal area">
                                <Col lg={2} xs={3}>
                                    <PushPinIcon />
                                </Col>
                                <Col lg={10} xs={9}>
                                    <h5 className="text-center">
                                        {propertyData?.area}{" "}
                                    </h5>
                                </Col>
                            </Row>
                            <Row className="property-overview-btn-modal bhk">
                                <Col lg={2} xs={3}>
                                    <MeetingRoomIcon />
                                </Col>
                                <Col
                                    lg={10}
                                    xs={9}
                                    className="d-flex justify-content-center align-items-center"
                                >
                                    {propertyData?.unitDetails?.map(
                                        (item, index) => (
                                            <div
                                                className=""
                                                style={{ marginLeft: "3%" }}
                                            >
                                                <h5 className="text-center mx-1">
                                                    {" "}
                                                    {item?.bhk}{" "}
                                                    {propertyData?.unitDetails
                                                        .length -
                                                        1 ===
                                                        index
                                                        ? null
                                                        : ","}
                                                </h5>
                                            </div>
                                        )
                                    )}{" "}
                                    <div className="d-flex align-center">
                                        BHK
                                    </div>
                                </Col>
                            </Row>
                            <Row className="property-overview-btn-modal units">
                                <Col lg={2} xs={3}>
                                    <ApartmentIcon />
                                </Col>
                                <Col lg={10} xs={9}>
                                    <h5 className="text-center">
                                        {propertyData?.unitsLeft} Total Units
                                    </h5>
                                </Col>
                            </Row>
                            <Row className="property-overview-btn-modal move">
                                <Col lg={2} xs={3}>
                                    <CheckBoxIcon />
                                </Col>
                                <Col xs={9} lg={10}>
                                    <h5 className="text-center">
                                        {propertyData?.ready
                                            ? "Ready to Move-In"
                                            : "Possession Soon"}
                                    </h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Backdrop>
        </>
    );
}

export default Property;
