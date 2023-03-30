import React from "react";
import { Col, Row, Container, CloseButton, NavItem } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import "../../Assets/Common/Navbar.css";
import logo from "../../Assets/Images/logo1.svg";
import ListIcon from "@mui/icons-material/List";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { HashLink } from "react-router-hash-link";
import HomeFest from "../../Assets/Ads/fest-header.png";

function NewNav() {
    const location = useLocation();
    return (
        <>
            <Container fluid className="Navbar">
                <Container>
                    <Row>
                        <Col xs={3} className="logo mob-logo">
                            <NavLink to={"/"}>
                                <img src={logo} alt="img" />
                            </NavLink>
                            {/* <NavLink to="/aspire-homefest2023">
                <div className="fest-img">
                  <img src={HomeFest} alt="" />
                </div>
              </NavLink> */}
                        </Col>

                        <Col xs={12} className="Links-Container">
                            <Col className="logo">
                                <NavLink to={"/"}>
                                    <img src={logo} alt="img" />
                                </NavLink>
                            </Col>
                            <Col className="Links ">
                                <NavLink
                                    className={
                                        location.pathname == "/"
                                            ? "Link-active"
                                            : ""
                                    }
                                    to={"/"}
                                >
                                    Home
                                </NavLink>
                            </Col>
                            <Col className="Links ">
                                <NavLink
                                    className={
                                        location.pathname == "/projects"
                                            ? "Link-active"
                                            : ""
                                    }
                                    to={"/projects"}
                                >
                                    Projects
                                </NavLink>
                            </Col>
                            <Col className="Links">
                                <NavLink
                                    className={
                                        location.pathname == "/about"
                                            ? "Link-active"
                                            : ""
                                    }
                                    to={"/about"}
                                >
                                    About Us
                                </NavLink>
                            </Col>

                            <Col className="Links ">
                                <NavLink
                                    className={
                                        location.pathname == "/homeloan"
                                            ? "Link-active"
                                            : ""
                                    }
                                    to={"/homeloan"}
                                >
                                    Home Loan
                                </NavLink>
                            </Col>

                            <Col className="Links">
                                <NavLink
                                    className={
                                        location.pathname == "/blogs"
                                            ? "Link-active"
                                            : ""
                                    }
                                    to={"/blogs"}
                                >
                                    <NavDropdown
                                        id="nav-dropdown-dark-example"
                                        title="Resources"
                                        className={
                                            location.pathname == "/blogs"
                                                ? "Link-active"
                                                : location.pathname ==
                                                  "/careers"
                                                ? "Link-active"
                                                : ""
                                        }
                                        menuVariant="dark"
                                        style={{ color: "white" }}
                                    >
                                        <NavDropdown.Item
                                            style={{
                                                borderBottom: "none",
                                                hover: "none",
                                                backgroundColor: "transparent",
                                            }}
                                        >
                                            <HashLink
                                                style={{
                                                    padding: "8px 15px",
                                                    display: "flex",
                                                }}
                                                to="/blogs"
                                            >
                                                All Blogs
                                            </HashLink>
                                            <HashLink
                                                style={{
                                                    padding: "8px 15px",
                                                    display: "flex",
                                                }}
                                                to="/careers"
                                            >
                                                Careers
                                            </HashLink>

                                            <HashLink
                                                style={{
                                                    padding: "8px  15px",
                                                    display: "flex",
                                                }}
                                                to="/blogs#knowledgeSeries"
                                            >
                                                Knowledge Series
                                            </HashLink>
                                            <HashLink
                                                style={{
                                                    padding: "8px 15px",
                                                    display: "flex",
                                                }}
                                                to="/blogs#localityBytes"
                                            >
                                                Locality Bytes
                                            </HashLink>
                                            <HashLink
                                                style={{
                                                    padding: "8px 15px",
                                                    display: "flex",
                                                }}
                                                to="/blogs#newsUpdates"
                                            >
                                                News and Updates
                                            </HashLink>
                                            <HashLink
                                                style={{
                                                    padding: "8px 15px",
                                                    display: "flex",
                                                }}
                                                to="/blogs#others"
                                            >
                                                Other Blogs
                                            </HashLink>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    {/* <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="/blogs">All Blogs</a>
                                                    <a class="dropdown-item" href="#">Knowledge Series</a>
                                                    <a class="dropdown-item" href="#">Locality Bytes</a>
                                                    <a class="dropdown-item" href="#">News and Updates</a>
                                                    <a class="dropdown-item" href="#"> Other Blogs</a>
                                                </div> */}
                                </NavLink>
                            </Col>

                            {/* <Col className="Links">
                <NavLink
                  className={
                    location.pathname == "/career" ? "Link-active" : ""
                  }
                  to={"/career"}
                >
                  Careers
                </NavLink>
              </Col> */}

                            <Col className=" Link-special">
                                <NavLink to={"/partners"}>Partners</NavLink>
                            </Col>

                            <Col className=" Link-special">
                                <NavLink to={"/contact"}>Contact Us</NavLink>
                            </Col>
                        </Col>
                        <Col className="navbar-menu-icon justify-content-end align-items-center">
                            <IconButton>
                                <ListIcon
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasRight"
                                    aria-controls="offcanvasRight"
                                />
                            </IconButton>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <div
                className="offcanvas offcanvas-end canvas-width "
                style={{
                    zIndex: "1000000000000",
                    color: "white",
                    backgroundColor: "var(--blueColor)",
                }}
                tabindex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
            >
                <div className="offcanvas-header">
                    <div></div>
                    <CloseIcon
                        style={{ color: "white", fontSize: "2rem" }}
                        data-bs-dismiss="offcanvas"
                    />
                </div>
                <div className="offcanvas-body ">
                    <Col className="Links-Container-resp">
                        <Col className="Links ">
                            <NavLink
                                className={
                                    location.pathname == "/"
                                        ? "Link-active"
                                        : ""
                                }
                                to={"/"}
                            >
                                Home
                            </NavLink>
                        </Col>
                        <Col className="Links ">
                            <NavLink
                                className={
                                    location.pathname == "/projects"
                                        ? "Link-active"
                                        : ""
                                }
                                to={"/projects"}
                            >
                                Projects
                            </NavLink>
                        </Col>
                        <Col className="Links">
                            <NavLink
                                className={
                                    location.pathname == "/about"
                                        ? "Link-active"
                                        : ""
                                }
                                to={"/about"}
                            >
                                About Us
                            </NavLink>
                        </Col>

                        <Col className="Links ">
                            <NavLink
                                className={
                                    location.pathname == "/homeloan"
                                        ? "Link-active"
                                        : ""
                                }
                                to={"/homeloan"}
                            >
                                Home Loan
                            </NavLink>
                        </Col>

                        {/* <Col className="Links">
              <NavLink
                className={location.pathname == "/blogs" ? "Link-active" : ""}
                to={"/blogs"}
              >
                Blogs
              </NavLink>
            </Col> */}

                        <Col className="Links">
                            <NavDropdown
                                // id="nav-dropdown-dark-example"
                                title="Resources"
                                className={
                                    location.pathname == "/blogs"
                                        ? "Link-active"
                                        : location.pathname == "/careers"
                                        ? "Link-active"
                                        : ""
                                }
                                menuVariant="dark"
                                style={{ color: "white" }}
                            >
                                <NavDropdown.Item
                                    style={{
                                        borderBottom: "none",
                                        hover: "none",
                                        backgroundColor: "transparent",
                                    }}
                                >
                                    <HashLink
                                        style={{
                                            padding: "8px 15px",
                                            display: "flex",
                                        }}
                                        to="/blogs"
                                    >
                                        All Blogs
                                    </HashLink>
                                    <HashLink
                                        style={{
                                            padding: "8px 15px",
                                            display: "flex",
                                        }}
                                        to="/careers"
                                    >
                                        Careers
                                    </HashLink>

                                    <HashLink
                                        style={{
                                            padding: "8px  15px",
                                            display: "flex",
                                        }}
                                        to="/blogs#knowledgeSeries"
                                    >
                                        Knowledge Series
                                    </HashLink>
                                    <HashLink
                                        style={{
                                            padding: "8px 15px",
                                            display: "flex",
                                        }}
                                        to="/blogs#localityBytes"
                                    >
                                        Locality Bytes
                                    </HashLink>
                                    <HashLink
                                        style={{
                                            padding: "8px 15px",
                                            display: "flex",
                                        }}
                                        to="/blogs#newsUpdates"
                                    >
                                        News and Updates
                                    </HashLink>
                                    <HashLink
                                        style={{
                                            padding: "8px 15px",
                                            display: "flex",
                                        }}
                                        to="/blogs#others"
                                    >
                                        Other Blogs
                                    </HashLink>
                                    <HashLink
                                        style={{
                                            padding: "8px 15px",
                                            display: "flex",
                                        }}
                                        to="/ads"
                                    >
                                        Advertisement
                                    </HashLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Col>

                        <Col className=" Link-special">
                            <NavLink to={"/partners"}>Partners</NavLink>
                        </Col>

                        <Col className=" Link-special">
                            <NavLink to={"/contact"}>Contact Us</NavLink>
                        </Col>
                    </Col>
                </div>
            </div>
        </>
    );
}

export default NewNav;
