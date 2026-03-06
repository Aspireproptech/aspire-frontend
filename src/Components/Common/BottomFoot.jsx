import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../../Assets/Images/logo1.svg";
import "../../Assets/Common/BottomFoot.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import { YoutubeSearchedForOutlined } from "@mui/icons-material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function BottomFoot() {
    const redirectMail = () => {
        window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=hello@aspireprop.com&su=SUBJECT&body=Your Message",
            "",
            "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=480"
        );
    };
    return (
        <div className="footerDiv container-fluid pb-5">
            <div className="container">
                <Row className="w-100 py-5">
                    <Col
                        lg={1}
                        xs={3}
                        sm={2}
                        className="d-flex  align-items-start justify-content-start"
                    >
                        <img src={logo} className="w-100" alt="Img" />
                    </Col>
                    <Col
                        xs={9}
                        sm={10}
                        lg={11}
                        className=" my-xs-3 visible-xs d-flex align-items-end justify-content-end"
                    >
                        <span className="ShareIcon">
                            <a href="https://www.facebook.com/AspireProptech ">
                                <FacebookIcon />{" "}
                            </a>
                        </span>
                        <span className="ShareIcon">
                            <a href="https://www.instagram.com/prop_aspire/ ">
                                <InstagramIcon />
                            </a>
                        </span>
                        <span className="ShareIcon">
                            <a href="https://www.youtube.com/channel/UCjKyaI9f6Vvl5s9LJpn4RPw ">
                                <YouTubeIcon />
                            </a>
                        </span>
                        <span className="ShareIcon">
                            <a href="https://www.linkedin.com/company/13609537/">
                                {" "}
                                <LinkedInIcon />
                            </a>
                        </span>
                    </Col>
                </Row>
                <Row className="mb-lg-5">
                    <h4 className="dreamReality">
                        Make your dreams a{" "}
                        <span style={{ color: "#F47E20" }}>reality</span>
                    </h4>
                </Row>
                <Row className="d-flex">
                    <Col
                        xs={12}
                        md={12}
                        lg={6}
                        className="d-flex footer-blocks  align-items-start"
                    >
                        <div className="CallBlock">
                            <div className="call-content">
                                <CallIcon />
                                <h4>
                                    Call
                                    <h5>+91 9148448258</h5>
                                </h4>
                            </div>
                            <button>
                                <a
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                    }}
                                    href="tel:+91 9148448258"
                                >
                                    Call Now
                                </a>
                            </button>
                        </div>

                        <div className="MailBlock ">
                            <div className="mail-content">
                                <EmailIcon />
                                <h4>
                                    Email
                                    <h5> hello@aspireprop.com</h5>
                                </h4>
                            </div>
                            <button onClick={() => redirectMail()}>
                                Email Now
                            </button>
                        </div>
                    </Col>

                    <Col className="mt-3 mt-lg-0">
                        <Row lg={12} className="pb-3">
                            <Col xs={6} style={{ color: "white" }}>
                                <h5 className="mb-2">Details</h5>
                                <div className="d-flex flex-column">
                                    <Link
                                        to="/about"
                                        className="mt-1 text-decoration-none"
                                        style={{ color: "white" }}
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        to="/homeloan"
                                        className="mt-1 text-decoration-none"
                                        style={{ color: "white" }}
                                    >
                                        Home Loan
                                    </Link>
                                    <Link
                                        to="/partners"
                                        className="mt-1 text-decoration-none"
                                        style={{ color: "white" }}
                                    >
                                        Partners
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="mt-1 text-decoration-none"
                                        style={{ color: "white" }}
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </Col>
                            <Col xs={6} style={{ color: "white" }}>
                                <h5 className="mb-2 ">Info</h5>
                                <div className="d-flex flex-column">
                                    {/* <Link
                                        to="/blogs"
                                        className="mt-1 text-decoration-none"
                                        style={{ color: "white" }}
                                    >
                                        Blogs
                                    </Link> */}
                                    <Link
                                        to="/careers"
                                        className="mt-1 text-decoration-none"
                                        style={{ color: "white" }}
                                    >
                                        Careers
                                    </Link>
                                    <Link
                                        to="/disclaimer"
                                        className="mt-1 text-decoration-none"
                                        style={{ color: "white" }}
                                    >
                                        Disclaimer
                                    </Link>
                                    <Link
                                        to="/privacy-policy"
                                        className="mt-1 text-decoration-none"
                                        style={{ color: "white" }}
                                    >
                                        Privacy Policy
                                    </Link>
                                </div>
                            </Col>
                            {/* <Col xs={4} style={{color: "white"}}>
                  <h5>Column Heading</h5>
                  <p>Link goes here</p>
                  <p>Link goes here</p>
                  <p>Link goes here</p>
                  <p>Link goes here</p>
                  <p>Link goes here</p>
                </Col> */}
                        </Row>
                    </Col>
                    <hr className="mt-4" style={{ color: "white" }} />
                    <Col xs={6} style={{ color: "white" }}>
                        <h6 className="mb-2 mt-4">Address</h6>

                        <p>No. 45/11, First Floor, </p>
                        <p>North Park Road, Kumara Park East,</p>
                        <p>Bengaluru 560001</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default BottomFoot;
